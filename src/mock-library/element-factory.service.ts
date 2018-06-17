import { Injectable } from '@angular/core';
import { IElementInput, Element } from '@elements/models';

const fakeInput: IElementInput = {
    poster_path: 'test.jpg',
    overview: 'overview',
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
    title: 'title'
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
