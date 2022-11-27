import { createAction, props } from "@ngrx/store";
import { Urun } from "../models/urun";

export const addProduct = createAction("Add Product",props<Urun>());
export const removeProduct = createAction('Remove Product', props<Urun>());
export const clearCart = createAction('Clear Cart');