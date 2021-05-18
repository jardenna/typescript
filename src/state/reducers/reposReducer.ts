import { Action } from '../actions';
import { reposTypes } from '../types';

interface IState {
   loading: boolean;
   data: string[];
   error: string | null;
}

const initialState = {
   loading: false,
   data: [],
   error: ''
};


const reposReducer = (state: IState = initialState, action: Action): IState => {
   switch (action.type) {
      case reposTypes.LOADING:
         return {
            ...state,
            loading: true
         };

      case reposTypes.SUCCESS:
         return {
            ...state,
            loading: false,
            data: action.payload,
            error: ''
         };

      case reposTypes.ERROR:
         return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
         };

      default: return state;

   }
};

export default reposReducer;
