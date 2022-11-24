import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OturumService } from './services/oturum.service';
import { urunService } from './services/urun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[urunService]
})
export class AppComponent implements OnInit {
   
   constructor(private oturumService: OturumService){}
  ngOnInit(): void {
    this.oturumService.autoLogin();
  }
  
  
 }
