import { Component, OnInit } from '@angular/core';

import { FlaskapiService } from 'src/app/flaskapi.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss']
})
export class UploadCvComponent implements OnInit {
  selectedFile!: File ;
  constructor(private flaskApiService: FlaskapiService, private router:Router) { }

  ngOnInit(): void {
  }
  /*********/
  onFileSelected(event: Event): void {
    
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    // Handle the selected files here
    if (files && files.length > 0) {
       this.selectedFile = files[0];
      // Perform any necessary operations with the file
      console.log('Selected file:', this.selectedFile);
      
    }}
  /*********/
  onSubmit(): void {
    
    if (this.selectedFile) {
      
      const formData: FormData = new FormData();
      
      formData.append('cv', this.selectedFile);
      
      this.flaskApiService.uploadCv(formData).subscribe({
        next: (response: any) => {
          console.log('File uploaded successfully!');
          // Save CV information in the database
          /*this.flaskApiService.saveCVInfo(this.selectedFile.name, response.prediction).subscribe({
              next: () => {
                  console.log('CV information saved successfully!');
                  this.router.navigate(['/resultat'], { queryParams: { prediction: response.prediction } });
              },
              error: (error: any) => {
                  console.error('Error saving CV information:', error);
              }
          });*/
      },
        error: (error: any) => {
          console.error('Error uploading file:', error);
        }
      });
    }
    
  }
  
  
  }
