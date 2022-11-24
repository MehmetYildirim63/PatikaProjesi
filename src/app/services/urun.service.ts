import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable, tap } from "rxjs";
import { Urun } from "../models/urun";
//burasi bizim için local servis olarak oluşturduk
// kompanent oluşturuldugunda bizim için getirilecek bir servis  injectable  etmek demek
@Injectable()
export class urunService{
 private url ='https://ng-shopapp-75742-default-rtdb.firebaseio.com/';

 constructor(private http: HttpClient){}

 getUrunler(kategoriId: number): Observable <Urun[]>{
     return this.http
     .get<Urun[]>(this.url+"urunler.json")
     .pipe(
           map(data=>{
             const urunler: Urun[]=[];
             for(const key in data){
                if(kategoriId){
                    if(kategoriId==data[key].kategoriId)
                    {
                      urunler.push({...data[key], id: key});
                    }
                }
                else{
                    urunler.push({...data[key], id: key})
                    
                }
                
              }

             return urunler;
           }),
           tap(data => console.log(data) ),
           delay(1000)
     );
 }
 getUrunlerById(id:string):Observable<Urun>{
  return this.http.get<Urun>(this.url + "urunler/" +id +".json").pipe(delay(1000));
 }

 urunOlusturma(urun:Urun):Observable<Urun>{
  return this.http.post<Urun>(this.url+"urunler.json",urun)
 }

}