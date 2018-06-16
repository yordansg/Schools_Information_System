import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '@elements/core/element.service';
import { Element } from '@elements/models';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-element-list-details',
  templateUrl: './element-list-details.component.html',
  styleUrls: ['./element-list-details.component.scss']
})
export class ElementListDetailsComponent implements OnInit {

  public elementList$: Observable<{ name: string, items: Array<Element> }>;

  constructor(private _elementService: ElementService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.elementList$ = this._elementService.getList(this._route.snapshot.params.id).share();
  }

}
