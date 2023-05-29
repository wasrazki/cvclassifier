import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FlaskapiService } from 'src/app/flaskapi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-cvs',
  templateUrl: './get-cvs.component.html'/*,
  styleUrls: ['./get-cvs.component.scss']*/
})
export class GetCvsComponent implements OnInit {

  constructor(private flaskApiService: FlaskapiService, private router:Router) { }

  ngOnInit(): void {
  }
  /*public getCvs(){
    this.flaskApiService.getCvs();
    
  }*/
=======

@Component({
  selector: 'app-get-cvs',
  templateUrl: './get-cvs.component.html',
  styleUrls: ['./get-cvs.component.scss']
})
export class GetCvsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150

}
