
import { HomeState } from 'app/home/home.state';
import * as Home from './home.actions';
export function home(state: HomeState =
    {
        elementResults: null, loading: false, selectedElement: null, collectedElements: [], isCollectingElements: false, isElementListFormShown: false, isFlippable: false
    },
    action: Home.All): HomeState {
    switch (action.type) {
        case Home.SELECT_MOVIE:
            return { ...state, selectedElement: action.payload };
        case Home.GET_MOVIES:
            return { ...state, loading: true, elementResults: null };
        case Home.GET_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_SPIRITUAL_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_ART_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_SPORT_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_CULTURE_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_PROFILED_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_PROFESSIONAL_AREAS:
            return { ...state, loading: true, elementResults: null, isFlippable: true };
        case Home.GET_FAVORITE_MOVIES:
            return { ...state, loading: true, elementResults: null };
        case Home.GET_MOVIES_SUCCESS:
            return { ...state, loading: false, elementResults: action.payload };
        case Home.COLLECT_MOVIE:
            return { ...state, collectedElements: [...state.collectedElements, action.payload] };
        case Home.TOGGLE_COLLECTING_MOVIES:
            return { ...state, collectedElements: [], isCollectingElements: !state.isCollectingElements };
        case Home.STOP_COLLECTING_MOVIES:
            return { ...state, collectedElements: [], isCollectingElements: false };
        case Home.TOGGLE_LIST_FORM:
            return { ...state, isElementListFormShown: !state.isElementListFormShown };
        default:
            return state;
    }

}
