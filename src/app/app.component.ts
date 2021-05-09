import { getLoading, getErrorMessage } from './store/shared/shared.selector';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter1';
  showLoading:Observable<boolean>;
  errorMessage:Observable<string>;
  constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage)
  }

}
