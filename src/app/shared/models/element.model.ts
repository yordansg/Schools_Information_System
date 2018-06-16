import { environment } from '@elements/environment';
export class Element {
    posterPath: string;
    adult: boolean;
    overview: string;
    releaseDate: string;
    id: number;
    title: string;
    fields: Field[];
    popularity: number;
    voteCount: number;
    voteAverage: number;
    constructor(elementInput?: IElementInput) {
        if (elementInput) {
            this.posterPath = elementInput.poster_path;
            this.adult = elementInput.adult;
            this.overview = elementInput.overview;
            this.releaseDate = elementInput.release_date;
            this.id = elementInput.id;
            this.fields = elementInput.fields;
            this.title = elementInput.title;
            this.popularity = elementInput.popularity;
            this.voteCount = elementInput.vote_count;
            this.voteAverage = elementInput.vote_average;
        }
    }
}

export interface IElementInput {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    id: number;
    fields: Field[];
    title: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
}

export interface Field {
    name: string;
    path: string;
}
