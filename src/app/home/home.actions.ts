import { ICreateList } from '@elements/interfaces';
import { Element, Results } from '@elements/models';
import { Action } from '@ngrx/store';

export const SELECT_MOVIE = '[Home] Select Element';
export const GET_MOVIES = '[Home] Get Elements';
export const GET_AREAS = '[Home] Get Areas';
export const GET_FAVORITE_MOVIES = '[Home] Get Favorite Elements';
export const GET_SPIRITUAL_AREAS = '[Home] Get Spiritual Areas';
export const GET_ART_AREAS = '[Home] Get Art Areas';
export const GET_CULTURE_AREAS = '[Home] Get Culture Areas';
export const GET_SPORT_AREAS = '[Home] Get Sport Areas';
export const GET_PROFILED_AREAS = '[Home] Get Profiled Areas';
export const GET_PROFESSIONAL_AREAS = '[Home] Get Professional Areas';
export const GET_MOVIES_SUCCESS = '[Home] Elements Received';
export const COLLECT_MOVIE = '[Home] Element Collected';
export const TOGGLE_COLLECTING_MOVIES = '[Home] Toggle Collecting Elements';
export const STOP_COLLECTING_MOVIES = '[Home] Stop Collecting Elements';
export const TOGGLE_LIST_FORM = '[Home] Toggle List Form';
export const CREATE_LIST = '[Home] Create List';
export const CREATE_LIST_SUCCESS = '[Home] Create List Success';

export class SelectElement implements Action {
    readonly type = SELECT_MOVIE;
    constructor(public payload: Element) { }
}

export class GetElements implements Action {
    readonly type = GET_MOVIES;
}

export class GetFavoriteElements implements Action {
    readonly type = GET_FAVORITE_MOVIES;
}

export class GetElementsSuccess implements Action {
    readonly type = GET_MOVIES_SUCCESS;
    constructor(public payload: Results<Element>) {

    }
}

export class GetAreas implements Action {
    readonly type = GET_AREAS;
}
export class GetCultureAreas implements Action {
    readonly type = GET_CULTURE_AREAS;
}

export class GetSpiritualAreas implements Action {
    readonly type = GET_SPIRITUAL_AREAS;
}

export class GetSportAreas implements Action {
    readonly type = GET_SPORT_AREAS;
}

export class GetArtAreas implements Action {
    readonly type = GET_ART_AREAS;
}

export class GetProfiledAreas implements Action {
    readonly type = GET_PROFILED_AREAS;
}

export class GetProfessionalAreas implements Action {
    readonly type = GET_PROFESSIONAL_AREAS;
}

export class CollectElement implements Action {
    readonly type = COLLECT_MOVIE;
    constructor(public payload: Element) {
    }
}

export class ToggleCollectingElements implements Action {
    readonly type = TOGGLE_COLLECTING_MOVIES;
}

export class StopCollectingElements implements Action {
    readonly type = STOP_COLLECTING_MOVIES;
}

export class ToggleElementListForm implements Action {
    readonly type = TOGGLE_LIST_FORM;
}

export class CreateList implements Action {
    readonly type = CREATE_LIST;
    constructor(public createListModel: ICreateList) {
    }
}

export type All
    = SelectElement
    | GetElements
    | GetAreas
    | GetCultureAreas
    | GetSpiritualAreas
    | GetSportAreas
    | GetArtAreas
    | GetProfiledAreas
    | GetProfessionalAreas
    | GetFavoriteElements
    | GetElementsSuccess
    | CollectElement
    | ToggleCollectingElements
    | StopCollectingElements
    | ToggleElementListForm
    | CreateList;
