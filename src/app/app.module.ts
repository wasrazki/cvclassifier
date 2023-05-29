import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/login/login.component';
import { GetCvsComponent } from './app/get-cvs/get-cvs.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { FooterComponent } from './app/footer/footer.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadCvComponent } from './app/upload-cv/upload-cv.component';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'

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
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
