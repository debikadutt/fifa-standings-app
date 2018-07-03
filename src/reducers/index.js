import { combineReducers } from 'redux';
import { data, dataHasErrored, dataIsLoading } from './items';

export default combineReducers({
    data,
    dataHasErrored,
    dataIsLoading
});
