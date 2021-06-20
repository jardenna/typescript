import { FormEvent, ChangeEvent, useState } from 'react';

interface UserInt {
   name: string;
   age: string;
   job: string;

}

const initialState: UserInt = {
   name: '',
   age: '',
   job: ''

};

const Form = () => {

   const [userState, setUserState] = useState<UserInt>(initialState);
   const [user, setUser] = useState<UserInt[]>([]);

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserState({ ...userState, [name]: value });
   };

   const addUser = () => {
      const newUser: UserInt[] = [...user, userState];
      setUser(newUser);
   };

   const deleteUser = (index: number) => {
      const userArr = user.filter((a, i) => index !== i);
      setUser(userArr);
   };


   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addUser();

   };

   return (
      <div className="Form">

         <h1>Demo Form for React</h1>
         <form onSubmit={handleSubmit}>
            <div className="input-container">
               <label htmlFor="name">Name</label>
               <input
                  id="name"
                  name="name"
                  value={userState.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  type="text"
               />
            </div>
            <div className="input-container">
               <label htmlFor="age">Age</label>
               <input
                  id="age"
                  name="age"
                  value={userState.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  type="number"
               />
            </div>
            <div className="input-container">
               <label htmlFor="job">Job</label>
               <input
                  id="job"
                  name="job"
                  value={userState.job}
                  onChange={handleInputChange}
                  placeholder="Job"
                  type="text"
               />
            </div>
            <button type="submit" >
               Add user
            </button>
         </form>

         <ul>
            {user.map((a, i) =>
               <li key={i} >
                  {a.name} - {a.age} - {a.job} <span onClick={() => deleteUser(i)}>Delete</span>
               </li>
            )}
         </ul>
      </div>

   );
};

export default Form;