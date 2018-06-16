import { Element, Results } from '@elements/models';
export interface SearchState {
    searchResults: Array<Element>;
    searching: boolean;
    resultsShown: boolean;
    selectedItemIndex: number;
    searchString: string;
}
