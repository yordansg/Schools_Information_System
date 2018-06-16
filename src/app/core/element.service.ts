import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateList } from '@elements/interfaces';
import { IElementInput, IElementListInput, Element, ElementList, Results } from '@elements/models';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class ElementService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  getRecommendedElements(id: number): Observable<Array<Element>> {
    return this._http
      .get<Results<IElementInput>>(`element/${id}/recommendations`)
      .map(res => res.results.map(m => new Element(m)));
  }

  getSimilarElements(id: number): Observable<Array<Element>> {
    return this._http
      .get<Results<IElementInput>>(`element/${id}/similar`)
      .map(res => res.results.map(m => new Element(m)));
  }

  getElementById(id: number): Observable<Element> {
    return this._http.get<Results<IElementInput>>('assets/areas.json').map(data => new Element(data.results.filter(elements => elements.id === id)[0]));
  }

  getFieldsById(id: number): Observable<Element> {
    return this._http.get<Results<IElementInput>>('assets/areas.json').map(data => new Element(data.results.filter(elements => elements.id === id)[0]));
  }

  getSchoolTypes(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/schoolTypes.json`)
      .map(res => ({ ...res, results: res.results.map(m => new Element(m)) }));
  }

  getSpiritualAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.filter(element => element.title === 'Хуманитарни науки').map(m => new Element(m)) }));
  }

  getArtAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.filter(element => element.title === 'Изкуства').map(m => new Element(m)) }));
  }

  getCultureAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.filter(element => element.title === 'Изкуства' || element.title === 'Хуманитарни науки' ||
      element.title === 'Социални, стопански и правни науки').map(m => new Element(m)) }));
  }

  getSportAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.filter(element => element.title === 'Спорт').map(m => new Element(m)) }));
  }

  getProfiledAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.filter(element => element.title === 'Педагогически науки' || element.title === 'Хуманитарни науки' ||
      element.title === 'Социални, стопански и правни науки' || element.title === 'Природни науки, математика и информатика' || element.title === 'Технически науки'
      || element.title === 'Спорт' || element.title === 'Изкуства' )
      .map(m => new Element(m)) }));
  }

  getProfessionalAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.filter(element => element.title !== 'Здравеопазване' )
      .map(m => new Element(m)) }));
  }

  getAreas(): Observable<Results<Element>> {
    return this._http.get<Results<IElementInput>>(`assets/areas.json`)
      .map(res => ({ ...res, results: res.results.map(m => new Element(m)) }));
  }

  getFavoritedElements(): Observable<Results<Element>> {
    return this._http
      .get<Results<IElementInput>>(`account/${this._authService.currentAccount$.getValue().id}/favorite/elements`)
      .map(res => ({ ...res, results: res.results.map(m => new Element(m)) }));
  }

  createElementList(createListModel: ICreateList, elements: Array<Element>) {
    return this._http
      .post<{ list_id: number }>(`list`, createListModel)
      .switchMap(res =>
        Observable.forkJoin(elements.map(m => this.addElementToList(m, res.list_id)))
          .mapTo(res.list_id)
      );
  }

  addElementToList(element: Element, listId: number) {
    return this._http
      .post<{ list_id: number }>(`list/${listId}/add_item`, { media_id: element.id });
  }

  getElementLists() {
    return this._http
      .get<Results<IElementListInput>>(`account/${this._authService.currentAccount$.getValue().id}/lists`)
      .map(res => ({ ...res, results: res.results.map(m => new ElementList(m)) }));
  }

  getList(listId: string) {
    return this._http.get<{ name: string, items: Array<IElementInput> }>(`list/${listId}`)
      .map(res => ({ name: res.name, items: res.items.map(m => new Element(m)) }));
  }
}
