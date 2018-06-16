import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Element } from '@elements/models';

@Component({
  selector: 'mm-element-poster',
  templateUrl: './element-poster.component.html',
  styleUrls: ['./element-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementPosterComponent implements OnInit {
  @Output() selectElement: EventEmitter<Element> = new EventEmitter();
  @Output() showElementDetails: EventEmitter<any> = new EventEmitter();
  @Input() element: Element;
  @Input() isNotFlippable = false;
  @HostBinding('class.element-poster--active') @Input() isSelected = false;

  clickElementPoster(event: Event, element: Element, doNotPropagate?: boolean) {
    if (doNotPropagate) {
      event.stopPropagation();
    }
    this.selectElement.emit(element);
  }
  clickElementDetails($event, element: Element) {
    this.isSelected = false;
    $event.stopPropagation();
    this.showElementDetails.emit(element);
  }
  constructor() { }

  ngOnInit() {
  }

}
