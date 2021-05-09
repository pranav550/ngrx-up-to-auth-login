import { authState } from './../auth/state/auth.state';
import { AUTH_STATE_NAME } from './../auth/state/auth.selector';
// import { counterReducer } from '../counter/state/counter.reducer';
// import { postReducer } from '../posts/state/post.reducer';
// import { PostsState } from '../posts/state/post.state';
// import { counterState } from './../counter/state/counter.state';
import { SharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';
import { AuthReducer } from '../auth/state/auth.reducer';
export interface AppState {
    // counter:counterState,
    // posts:PostsState
    [SHARED_STATE_NAME]:SharedState,
    [AUTH_STATE_NAME]:authState
}

export const appReducer = {
    // counter:counterReducer,
    // posts:postReducer
    [SHARED_STATE_NAME]:SharedReducer,
    [AUTH_STATE_NAME]:AuthReducer
}