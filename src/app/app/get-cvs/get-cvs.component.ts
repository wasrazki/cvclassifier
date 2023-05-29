import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FlaskapiService } from 'src/app/flaskapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-cvs',
  templateUrl: './get-cvs.component.html'/*,
  styleUrls: ['./get-cvs.component.scss']*/
})
export class GetCvsComponent implements OnInit {
  cvs: any[] = [];

  constructor(private flaskApiService: FlaskapiService, private router:Router) { }

  ngOnInit(): void {
    this.fetchCVs(); // Fetch CV data when the component initializes
  }

  fetchCVs(): void {
    this.flaskApiService.getCVs().subscribe({
      next: (response: any[]) => {
        this.cvs = response; // Assign the fetched CV data to the 'cvs' property
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
