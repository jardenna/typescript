import { ActionType } from '../action-types';


interface SearchRepositoriesAction {
   type: ActionType.SEARCH_REPOS;
}

interface SearchRepositoriesSuccessAction {
   type: ActionType.SEARCH_REPOS_SUCCESS;
   payload: string[];
}

interface SearchRepositoriesErrorAction {
   type: ActionType.SEARCH_REPOS_ERROR;
   payload: string;
}


export type Actions = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction