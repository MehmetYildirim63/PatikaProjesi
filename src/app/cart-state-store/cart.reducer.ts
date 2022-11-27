import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { Urun } from '../models/urun';
import { addProduct, clearCart, removeProduct } from './cart.actions';

export const intialCartEntries: Urun[] = [];
// createReducer ngrx kütüphanesinden gelen bir metotdur.createReducer benim bir reducer oluşturmamı saglıyor.
export const cartReducer = createReducer(
  intialCartEntries,
  //on metodu extentionları yönememizi saglıyor
  on(clearCart, (_) => []),

  on(addProduct, (entries, urun) => {
    const entriesClone: Urun[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(urun);
    return entriesClone;
  }),

  on(removeProduct, (entries, urun) => {
    const entriesClone: Urun[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find((e) => e.id == urun.id);

    if (found) {
      entriesClone.splice(entriesClone.indexOf(found), 1);
    }
    return entriesClone;
  })
);

export const metaReducerLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('state');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('state');
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('state', JSON.stringify(nextState));
    return nextState;
  };
};
