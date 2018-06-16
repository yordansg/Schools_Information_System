import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import * as RouterActions from '@elements/core/store/router.actions';
import { ElementFactory } from '@elements/mock-library/element-factory.service';
import { Store, StoreModule } from '@ngrx/store';
import { home } from 'app/home/home.reducer';
import { HomeState } from 'app/home/home.state';
import * as HomeActions from '../home.actions';
import { ElementPosterComponent } from './../../shared/components/element-poster/element-poster.component';
import { SharedModule } from './../../shared/index';
import { SchoolTypesComponent } from './school-types.component';

describe('SchoolTypesComponent', () => {
    let component: SchoolTypesComponent;
    let fixture: ComponentFixture<SchoolTypesComponent>;
    let store: Store<HomeState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                SharedModule,
                StoreModule.forRoot({ home })
            ],
            declarations: [SchoolTypesComponent],
            providers: [
            ]
        })
            .overrideComponent(SchoolTypesComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        fixture = TestBed.createComponent(SchoolTypesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create and get elements', () => {
        const action = new HomeActions.GetElements();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should create and get elements', () => {
        const action = new HomeActions.GetElementsSuccess({
            page: 1, total_results: 10, total_pages: 1,
            results: [ElementFactory.createFake(), ElementFactory.createFake(), ElementFactory.createFake()]
        });
        store.dispatch(action);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.directive(ElementPosterComponent)).length).toBe(3);
    });

    it('should respond to click on a element poster', () => {
        const _elements = [ElementFactory.createFake(), ElementFactory.createFake(), ElementFactory.createFake()];
        const action = new HomeActions.GetElementsSuccess({
            page: 1, total_results: 10, total_pages: 1,
            results: _elements
        });
        store.dispatch(action);
        fixture.detectChanges();
        const clickOnElementAction = new HomeActions.SelectElement(_elements[0]);
        fixture.debugElement.query(By.directive(ElementPosterComponent)).query(By.css('.element-poster')).triggerEventHandler('click', new Event('MouseEvent'));
        expect(store.dispatch).toHaveBeenCalledWith(clickOnElementAction);
        fixture.detectChanges();
        const clickOnElementDetailsAction = new RouterActions.Go({ path: [{ outlets: { sidebar: `details/${_elements[0].id}` } }] });
        fixture.debugElement.query(By.directive(ElementPosterComponent)).query(By.css('.element-poster__details-button')).triggerEventHandler('click', new Event('MouseEvent'));
        expect(store.dispatch).toHaveBeenCalledWith(clickOnElementDetailsAction);
    });
});
