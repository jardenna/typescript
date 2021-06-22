import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ITodo {
   id: number;
   done: boolean;
   text: string;
}

interface TodoSliceState {
   todos: ITodo[]
}

const initialState: TodoSliceState = {
   todos: [{ id: 1, done: false, text: 'sss' }, { id: 2, done: false, text: 'sss' }]
};




const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      //PayloadAction is used for the action.payload
      addTodo: (state, action: PayloadAction<string>) => {

         state.todos = [
            ...state.todos,
            {
               id: state.todos.length,
               done: false,
               text: action.payload
            }
         ];
      },
      removeTodo: (state, action: PayloadAction<number>) => {

         state.todos = state.todos.filter(todo => todo.id !== action.payload);

      }
   }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;