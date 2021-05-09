import { AuthEffects } from './state/auth.effects';
// import { AUTH_STATE_NAME } from './state/auth.selector';
// import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';

const routes:Routes=[
   {path:'', 
   children:[
      {path:'', redirectTo:'login'},
      {path:'login',component:LoginComponent},
      {path:'signup', component:SignupComponent}
   ]}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    // StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
