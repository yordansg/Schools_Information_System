import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from '@elements/core/store/app.state';
import * as RouterActions from '@elements/core/store/router.actions';
import { Element } from '@elements/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from '../home.actions';
import { HomeState } from './../home.state';

@Component({
  selector: 'mm-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  public homeState$: Observable<HomeState>;
  public loading: boolean;

  constructor(private _store: Store<AppState>) {
    this.homeState$ = this._store.select('home').share();
  }

  toggleElementList(isCollectingElements: boolean) {
    this._store.dispatch(new HomeActions.ToggleCollectingElements());
  }

  collectElement(element) {
    this._store.select('home')
      .take(1)
      .map(hs => hs.collectedElements)
      .filter(collectedElements => collectedElements.indexOf(element) === -1)
      .subscribe(_ =>
        this._store.dispatch(new HomeActions.CollectElement(element)));
  }

  selectElement(element) {
    this._store.dispatch(new HomeActions.SelectElement(element));
  }

  showElementDetails(element: Element) {
    this._store.dispatch(new RouterActions.Go({ path: [{ outlets: { sidebar: `details/${element.id}` } }] }));
  }

  ngOnInit() {
    // this._store.dispatch(new HomeActions.GetFavoriteElements());

  }
}
