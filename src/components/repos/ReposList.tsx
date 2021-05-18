import { useState, FormEvent } from 'react';
//import { useSelector } from 'react-redux';
import { useSelector } from '../../hooks/useTypeSelector';

import { useActions } from '../../hooks/useActions';

const ReposList = () => {
   const [term, setTerm] = useState('');

   const { searchRepos } = useActions();

   const state = useSelector((state) => state.repos);
   const { loading, error, data } = state;

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTerm('');
      searchRepos(term);
   };
   return (
      <div>
         <form onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="search repos">Search</label>
            <input
               type="text"
               id="Search Repos"
               value={term}
               onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
         </form>
         {loading && <h3>loading...</h3>}
         {error && <h3>{error}</h3>}
         <ul>
            {!loading && data.map((a: any) => (
               <li key={a.date}>
                  <h2>{a.name}</h2>
                  <div>{a.description}</div>
                  <pre>{a.version}</pre>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ReposList;

