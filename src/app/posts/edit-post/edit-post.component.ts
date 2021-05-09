import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/post.selector';
import { updatePost } from '../state/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm:FormGroup
  post:Post;
  postSubscription:Subscription
  // post:Post
   constructor(
     private route:ActivatedRoute,
     private store:Store<AppState>) { }
 
 
 
   ngOnInit(): void {
   
      this.route.paramMap.subscribe((params)=>{
      const id = params.get('id')
      console.log(id)
     this.postSubscription = this.store.select(getPostById,{id}).subscribe(data=>{
        this.post = data
        console.log(this.post)
        this.createForm()
      })
      })
      
     
     
   }
 
   createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(8)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(8)]),
    })
   }

   ngOnDestroy(){
     if(this.postSubscription){
       this.postSubscription.unsubscribe()
     }
   }

   updatePost(){
     if(!this.postForm.valid){
       return
     }
     const post = {
       id:this.post.id,
       title:this.postForm.value.title,
       description:this.postForm.value.description
     }

     this.store.dispatch(updatePost({post}))

     
   }
 
}
