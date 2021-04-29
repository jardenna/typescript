import { FC, ChangeEvent, useState } from 'react';

const users = [
   { name: 'Sarah', age: 20 },
   { name: 'Alex', age: 20 },
   { name: 'Michael', age: 20 },
   { name: 'Steven', age: 20 }
];

const SearchUsers: FC = () => {

   const [name, setName] = useState('');
   const [user, setUser] = useState<{ name: string, age: number } | undefined>();

   const searchUser = () => {
      const foundUser = users.find(a => a.name === name);
      setUser(foundUser);
      setName('');
   };

   const findUser = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   };

   return (
      <div>
         <input type="text" value={name} onChange={findUser} />
         <button onClick={searchUser}>Submit</button>
         <div> Name: {user && user.name}</div>
         <div> Age:  {user && user.age}</div>
      </div>

   );
};

export default SearchUsers;
