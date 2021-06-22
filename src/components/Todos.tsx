import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchTodos, selectTo } from '../features/postSlice';

const Todos: FC = () => {
   const state = useAppSelector(selectTo);
   const dispatch = useAppDispatch();
   console.log(state);
   useEffect(() => {
      dispatch(fetchTodos);
   }, [dispatch]);
   return (
      <div>
         dd
      </div>

   );
};

export default Todos;