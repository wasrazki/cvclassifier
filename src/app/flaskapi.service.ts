import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlaskapiService {

  constructor(private httpClient : HttpClient) { }
  public server:string="http://localhost:3000/"
  
  
  uploadCv(formData: FormData): Observable<any> {
    return this.httpClient.post(this.server + 'resultat', formData);
  }
      

  predict(cvFile: File) {
    const formData = new FormData();
    formData.append('cv', cvFile);

    return this.httpClient.post<any>(`${this.server}resultat`, formData);
  }

  getCVs(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/all/cv');
  }


}