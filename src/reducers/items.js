import {LOADING_ERROR, LOADING_DATA, DATA_FETCHED} from '../constants/action-types';

export function dataHasErrored(state = false, action) {
    switch (action.type) {
        case LOADING_ERROR:
            return action.hasErrored;

        default:
            return state;
    }
}

export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case LOADING_DATA:
            return action.isLoading;

        default:
            return state;
    }
}

export function data(state = [], action) {
    switch (action.type) {
        case DATA_FETCHED:
            return action.data;

        default:
            return state;
    }
}
