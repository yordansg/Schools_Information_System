import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from '@elements/core/store/app.state';
import * as RouterActions from '@elements/core/store/router.actions';
import { Element } from '@elements/models';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as HomeActions from '../home.actions';
import { HomeState } from './../home.state';

@Component({
  selector: 'mm-school-types',
  templateUrl: './school-types.component.html',
  styleUrls: ['./school-types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolTypesComponent implements OnInit {
  public homeState$: Observable<HomeState>;
  public loading: boolean;
  public isFlippable: boolean;
  public showAvailableProffesionalFields = false;
  public showAvailableProfiledFields = false;

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
    this.homeState$.subscribe(hs => { this.isFlippable = hs.isFlippable; });
    if (this.isFlippable === true) {
      this._store.dispatch(new HomeActions.SelectElement(element));
    } else if (element.title === 'Духовно училище') {
      this._store.dispatch(new HomeActions.GetSpiritualAreas());
    } else if (element.title === 'Училище по изкуства') {
      this._store.dispatch(new HomeActions.GetArtAreas());
    } else if (element.title === 'Училище по култура') {
      this._store.dispatch(new HomeActions.GetCultureAreas());
    } else if (element.title === 'Спортно училище') {
      this._store.dispatch(new HomeActions.GetSportAreas());
    } else if (element.title === 'Профилирана гимназия') {
      this._store.dispatch(new HomeActions.GetProfiledAreas());
      this.showAvailableProfiledFields = true;
    } else if (element.title === 'Професионална гимназия') {
      this._store.dispatch(new HomeActions.GetProfessionalAreas());
      this.showAvailableProffesionalFields = true;
    } else {
      this._store.dispatch(new HomeActions.GetAreas());
    }
  }

  showElementDetails(element: Element) {
    this._store.dispatch(new RouterActions.Go({ path: [{ outlets: { sidebar: `details/${element.id}` } }] }));
  }

  ngOnInit() {
    this._store.dispatch(new HomeActions.GetElements());
  }
}
