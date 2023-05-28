import numpy as np 
import pandas as pd 
from sklearn.feature_extraction.text import TfidfVectorizer
import re
import string
import nltk
"""class CvClassifier:
    
    def __init__(self) -> None:
        self.model=pickle.load(open("model.pkl","rb"))
    def predict(self,text):
        text_feature =self.model.vectorizer.transform([text])
        predicted_idx = self.model.predict(text_feature)[0]
        print(self.model.correspondance.loc[predicted_idx][0])"""
print("Starting...")
#-----------------------------------------------------------------------------------------
#LOAD DATA
data = pd.read_csv("./UpdatedResumeDataSet.csv")
print("Dataset read...")
#-----------------------------------------------------------------------------------------
#CLEAN CATEGORY TEXT
#nltk.download('stopwords')
stopwords = nltk.corpus.stopwords.words('english')

def clean_text(text):
    #convert text to lowercase
    text = text.lower() 
    #remove any numeric characters
    text = ''.join([word for word in text if not word.isdigit()]) 

#     text = [word for word in text if re.search("\d", word)== None]
    # remove URLs
    text = re.sub('http\S+\s*', ' ', text)  
    # remove RT and cc
    text = re.sub('RT|cc', ' ', text)
    # remove hashtags
    text = re.sub('#\S+', '', text)  
    # remove mentions
    text = re.sub('@\S+', '  ', text)  
    #punctuations removal
    text = "".join([word for word in text if word not in string.punctuation])
    text = re.sub("\W", " ", str(text))
    #stopwords removal
    ext = [word for word in text.split() if word not in stopwords]
    #replace consecutive non-ASCII characters with a space
    text = re.sub(r'[^\x00-\x7f]',r' ', text) 
    #extra whitespace removal
    text = re.sub('\s+', ' ', text)
    return text

data['cleaned_text'] = data['Resume'].apply(lambda x: clean_text(x))
#-----------------------------------------------------------------------------------------
#ENCODING THE CATEGORICAL VARIABLE "CATEGORY"
from sklearn.preprocessing import LabelEncoder
labelencoder = LabelEncoder()
data["Category_N"] = labelencoder.fit_transform(data["Category"])
#-----------------------------------------------------------------------------------------
#VECTORIZING CLEANED TEXT
Text = data['cleaned_text'].values
Labels = data['Category_N'].values
#-----------------------------------------------------------------------------------------
from sklearn.multiclass import OneVsRestClassifier
from sklearn.neighbors import KNeighborsClassifier
import pickle
model = OneVsRestClassifier(KNeighborsClassifier())
#-----------------------------------------------------------------------------------------
#CORRESPONDANCE ENTRE CATEGORY AND CATEGORY_N
model.correspondance=pd.DataFrame({"Category":data.Category.unique(),"Category_N":data.Category_N.unique()})
model.correspondance=model.correspondance.set_index("Category_N")
#-----------------------------------------------------------------------------------------
model.vectorizer=TfidfVectorizer() 
model.vectorizer.fit(Text)
Features =model.vectorizer.transform(Text)
#-----------------------------------------------------------------------------------------
#TRAIN TEST SPLIT
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test = train_test_split(Features,Labels,random_state=0, test_size=0.2)
#-----------------------------------------------------------------------------------------
#TRAIN THE MODEL
model.fit(X_train, y_train)
y_pred1=model.predict(X_train)
y_pred2 =model.predict(X_test)
# Calculate accuracy score
accuracy1 =model.score(X_train, y_train)
accuracy2 = model.score(X_test, y_test)
print(" TRAIN ACCURACY: ",accuracy1)
print(" TEST ACCURACY: ",accuracy2)
#-----------------------------------------------------------------------------------------
#SAVE THE MODEL INTO A FILE
import pickle
import os
#modelFileName="MyModel"
path = os.path.join(os.getcwd() , 'model.pkl')
        
with open(path, "wb") as fichier:
        pickle.dump(model, fichier)
#------------------------------------------------

#-----------------------------------------------------------------------------------------

#-----------------------------------------------------------------------------------------

#classifier = CvClassifier()
print("finished...")

