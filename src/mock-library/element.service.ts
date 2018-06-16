
import { Injectable } from '@angular/core';
import { ICreateList } from '@elements/interfaces';
import { Element } from '@elements/models';
import { Results } from 'app/shared/models/results.model';
import { ElementFactory } from 'mock-library/element-factory.service';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockElementService {

    constructor() { }
    createElementList(createListModel: ICreateList, elements: Array<Element>) {
        return Observable.of(1);
    }

    getSchoolTypes(): Observable<Results<Element>> {
        return Observable.of({ results: [ElementFactory.createFake()], total_pages: 2, total_results: 10, page: 1 });
    }
}
