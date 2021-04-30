import React from 'react';

import useActions from '../hooks/useActions';

const ReposList: React.FC = () => {

   const [term, setTerm] = React.useState('');
   const { searchRepos } = useActions();

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
      </div>
   );
};

export default ReposList;
