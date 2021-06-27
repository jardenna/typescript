import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProducts {
   title: string;
   price: number | null;
   id: string;
}

interface TodosState {
   list: IProducts[];

}

const initialState: TodosState = {

   list: [
      { title: 'Escape from Tarkow', price: 60, id: 'est' },
      { title: 'Hunt: Showdown', price: 65, id: 'hunt' },
      { title: 'Hell lets loose', price: 70, id: 'hll' },
      { title: 'New game', price: 78, id: 'ng' }
   ]

};


const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {

      addProduct: (state, action: PayloadAction<IProducts>) => {
         const newProduct = action.payload;
         state.list = [newProduct, ...state.list];
      }
   }
});

export const { addProduct } = productSlice.actions;
export const getProductSelector = (state: RootState) => state.products.list;


export default productSlice.reducer;