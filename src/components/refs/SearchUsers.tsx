import { FC, ChangeEvent, useState, useRef, useEffect, FormEvent } from 'react';

const users = [
   { name: 'Sarah', age: 20 },
   { name: 'Alex', age: 20 },
   { name: 'Michael', age: 20 }
];

interface IUsers {
   name: string,
   age: number
}


type InputElem = ChangeEvent<HTMLInputElement>;
type FormElem = FormEvent<HTMLFormElement>;

const SearchUsers: FC = () => {

   const [name, setName] = useState('');
   const [user, setUser] = useState<IUsers | undefined>();
   const inputRef = useRef<HTMLInputElement | null>(null);
   useEffect(() => {
      // if (!inputRef.current) {
      //    return;
      // }

      // inputRef.current.focus();
      inputRef.current?.focus();
   }, []);



   const searchUser = (e: FormElem): void => {
      e.preventDefault();
      const foundUser = users.find(a => a.name === name);
      setUser(foundUser);
      setName('');

   };

   const findUser = (e: InputElem) => {
      setName(e.target.value);
   };

   return (<div>
      <form onSubmit={searchUser}>
         <input type="text" value={name} onChange={findUser} ref={inputRef} name="search" />
         <button type='submit'>Search users</button>
      </form>

      <div> Name: {user && user.name}</div>
      <div> Age:  {user && user.age}</div>


   </div>

   );
};

export default SearchUsers;
