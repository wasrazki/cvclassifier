import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCvsComponent } from './app/get-cvs/get-cvs.component';
import { LoginComponent } from './app/login/login.component';
import { UploadCvComponent } from './app/upload-cv/upload-cv.component';

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
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
