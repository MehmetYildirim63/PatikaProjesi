import { state } from "@angular/animations";
import { createAction, createReducer, on } from "@ngrx/store";


export const BasketsRecucer = createReducer(
  0,
  on(createAction("[Baskets] Add Count"), (state) =>state += 1)
)

  



