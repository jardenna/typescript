import { useState, FormEvent, ChangeEvent } from 'react';

type formElem = FormEvent<HTMLFormElement>
type input = ChangeEvent<HTMLInputElement>

interface ITodo {
   id: number;
   text: string;
   completed: boolean;

}

const index = () => {
   const [todos, setTodos] = useState<ITodo[]>([]);
   const [value, setValue] = useState('');

   const handleTodos = (e: formElem) => {
      e.preventDefault();
      setValue('');
      addTodos(value);
   };
   const changeValue = (e: input) => {
      setValue(e.target.value);
   };

   const id = todos.length;

   const addTodos = (text: string) => {
      const newTodo: ITodo[] = [...todos, { id, text, completed: false }];
      setTodos(newTodo);
   };
   const completeTodos = (index: number) => {
      const newTodos: ITodo[] = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
   };

   const deleteTodos = (index: number) => {
      const a = todos.filter(a => a.id !== index);
      setTodos(a);
   };


   return (
      <section>
         <h1>Todos</h1>
         <form onSubmit={handleTodos}>
            <label htmlFor="Todo">Add todo </label>
            <input type="text" id="Todo" value={value} onChange={changeValue} />
            <button type="submit">Add todos</button>
         </form>

         <ul>
            {
               todos.map((todo: ITodo, index: number) => (
                  <li key={index}>
                     <p style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.text} <span onClick={() => deleteTodos(index)}>Delete</span> </p>
                     <button onClick={() => completeTodos(index)}>{todo.completed ? 'Completed' : 'incomplete'}</button>
                  </li>
               ))}
         </ul>
      </section>
   );
};

export default index;
