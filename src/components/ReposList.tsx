import React from 'react';
import { useDispatch } from 'react-redux';

import { actionsCreators } from '../state';

const ReposList: React.FC = () => {

   const [term, setTerm] = React.useState('');
   const dispatch = useDispatch();

   const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      setTerm('');
      dispatch(actionsCreators.searchRepos(term));
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
