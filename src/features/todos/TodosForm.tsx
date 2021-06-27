import { FC, FormEvent, useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { addTodo } from './todoSlice';

import TodoList from './TodosList';
import TodosCompleted from './TodosCompleted';

const AddTodos: FC = () => {
   const [title, setTitle] = useState('');
   const dispatch = useAppDispatch();

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTitle('');

      dispatch(
         addTodo(title)
      );
   };

   return (
      <div className="todo-container">
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="todoName"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <button type='submit' className="icon submit-btn"> <i className="gg-math-plus" /></button>


         </form>
         <TodoList />
         <hr />
         < TodosCompleted />
      </div>

   );
};

export default AddTodos;