import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Kullanici } from '../models/kullanici';
import { OturumService } from '../services/oturum.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  basketCount$=this.store.select("basketCount");
  isAuthenhicated: boolean =false;
  isAdmin: boolean=false;

  constructor(
    private oturumservise:OturumService,
    private store:Store<{"basketCount":number}>
    ) { }
    
  ngOnInit(): void {
    this.oturumservise.kullanici.subscribe(Kullanici => {
      this.isAuthenhicated=!!Kullanici
      this.isAdmin=Kullanici?.email=="eren@gmail.com"
  
    })
  }
  logout(){
    this.oturumservise.logout();
  }

}
