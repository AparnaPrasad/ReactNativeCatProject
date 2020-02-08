import { pageReducer, PageState } from './page-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ //can add more reducers here
    pageState: pageReducer
});

export interface ApplicationState {
    pageState: PageState
}

export default rootReducer;