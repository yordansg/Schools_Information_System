import { Component, OnInit } from '@angular/core';
import { ElementService } from '@elements/core/element.service';
import { ElementList, Results } from '@elements/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-element-lists',
  templateUrl: './element-lists.component.html',
  styleUrls: ['./element-lists.component.scss']
})
export class ElementListsComponent implements OnInit {

  public elementLists$: Observable<Results<ElementList>>;
  constructor(private _elementService: ElementService) { }

  ngOnInit() {
    this.elementLists$ = this._elementService.getElementLists();
  }

}
