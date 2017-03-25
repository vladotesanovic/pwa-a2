import { Action } from '@ngrx/store';
import { GET_NEWS_SUCCESS } from './news.actions';

export interface State {
    items: Object[];
};

export const initialState: State = {
    items: [],
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {

        case GET_NEWS_SUCCESS:
            return Object.assign({}, state, {
                items: action.payload
            });

        default: {
            return state;
        }
    }
}
