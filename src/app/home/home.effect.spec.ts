import * as RouterActions from '@elements/core/store/router.actions';
import 'rxjs/add/observable/timer';


import { StoreModule } from '@ngrx/store';
import { home } from 'app/home/home.reducer';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { MockElementService } from './../../mock-library/element.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ElementService } from '@elements/core/element.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { ElementFactory } from 'mock-library/element-factory.service';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/skip';
import * as HomeActions from './home.actions';
import { HomeEffects } from './home.effect';

describe('My Effects', () => {
    let effects: HomeEffects;
    const actions = new ReplaySubject(1);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                // any modules needed
                StoreModule.forRoot({ home }),
                HttpClientTestingModule
            ],
            providers: [
                HomeEffects,
                { provide: ElementService, useClass: MockElementService },
                provideMockActions(() => actions),
            ],
        });

        effects = TestBed.get(HomeEffects);
    });

    it('CreateListEffect should work', () => {
        const action = new HomeActions.CreateList({ name: 'test', description: 'description', language: 'test' });
        actions.next(action);
        effects.createList$
            .combineAll()
            .subscribe(result => {
                expect(result).toEqual([
                    new HomeActions.StopCollectingElements(),
                    new HomeActions.ToggleElementListForm(),
                    new RouterActions.Go({ path: ['/home/lists', 1] })]);
            });
    });

    it('SchoolTypesEffect should work', () => {
        const action = new HomeActions.GetElements();
        actions.next(action);
        effects.getSchoolTypes$
            .subscribe(result => {
                expect(result).toEqual(
                    new HomeActions.GetElementsSuccess({ results: [ElementFactory.createFake()], total_pages: 2, total_results: 10, page: 1 })
                );
            });
    });
});
