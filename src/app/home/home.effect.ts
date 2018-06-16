import { Injectable } from '@angular/core';
import { ElementService } from '@elements/core/element.service';
import * as RouterActions from '@elements/core/store/router.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'app/core/store/app.state';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {

    constructor(
        private actions$: Actions,
        private elementService: ElementService,
        private store: Store<AppState>
    ) { }



    @Effect()
    createList$ = this.actions$
        .ofType<HomeActions.CreateList>(HomeActions.CREATE_LIST)
        .withLatestFrom(this.store.map(as => as.home ? as.home.collectedElements : []))
        .switchMap(([action, collectedElements]) =>
            this.elementService.createElementList(action.createListModel, collectedElements)
        )
        .flatMap(list_id =>
            [
                new HomeActions.StopCollectingElements(),
                new HomeActions.ToggleElementListForm(),
                new RouterActions.Go({ path: ['/home/lists', list_id] })
            ]);


    @Effect()
    getSchoolTypes$ = this.actions$
        .ofType<HomeActions.GetElements>(HomeActions.GET_MOVIES)
        .switchMap(action =>
            this.elementService.getSchoolTypes()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getAreas$ = this.actions$
        .ofType<HomeActions.GetAreas>(HomeActions.GET_AREAS)
        .switchMap(action =>
            this.elementService.getAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getSpiritualAreas$ = this.actions$
        .ofType<HomeActions.GetSpiritualAreas>(HomeActions.GET_SPIRITUAL_AREAS)
        .switchMap(action =>
            this.elementService.getSpiritualAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getArtAreas$ = this.actions$
        .ofType<HomeActions.GetArtAreas>(HomeActions.GET_ART_AREAS)
        .switchMap(action =>
            this.elementService.getArtAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getCultureAreas$ = this.actions$
        .ofType<HomeActions.GetCultureAreas>(HomeActions.GET_CULTURE_AREAS)
        .switchMap(action =>
            this.elementService.getCultureAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getSportAreas$ = this.actions$
        .ofType<HomeActions.GetSportAreas>(HomeActions.GET_SPORT_AREAS)
        .switchMap(action =>
            this.elementService.getSportAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getProfiledAreas$ = this.actions$
        .ofType<HomeActions.GetProfiledAreas>(HomeActions.GET_PROFILED_AREAS)
        .switchMap(action =>
            this.elementService.getProfiledAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));

    @Effect()
    getProfessionalAreas$ = this.actions$
        .ofType<HomeActions.GetProfessionalAreas>(HomeActions.GET_PROFESSIONAL_AREAS)
        .switchMap(action =>
            this.elementService.getProfessionalAreas()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));


    @Effect()
    getFavoriteElements$ = this.actions$
        .ofType<HomeActions.GetFavoriteElements>(HomeActions.GET_FAVORITE_MOVIES)
        .switchMap(action =>
            this.elementService.getFavoritedElements()
        )
        .map(elements => new HomeActions.GetElementsSuccess(elements));
}
