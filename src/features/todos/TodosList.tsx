import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectTodos, toggleTodo, deleteTodos } from './todoSlice';

const TodoList = () => {
   const dispatch = useAppDispatch();

   const todos = useAppSelector(selectTodos);

   return (
      <ul>
         {todos && todos.map((todo) => (
            <li key={todo.id}>
               <label>
                  {todo.title}

                  <input
                     type="checkbox"
                     checked={todo.completed}
                     onChange={() => dispatch(toggleTodo(todo.id))}
                  />
               </label>
               <button onClick={() => dispatch(deleteTodos(todo.id))}>Delete</button>
            </li>
         ))}
      </ul>
   );
};

export default TodoList;