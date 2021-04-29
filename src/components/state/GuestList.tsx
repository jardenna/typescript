import React, { useState } from 'react';

const GuestList: React.FC = () => {
   const [name, setName] = useState('');
   const [guest, setGuest] = useState<string[]>([]);

   const addGuest = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setName('');
      setGuest([...guest, name]);
   };

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

      setName(e.target.value);
   };

   return (
      <div>
         <h3>GuestList</h3>
         <ul>

            {guest.map((guest, index) => <li key={index}>{guest}</li>)}

         </ul>
         <form>
            <input type="text" value={name} onChange={onChange} />
            <button type="submit" onClick={addGuest}>Add Guest</button>
         </form>
      </div>
   );
};

export default GuestList;
