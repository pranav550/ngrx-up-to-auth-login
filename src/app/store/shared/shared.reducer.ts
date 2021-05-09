import { setLoadingSpinner, setErrorMessage } from './shared.action';
import { loadingInitialState } from './shared.state';
import { createReducer, on } from '@ngrx/store';


const _sharedReducer = createReducer(loadingInitialState,
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status
        }
    }),
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    })
)
export function SharedReducer(state, action) {
    return _sharedReducer(state, action)
}