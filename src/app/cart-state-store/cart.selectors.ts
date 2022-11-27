import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Urun } from "../models/urun";

export interface ProductGroup {
  product: Urun;
  count  : number;
}


export const selectCountProducts=createSelector(
  createFeatureSelector('cartEntries'),
  (state:Urun[]) => {
    return state.length;
  }
);

 export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
   (state: Urun[]) => {
    var totalPrice = 0 ;
    state.forEach(p => totalPrice += p.fiyat);
    return totalPrice;
  }
 );

 export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state:Urun[]) => {
    var map: Map<number, ProductGroup> =new Map;

    state.forEach(p =>{
      if(map.get(p.id)){
        (map.get(p.id) as ProductGroup).count++;
      } else {
        map.set(p.id,{product: p, count:1 });
      }
    })

     const sortedMap = new Map([...map.entries()].sort());
     return Array.from(sortedMap.values());
  }
 )