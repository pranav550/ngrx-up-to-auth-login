import { Observable } from 'rxjs';
import { getPosts } from './../state/post.selector';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { deletePost } from '../state/post.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Observable<Post[]>
  
  constructor(
    private route:ActivatedRoute, 
    private store:Store<AppState>) { }

  ngOnInit(): void {
   this.posts = this.store.select(getPosts)

  
  }

  deletePost(id:string){
    confirm("Are u sure want to delete??")
    console.log(id)
    this.store.dispatch(deletePost({id}))
  }


  

}
