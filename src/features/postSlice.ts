import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { AppDispatch } from '../app/store';
//import fetchApi from './fetchApi';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface ITodo {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
}

interface ITodos {
   loading: boolean;
   results: ITodo[];
   error: string | null;
}

const initialState: ITodos = {
   loading: false,
   results: [],
   error: null
};

const postSlice = createSlice({
   name: 'post',
   initialState,
   reducers: {

      setLoading(state) {
         state.loading = true;
         state.error = null;
         state.results = [];
      },
      setSuccess(state, action: PayloadAction<[]>) {
         state.loading = false;
         state.error = null;
         state.results = action.payload;
      },
      setFailure(state, action: PayloadAction<string>) {
         state.loading = false;
         state.error = action.payload;
         state.results = [];
      }
   }
});


export const { setLoading, setSuccess, setFailure } = postSlice.actions;

export const fetchTodos = async (dispatch: AppDispatch) => {
   // const data = await fetchApi('get', url);



   // dispatch(setLoading());
   // if (data) {
   //    dispatch(setSuccess(data));
   // } else {
   //    dispatch(setFailure('hh'));

   // }


   dispatch(setLoading());
   try {
      const res = await fetch(url);
      const result = await res.json();
      dispatch(setSuccess(result));

   } catch (err) {
      dispatch(setFailure(err.message));
   }
};

export const selectTo = (state: RootState) => state.posts;
export default postSlice.reducer;