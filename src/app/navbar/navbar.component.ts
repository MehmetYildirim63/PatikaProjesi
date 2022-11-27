import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from '../cart-state-store/cart.selectors';
import { Kullanici } from '../models/kullanici';
import { OturumService } from '../services/oturum.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // basketCount$=this.store.select("basketCount");
  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;
  isAuthenhicated: boolean =false;
  isAdmin: boolean=false;

  constructor(
    private oturumservise:OturumService,
    private store:Store) {
      this.countProducts$ = store.select(selectCountProducts);
      this.totalPrice$    = store.select(selectTotalPrice);
     }
    
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
