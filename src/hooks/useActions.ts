import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../state';

export const useActions = () => {
   const dispatch = useDispatch();
   return bindActionCreators(actionCreator, dispatch);
};