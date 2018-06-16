import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IElementInput, Element } from '@elements/models';
import { Results } from '@elements/models';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }


  public search(searchTerm: string): Observable<Array<Element>> {
    return this.http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => res.results.slice(0, 10).map(m => new Element(m)));
  }
}

