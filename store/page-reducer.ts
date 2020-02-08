import { Action, Reducer, Dispatch } from "redux";
import { defaultBackgroundColor } from "../utils/constants";

export interface PageState {
    backgroundColor: string
}

export const initialState: PageState = {
    backgroundColor: defaultBackgroundColor
};


export interface DispatchAction extends Action<PageActionType> {
    payload?: Partial<PageState>
}

export enum PageActionType {
    CHANGE_COLOR = 'CHANGE_COLOR',
}

export const pageReducer: Reducer<PageState, DispatchAction> = (state = initialState, action) => {
    
    switch (action.type) {
        case PageActionType.CHANGE_COLOR:
            return {
                ...state,
                backgroundColor: action.payload?.backgroundColor || defaultBackgroundColor
            }
        
        default:
            return state;
    }
};

export class PageActionDispatcher {

    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch;
    }
    changeColor = (backgroundColor?: string) => this.dispatch({ type: PageActionType.CHANGE_COLOR, payload: { backgroundColor }});

}