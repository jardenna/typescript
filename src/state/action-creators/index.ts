import { Dispatch } from 'redux';
import { Action } from '../actions';
import { reposTypes } from '../types';

export const searchRepos = (term: string) => {

   return (
      async (dispatch: Dispatch<Action>) => {

         dispatch({
            type: reposTypes.LOADING
         });


         try {
            const url = 'https://registry.npmjs.com/-/v1/search?text=' + term;
            const data = await fetch(url);
            const result = await data.json();


            const packages = result.objects.map((a: any) => a.package);


            dispatch({
               type: reposTypes.SUCCESS,
               payload: packages
            });
         } catch (err) {
            dispatch({
               type: reposTypes.ERROR,
               payload: err.message
            });
         }
      }
   );
};

