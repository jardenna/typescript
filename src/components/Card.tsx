import { useState } from 'react';
import { WithChildren } from '../utils/withChildren';
import { btnEvent } from '../utils/eventTypes';


interface ITest {
   title: string,
   variant?: 'big' | 'small'
}

type CardProps = WithChildren<ITest>

const Card = ({ title, children, variant = 'small' }: CardProps) => {

   const [decrement, setDecrement] = useState(1);

   const onClick = (e: btnEvent) => {
      setDecrement(decrement + 1);
      console.log(e.target);
   };

   return (
      <div className={variant}>
         <h1>{title}</h1>
         {children}
         {decrement}
         <button onClick={onClick}>clikk</button>
      </div>
   );
};



export default Card;
