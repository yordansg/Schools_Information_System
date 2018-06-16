import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementList } from '@elements/models';

@Component({
  selector: 'mm-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementListComponent implements OnInit {
  @Input() elementList: ElementList;
  @Output() elementListSelected: EventEmitter<ElementList> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
