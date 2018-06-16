export class ElementList {

    description: string;
    favoriteCount: number;
    id: number;
    itemCount: number;
    listType: string;
    name: string;
    posterPath: string;
    constructor(elementListInput: IElementListInput) {
        if (elementListInput) {
            this.description = elementListInput.description;
            this.favoriteCount = elementListInput.favorite_count;
            this.id = elementListInput.id;
            this.itemCount = elementListInput.item_count;
            this.listType = elementListInput.list_type;
            this.name = elementListInput.name;
            this.posterPath = elementListInput.poster_path;
        }
    }
}

export interface IElementListInput {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    list_type: string;
    name: string;
    poster_path: string;
}
