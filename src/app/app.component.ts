import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { urunService } from './services/urun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[urunService]
})
export class AppComponent {
   
   constructor(
    private http: HttpClient,
    private urunService:urunService
    ){}
  
  title = 'Ürün Kategorisi';
 }
