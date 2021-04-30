import { ActionType } from '../action-types';
import { Actions } from '../actions';

interface RepositoriesState {
   loading: boolean;
   error: string | null;
   data: string[];
}
const initialState = {
   loading: false,
   error: '',
   data: []
};

const Reducer = (state: RepositoriesState = initialState, action: Actions): RepositoriesState => {
   switch (action.type) {

      case ActionType.SEARCH_REPOS:
         return {
            ...state,
            loading: true
         };

      case ActionType.SEARCH_REPOS_SUCCESS:
         return {
            ...state,
            loading: false,
            error: '',
            data: action.payload
         };

      case ActionType.SEARCH_REPOS_ERROR:
         return {
            ...state,
            loading: false,
            error: action.payload,
            data: []
         };
      default: return state;
   }
};

export default Reducer;