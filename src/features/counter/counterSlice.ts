import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ICount {
   value: number
}

const initialState: ICount = {
   value: 0
};


const counterSlice = createSlice({
   name: 'counter',
   initialState,
   //Reducers
   reducers: {
      incremented(state) {
         state.value++;
      },
      decremented(state) {
         state.value--;
      },
      amountAdded(state, action: PayloadAction<number>) {
         state.value += action.payload;
      }

   }
});


//Function (actionCreators) to be used in components
export const { incremented, decremented, amountAdded } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;

//Reuser to be used in store reducers
export default counterSlice.reducer;



