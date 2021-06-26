import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Todo {
   id: string;
   title: string;
   completed: boolean;
}

interface TodosState {
   list: Todo[];
   status: 'idle' | 'pending' | 'succeeded' | 'failed';
   error: string | null
}

export const getTodosAsync = createAsyncThunk(
   'todos(getTodosAsync',
   async () => {
      const responce = await fetch('https://jsonplceholder.typicode.com/todos');
      if (responce.ok) {
         const todos = await responce.json();
         return todos;
      } else {
         return '';
      }
   }
);


const initialState: TodosState = {
   status: 'idle',
   list: [],
   error: null
};

export const todosSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
         const newTodo = {
            id: Date.now().toString(),
            completed: false,
            title: action.payload
         };

         state.list = [...state.list, newTodo];
      },

      toggleTodo: (state, action: PayloadAction<string>) => {
         const index = state.list.findIndex(
            (todo) => todo.id === action.payload
         );

         state.list[index].completed = !state.list[index].completed;
      },
      deleteTodos: (state, action: PayloadAction<string>) => {
         state.list = state.list.filter((todo) => todo.id !== action.payload);
      }
   },
   extraReducers: (builder) => {

      builder.addCase(getTodosAsync.pending, (state) => {
         state.status = 'pending';
         state.error = null;

      });
      builder.addCase(getTodosAsync.fulfilled, (state, { payload }) => {

         if (payload === '') {
            state.error = 'Error';
            state.status = 'failed';
         } else {
            state.list.push(...payload);
            state.status = 'succeeded';
            state.error = null;
         }


      });

      builder.addCase(getTodosAsync.rejected, (state) => {


         state.error = 'Error';
         state.status = 'idle';
         state.list = [];

      });
   }

});




export const { addTodo, toggleTodo, deleteTodos } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.list;
export default todosSlice.reducer;