import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTodos, toggleTodo, deleteTodos, getTodosAsync } from './todoSlice';

const TodoList = () => {
   const dispatch = useAppDispatch();
   const todos = useAppSelector(selectTodos);

   useEffect(() => {
      //Need to only run getTodosAsync if it not allready fetched
      //Param = number of items
      if (todos.length === 0) {
         dispatch(getTodosAsync(5));
      }
   }, []);

   const toggleTodos = (id: string) => {
      dispatch(toggleTodo(id));
   };

   return (
      <ul className="todo">
         {todos && todos.map((todo) => (
            <li key={todo.id} className="todo-item">
               <label>
                  {todo.title}
                  <div className="todo-input todo-actions">
                     <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodos(todo.id)}
                     />
                  </div>


               </label>
               <div className="todo-btn todo-actions">
                  <button className="icon" onClick={() => dispatch(deleteTodos(todo.id))}> <i className="gg-trash-empty" /></button>
               </div>

            </li>
         ))}
      </ul>
   );
};

export default TodoList;