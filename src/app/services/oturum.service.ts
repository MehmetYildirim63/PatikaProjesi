import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { Kullanici } from '../models/kullanici';
import { oturumResponse } from '../models/oturum-response';

@Injectable({
  providedIn: 'root'
})
export class OturumService {
  api_key="AIzaSyDpp3XkF0iUXSUkkvtWlL2ACyNQkwSl7D0";
  kullanici= new BehaviorSubject<Kullanici | null>(null);

  constructor(private http:HttpClient) { }

  register(email: string, password: string){

   return  this.http.post<oturumResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key,{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        this.handleUser(response.email,response.localId,response.idToken,response.expiresIn);
      })
    )
     
  }
    logout(){
      this.kullanici.next(null);
      localStorage.removeItem("kullanici");

    }

  login(email:string,password:string){
    return this.http.post<oturumResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key,{
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
        tap(response => {
           this.handleUser(response.email,response.localId,response.idToken,response.expiresIn);
         })
    )
    
  }
  autoLogin(){
    if(localStorage.getItem("kullanici")==null){
      return;
    }
    const kullanici=JSON.parse(localStorage.getItem("kullanici") || "{}")
    const loadedKullanici =new Kullanici(kullanici.email,kullanici.id,kullanici._token, new Date(kullanici._tokenExpirationDate))

    if(loadedKullanici.token){
      this.kullanici.next(loadedKullanici);
    }
  }

    private handleUser(email:string,localId:string,idToken:string,expiresIn:string){
        const expirationDate = new Date(new Date().getTime() + (+expiresIn*1000))
        const kullanici = new Kullanici(
            email,
            localId,
            idToken,
            expirationDate
        );
        this.kullanici.next(kullanici);

        localStorage.setItem("Kullanici",JSON.stringify(kullanici));
   } 
    

  

}