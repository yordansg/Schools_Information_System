import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '@elements/core/store/app.state';
import { ICreateList } from '@elements/interfaces';
import { Element } from '@elements/models';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from './home.actions';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isCollectingElements$: Observable<boolean>;
  public isElementListFormShown$: Observable<boolean>;
  public collectedElements$: Observable<Array<Element>>;

  constructor(private _router: Router, private _store: Store<AppState>) {
    const _homeState$ = this._store.select('home');
    this.collectedElements$ = _homeState$.map(homeState => homeState.collectedElements);
    this.isCollectingElements$ = _homeState$.map(homeState => homeState.isCollectingElements);
    this.isElementListFormShown$ = _homeState$.map(homeState => homeState.isElementListFormShown);
  }
  toggleCreateListForm() {
    this._store.dispatch(new HomeActions.ToggleElementListForm());
  }
  addElementsToList(createListModel: ICreateList) {
    this._store.dispatch(new HomeActions.CreateList(createListModel));
  }
}
