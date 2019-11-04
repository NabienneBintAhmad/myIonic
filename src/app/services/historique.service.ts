import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private endpoint = 'http://127.0.0.1:8000/api/listerperiodeEnvoie';
  private endpoint1 = 'http://127.0.0.1:8000/api/listerperiodeRetrait';
  private endpoint2 = 'http://127.0.0.1:8000/api/listerperiodeEnvoieAdmin';
  private endpoint3 = 'http://127.0.0.1:8000/api/listerperiodeRetraitAdmin';

  constructor(private httpClient: HttpClient) { }

  infoenvoie(data):Observable<any> {
    console.log(data)
    const envoieData={
      debut:data.debut,
      fin: data.fin
    }
    console.log(envoieData)
    return this.httpClient.post<any>(this.endpoint, envoieData);
    }

    inforetrait(data):Observable<any> {
      console.log(data)
      const retraitData={
        debut:data.debut,
        fin: data.fin
      }
      console.log(retraitData)
      return this.httpClient.post<any>(this.endpoint1, retraitData);
      }

      infoenvoieadmin(data):Observable<any> {
        console.log(data)
        const envoieData={
          debut:data.debut,
          fin: data.fin
        }
        console.log(envoieData)
        return this.httpClient.post<any>(this.endpoint2, envoieData);
        }
    
        inforetraitadmin(data):Observable<any> {
          console.log(data)
          const retraitData={
            debut:data.debut,
            fin: data.fin
          }
          console.log(retraitData)
          return this.httpClient.post<any>(this.endpoint3, retraitData);
          }
}
