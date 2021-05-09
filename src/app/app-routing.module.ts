import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'counter',  loadChildren: () => import('./counter/counter.module')
  .then(m => m.CounterModule)},
  {path:'posts', loadChildren: () => import('./posts/post.module')
  .then(m => m.PostModule)},
  {path:'auth', loadChildren:() =>import('./auth/auth.module').then(m=>m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
