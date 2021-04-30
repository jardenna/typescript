import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import { Actions } from '../actions';


const URL = 'https://registry.npmjs.org/-/v1/search?text=';

export const searchRepos = (term: string) => {
   return async (dispatch: Dispatch<Actions>) => {
      dispatch({
         type: ActionType.SEARCH_REPOS
      });


      try {
         const data = await fetch(URL + term);
         const result = await data.json();

         if (!result.response) {
            dispatch({
               type: ActionType.SEARCH_REPOS_ERROR,
               payload: 'something went wrong'
            });
         }

         const names = result.objects.map((result: any) => {
            return result.package.name;
         });

         dispatch({
            type: ActionType.SEARCH_REPOS_SUCCESS,
            payload: names
         });

      } catch (error) {
         dispatch({
            type: ActionType.SEARCH_REPOS_ERROR,
            payload: error.message
         });
      }
   };
};