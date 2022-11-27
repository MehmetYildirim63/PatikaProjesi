import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, clearCart, removeProduct } from '../cart-state-store/cart.actions';
import { ProductGroup, selectGroupedCartEntries } from '../cart-state-store/cart.selectors';

@Component({
  selector: 'app-sepet-islemleri',
  templateUrl: './sepet-islemleri.component.html',
  styleUrls: ['./sepet-islemleri.component.css']
})
export class SepetIslemleriComponent implements OnInit {
  
    cartEntries$:  Observable<any>;
  constructor(private store:Store) {

    this.cartEntries$ = store.select(selectGroupedCartEntries);
   }

  ngOnInit(): void {
  }
   
   clearEntries(){
      this.store.dispatch(clearCart())
   }

   more(entry: ProductGroup){
      this.store.dispatch(addProduct(entry.product));
   }

   less (entry: ProductGroup){
     this.store.dispatch(removeProduct(entry.product));
   }
}
