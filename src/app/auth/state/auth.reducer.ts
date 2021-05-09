import { loginSuccess } from './auth.action';
import { authInitialState } from './auth.state';
import { createReducer, on } from '@ngrx/store';

const _authReducer = createReducer(authInitialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }))
export function AuthReducer(state, action) {
    return _authReducer(state, action)
}