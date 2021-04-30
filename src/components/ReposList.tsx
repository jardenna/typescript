import React from 'react';

import { useTypeSelector } from '../hooks/useTypeSelector';

import useActions from '../hooks/useActions';

const ReposList: React.FC = () => {

   const [term, setTerm] = React.useState('');
   const { searchRepos } = useActions();
   const { data, error, loading } = useTypeSelector(state => state.repos);

   console.log(error);
   // const dispatch = useDispatch();

   const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      setTerm('');
      searchRepos(term);
      //Moved to hooks/useActions
      // dispatch(actionsCreators.searchRepos(term));
   };

   const searchPackages = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTerm(e.target.value);
   };

   return (
      <div>
         <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={searchPackages} />
            <button type="submit">
               Search packages
            </button>
         </form>

         {error && <h2>{error}</h2>}
         {loading && <h2>loading...</h2>}
         {!loading && data.map((a, index) => <div key={index}>{a}</div>)}

      </div>
   );
};

export default ReposList;
