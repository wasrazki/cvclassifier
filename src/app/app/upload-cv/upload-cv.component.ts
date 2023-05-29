import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { FlaskapiService } from 'src/app/flaskapi.service';
import {Router} from '@angular/router';
=======
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150
@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss']
})
export class UploadCvComponent implements OnInit {
<<<<<<< HEAD
  selectedFile!: File ;
  constructor(private flaskApiService: FlaskapiService, private router:Router) { }

  ngOnInit(): void {
  }
  /*********/
  onFileSelected(event: Event): void {
    console.log("onFileSelected begins executing");
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    // Handle the selected files here
    if (files && files.length > 0) {
       this.selectedFile = files[0];
      // Perform any necessary operations with the file
      console.log('Selected file:', this.selectedFile);
      console.log("onFileSelected is done executing");
    }}
  /*********/
  onSubmit(): void {
    console.log("onSubmit begins executing");
    if (this.selectedFile) {
      console.log("9bal l FormData = new FormData() bedhabt");
      const formData: FormData = new FormData();
      console.log("9bal l formData.append('cv', this.selectedFile); bedhabt");
      formData.append('cv', this.selectedFile);
      console.log("9bal l flaskapiService.uploadCv bedhabt");
      this.flaskApiService.uploadCv(formData).subscribe({
        next: (response: any) => {
          console.log('File uploaded successfully!');
          this.router.navigate(['/resultat'], { queryParams: { prediction: response.prediction } });
        },
        error: (error: any) => {
          console.error('Error uploading file:', error);
        }
      });
    }
    console.log("onSubmit is done executing");
  }
  
  
  }
=======

  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150
