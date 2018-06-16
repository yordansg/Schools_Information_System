import { Element, Results } from '@elements/models';
export interface HomeState {
    elementResults: Results<Element>;
    selectedElement: Element;
    loading: boolean;
    collectedElements: Array<Element>;
    isCollectingElements: boolean;
    isElementListFormShown: boolean;
    isFlippable: boolean;
}
