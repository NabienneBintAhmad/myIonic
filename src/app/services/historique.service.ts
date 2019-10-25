import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private endpoint = 'http://127.0.0.1:8000/api/listerperiodeEnvoie';
  private endpoint1 = 'http://127.0.0.1:8000/api/listerperiodeRetrait';

  constructor(private httpClient: HttpClient) { }

  infoenvoie(formData) {
    const formData1: FormData = new FormData();
    formData1.append('debut', formData.debut);
    formData1.append('fin', formData.fin);
    console.log(formData);
    return this.httpClient.post<any>(this.endpoint, formData1, {observe: 'response'});
    }

    inforetrait(formData) {
      const formData1: FormData = new FormData();
      formData1.append('debut', formData.debut);
      formData1.append('fin', formData.fin);
      console.log(formData);
      return this.httpClient.post<any>(this.endpoint1, formData1, {observe: 'response'});
      }
}
