import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Kullanici } from '../models/kullanici';
import { oturumResponse } from '../models/oturum-response';

@Injectable({
  providedIn: 'root'
})
export class OturumService {
  api_key="AIzaSyDpp3XkF0iUXSUkkvtWlL2ACyNQkwSl7D0";
  kullanici= new Subject<Kullanici>();

  constructor(private http:HttpClient) { }

  register(email: string, password: string){

   return  this.http.post<oturumResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key,{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn*1000))
        const kullanici = new Kullanici(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
        );
        this.kullanici.next(kullanici)
      })
    )
     
  }
  login(email:string,password:string){
    return this.http.post<oturumResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key,{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
          tap(response => {
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn*1000))
        const kullanici = new Kullanici(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
        );
         this.kullanici.next(kullanici)

      })
    )
    
  }
}