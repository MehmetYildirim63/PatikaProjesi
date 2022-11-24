import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Kategori } from '../models/kategori';

@Injectable()
export class KategoriService {
  private url ='https://ng-shopapp-75742-default-rtdb.firebaseio.com/';

  constructor(private htt:HttpClient) { }

  getKategoriler() :Observable<Kategori[]>{
  
    return this.htt.get<Kategori[]>(this.url + "kategoriler.json")
                .pipe(
                  map(data =>{
                    const kategoriler: Kategori[]=[]
                    
                    for(const key in data){
                      kategoriler.push({ ...data[key], id: key})
                    }
                    return kategoriler;
                  })
                  
                );

  }
   kategoriEkle(kategori: Kategori):Observable<Kategori>{
      return this.htt.post<Kategori>(this.url + "kategoriler.json", kategori);
   }
}
