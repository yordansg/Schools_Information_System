import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ElementFactory } from '@elements/mock-library/element-factory.service';
import { Element } from '@elements/models';
import { ButtonComponent } from './../button/button.component';
import { IconComponent } from './../icon/icon.component';
import { ElementPosterComponent } from './element-poster.component';

describe('ElementPosterComponent', () => {
    let component: ElementPosterComponent;
    let fixture: ComponentFixture<ElementPosterComponent>;
    let element: Element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ElementPosterComponent, ButtonComponent, IconComponent],
            providers: [
            ]
        })
            .overrideComponent(ElementPosterComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ElementPosterComponent);
        component = fixture.componentInstance;
        element = ElementFactory.createFake();
        component.element = element;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.debugElement.query(By.css('.element-poster__photo')).properties.src).toBe(`${element.posterPath}`);
        expect(component).toBeTruthy();
    });
    it('should create and flip', () => {
        component.isSelected = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.element-poster-overview')).nativeElement.textContent).toContain(element.overview);
        expect(component).toBeTruthy();
    });
    it('should create and respond to click event', () => {
        let selectedElement: Element;
        component.selectElement.subscribe(sm => selectedElement = sm);
        fixture.debugElement.query(By.css('.element-poster')).triggerEventHandler('click', null);
        expect(selectedElement).toBe(element);
    });
    it('should create, flip and load details', () => {
        component.isSelected = true;
        fixture.detectChanges();
        let elementDetails: Element;
        component.showElementDetails.subscribe(sm => elementDetails = sm);
        expect(elementDetails).toBe(undefined);
        fixture.debugElement.query(By.css('.element-poster__details-button')).triggerEventHandler('click', new Event('MouseEvent'));
        expect(elementDetails).toBe(element);
    });
});
