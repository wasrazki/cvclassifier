from flask import Flask,render_template,request
import os
import PyPDF2
import pickle
from flask import jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
#-----------------------------------------------------------------------------------------
app = Flask(__name__)
cors = CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cv.db'  
db = SQLAlchemy(app)
migrate = Migrate(app, db)
class CV(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    category = db.Column(db.String(255))
#-----------------------------------------------------------------------------------------
#-----------------------------------------------------------------------------------------
@app.route('/resultat',methods=['POST'])
def predict():
    if request.method == 'POST':
        cvfile=request.files['cv']
        path = os.path.join(os.getcwd() , 'cvs', cvfile.filename)
        if(cvfile.filename):
            cvfile.save(path)
        
            # Open the PDF file in read-binary mode
            with open(path, 'rb') as pdf_file:
                pdf_reader = PyPDF2.PdfReader(pdf_file)
                text = ''
                for page_num in range(len(pdf_reader.pages)):
                    # Extract the text from the current page
                    page = pdf_reader.pages[page_num]
                    page_text = page.extract_text()
                    # Append the page text to the overall text string
                    text += page_text
            
            #Load model
            print("Loading model")
            
            with open('model.pkl', 'rb') as myModel:
                model=pickle.load(open("model.pkl","rb"))
            
                #Vectorize text
            text_feature = model.vectorizer.transform([text])
                #Predict
            newPred=True
            predicted_idx = model.predict(text_feature)[0]
            predicted_label=model.correspondance.loc[predicted_idx][0]
            print(predicted_label)
            nom=cvfile.filename.split(".pdf")[0]
            cv = CV(name=nom, category=predicted_label)
            db.session.add(cv)
            db.session.commit()
            return jsonify({'prediction': predicted_label})
    else:
        # Handle the case when the method is not POST
        return jsonify({'error': 'Method Not Allowed'})
    


@app.route('/all/cv', methods=['GET'])
def get_all_cvs():
    cvs = CV.query.all()
    cv_data = [{'id': cv.id, 'name': cv.name, 'category': cv.category} for cv in cvs]
    return jsonify(cv_data)

#-----------------------------------------------------------------------------------------

if __name__=="__main__":
    app.run(port=3000,debug=True)