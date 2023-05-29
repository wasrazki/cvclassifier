import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';
=======
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/login/login.component';
import { GetCvsComponent } from './app/get-cvs/get-cvs.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { FooterComponent } from './app/footer/footer.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadCvComponent } from './app/upload-cv/upload-cv.component';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
=======
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetCvsComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    UploadCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
=======
    NgbModule
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
