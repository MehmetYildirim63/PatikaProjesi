import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { SepetModel } from "../models/sepet.model";



@Injectable({
  providedIn:'root'
})
export class SepetService{
   url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpp3XkF0iUXSUkkvtWlL2ACyNQkwSl7D0";
   baskets:SepetModel[]=[];
constructor(
  private http: HttpClient,
  private store :Store
  ){}
   
  post(model:SepetModel){
     this.http.post<any>(this.url,model).subscribe();
  }
   
  getList(callBack:() => void){
    this.http.get<any>(this.url).subscribe(res => {
      this.baskets=res;
      callBack();
    })
  }
}

