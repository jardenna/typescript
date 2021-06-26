import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import produce, { Draft } from 'immer';


interface Todo {
   id: string;
   title: string;
   completed: boolean;
}

interface TodosState {
   list: Todo[];
}

const initialState: TodosState = {
   list: [
      { title: 'Escape from Tarkow', completed: false, id: 'est' },
      { title: 'Hunt: Showdown', completed: false, id: 'hunt' },
      { title: 'Hell lets loose', completed: false, id: 'hll' }

   ]
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
         //return produce(state, (draft: Draft<RootState>)
         state.list = state.list.filter((todo) => todo.id !== action.payload);
      }
   }
});




export const { addTodo, toggleTodo, deleteTodos } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.list;
export default todosSlice.reducer;