import { Injectable } from '@angular/core';
import { IElementInput, Element } from '@elements/models';

const fakeInput: IElementInput = {
    poster_path: 'test.jpg',
    adult: true,
    overview: 'overview',
    release_date: '11-02-1990',
    id: 1,
    fields: [
        {
            name: 'xaxa',
            path: 'sdasda'
        },
        {
            name: 'xaxa',
            path: 'sdasda'
        }
    ],
    title: 'title',
    popularity: 1232,
    vote_count: 2121,
    vote_average: 123,
};
@Injectable()
export class ElementFactory {
    static create() {
        return new Element();
    }
    static createFake() {
        return new Element(fakeInput);
    }
}
