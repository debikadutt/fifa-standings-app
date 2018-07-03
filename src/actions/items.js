import {LOADING_ERROR, LOADING_DATA, DATA_FETCHED} from '../constants/action-types';
import {URL} from '../constants/api-url';

export function dataHasErrored(bool) {
    return {
        type: LOADING_ERROR,
        hasErrored: bool
    };
}

export function dataIsLoading(bool) {
    return {
        type: LOADING_DATA,
        isLoading: bool
    };
}

export function dataFetchSuccess(data) {
    return {
        type: DATA_FETCHED,
        data
    };
}

export function itemsFetchData() {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(dataIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((data) => dispatch(dataFetchSuccess(data.groups)))
            .catch(() => dispatch(dataHasErrored(true)));
    };
}
