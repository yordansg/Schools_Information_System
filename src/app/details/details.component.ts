import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideFromRight } from '@elements/animations';
import { ElementService } from '@elements/core/element.service';
import { Element, Field } from '@elements/models';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Colors } from '../shared/directives/color-extractor.directive';
@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [slideFromRight()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  element$: Observable<Element>;
  additionalElements$: Observable<Array<Element>>;
  loading = true;
  path = '';
  showField = false;
  @HostBinding('@slideRightAnimation')
  public slideRightAnimation = true;
  @ViewChild('elementCover') _elementCover: ElementRef;
  @HostListener('document:keydown', ['$event']) closeOnEscape(event: any) {
    if (event.keyCode === 27) {
      this.closeSelf();
    }
  }
  closeSelf() {
    this._router.navigate([{ outlets: { sidebar: null } }]);
  }
  additionalElementSelected(element: Element) {
    this._router.navigate([{ outlets: { sidebar: `details/${element.id}` } }]);
  }
  constructor(private _route: ActivatedRoute, private _router: Router, private _elementService: ElementService) {
  }
  morphBackground(colors: Colors) {
    this._elementCover.nativeElement.style.background = `linear-gradient(to bottom right, ${colors.DarkVibrant} 65%, ${colors.Vibrant})`;
  }
  ngOnInit() {
    this.element$ = this._route.params
      .do(_ => this.loading = true)
      .switchMap(params => {
        return this._elementService.getFieldsById(+params['id'])
          .do(_ => this.loading = false);
      });
  }

  getAdditionalElements(type: string) {
    if (type === 'similar') {
      this.additionalElements$ = this._elementService.getSimilarElements(this._route.snapshot.params['id']);
    } else if (type === 'recommended') {
      this.additionalElements$ = this._elementService.getRecommendedElements(this._route.snapshot.params['id']);
    }
  }

  showProffesionalFieldResult(field: Field) {
    this.showField = true;
    this.path = field.path;
  }
}
