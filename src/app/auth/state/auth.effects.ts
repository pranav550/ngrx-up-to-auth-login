import { setLoadingSpinner, setErrorMessage } from './../../store/shared/shared.action';
import { AppState } from 'src/app/store/app.state';
import { loginStart, loginSuccess } from './auth.action';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router:Router
    ) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        this.store.dispatch(setErrorMessage({message:''}))
                        const user = this.authService.formatUser(data)
                        return loginSuccess({ user });
                    }),
                    catchError(errResp => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        const errorMessage = this.authService.getErrorMessage(errResp.error.error.message)
                        return of(setErrorMessage({ message: errorMessage }))
                    })
                )
            })

        );

    })

    loginRedirect$ = createEffect(()=>{ 
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action)=>{
                this.router.navigate(['/']);
            })
        )
    },{dispatch:false} )

}