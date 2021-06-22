import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addTodo, removeTodo, selectTodos } from '../features/todo/todoSlice';

const Todo: FC = () => {
   const todos = useAppSelector(selectTodos);
   const dispatch = useAppDispatch();

   return (
      <div>
         <form>
            <input type="text" />
            <button type="submit">Add Todo</button>
         </form>

         <div>
            {todos.todos.map(todo => (
               <div key={todo.id}>
                  {todo.text}

                  <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Todo;
