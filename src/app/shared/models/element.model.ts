import { environment } from '@elements/environment';
export class Element {
    posterPath: string;
    overview: string;
    id: number;
    title: string;
    fields: Field[];
    constructor(elementInput?: IElementInput) {
        if (elementInput) {
            this.posterPath = elementInput.poster_path;
            this.overview = elementInput.overview;
            this.id = elementInput.id;
            this.fields = elementInput.fields;
            this.title = elementInput.title;
        }
    }
}

export interface IElementInput {
    poster_path: string;
    overview: string;
    id: number;
    fields: Field[];
    title: string;
}

export interface Field {
    name: string;
    path: string;
}
