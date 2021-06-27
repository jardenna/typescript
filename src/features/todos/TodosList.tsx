import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTodos, toggleTodo, deleteTodos, getTodosAsync } from './todoSlice';

const TodoList = () => {
   const dispatch = useAppDispatch();
   const todos = useAppSelector(selectTodos);

   useEffect(() => {
      dispatch(getTodosAsync());
   }, []);

   const toggleTodos = (id: string) => {
      dispatch(toggleTodo(id));
   };

   return (
      <ul>
         {todos && todos.map((todo) => (
            <li key={todo.id}>
               <label>
                  <h2> {todo.title}</h2>

                  <input
                     type="checkbox"
                     checked={todo.completed}
                     onChange={() => toggleTodos(todo.id)}
                  />
               </label>
               <button onClick={() => dispatch(deleteTodos(todo.id))}>Delete</button>
            </li>
         ))}
      </ul>
   );
};

export default TodoList;