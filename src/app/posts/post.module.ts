import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { postReducer } from './state/post.reducer';
import { POST_STATE_NAME } from './state/post.selector';

const routes:Routes=[
  {path:'', component:PostListComponent, 
  children:[
    {path:'add',component:AddPostComponent},
    {path:'edit/:id', component:EditPostComponent}
  ]},
]

@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
    SinglePostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, postReducer)
  ]
})
export class PostModule { }
