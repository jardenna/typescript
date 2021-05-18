import { reposTypes } from '../types';

interface ILoading {
   type: reposTypes.LOADING;

}

interface IData {
   type: reposTypes.SUCCESS;
   payload: string[];
}

interface IError {
   type: reposTypes.ERROR;
   payload: string | null;
}
export type Action = ILoading | IData | IError