import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { slideFromRight } from '@elements/animations';
import { Element } from '@elements/models';

@Component({
  selector: 'mm-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromRight()]
})
export class SearchItemComponent implements OnInit {
  @Input() element: Element;
  @Input() isSelected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
