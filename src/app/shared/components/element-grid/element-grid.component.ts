import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { staggerAnimation } from '@elements/animations';
import { Element } from '@elements/models';

@Component({
  selector: 'mm-element-grid',
  templateUrl: './element-grid.component.html',
  styleUrls: ['./element-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [staggerAnimation(100, 250)]
})
export class ElementGridComponent implements OnInit {
  @Input() elements: Array<Element>;
  @Input() isToggleable: boolean;
  @Input() isInToggleMode: boolean;
  @Input() selectedElement: Element;
  @Output() elementCollected: EventEmitter<Element> = new EventEmitter();
  @Output() elementListToggled: EventEmitter<boolean> = new EventEmitter();
  @Output() elementSelected: EventEmitter<Element> = new EventEmitter();
  @Output() elementDetailsShown: EventEmitter<Element> = new EventEmitter();
  toggleEditMode() {
    this.elementSelected.emit(null);
    this.elementListToggled.emit(!this.isInToggleMode);
  }
  selectElement(element: Element) {
    if (this.isInToggleMode) {
      this.elementCollected.emit(element);
    } else {
      this.elementSelected.emit(element);
    }
  }

  showElementDetails(element: Element) {
    this.elementDetailsShown.emit(element);
  }
  constructor() { }

  ngOnInit() {
  }

}
