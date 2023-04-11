import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCvsComponent } from './app/get-cvs/get-cvs.component';
import { LoginComponent } from './app/login/login.component';
import { UploadCvComponent } from './app/upload-cv/upload-cv.component';
import { CreateaccountComponent } from './app/createaccount/createaccount.component';
import { SecondinComponent } from './app/secondin/secondin.component';
import { ResultatComponent } from './app/resultat/resultat.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'upload/cv',
    component: UploadCvComponent
  },
  {
    path: 'all/cv',
    component: GetCvsComponent
  },
  { 
    path: 'create',
    component: CreateaccountComponent
  },
  {path: 'secondin',
   component: SecondinComponent },
   { 
    path:'resultat',
    component:ResultatComponent }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
