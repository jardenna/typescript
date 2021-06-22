import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchTodos, selectTo } from '../features/postSlice';

const Todos: FC = () => {
   const state = useAppSelector(selectTo);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchTodos);
   }, [dispatch]);

   const { error, loading, results } = state;

   return (
      <div>
         {error && error}
         {loading && 'Loading...'}

         {
            results.map(result =>
               <div className="card" key={result.id}>
                  <h2>{result.title}</h2>
                  <p>Posted by id  {result.id}</p>
                  <p className={result.completed ? 'tag green' : 'tag red'}>

                     {result.completed ? 'Complete' : 'In Progress'}

                  </p>
               </div>
            )
         }
      </div>

   );
};

export default Todos;