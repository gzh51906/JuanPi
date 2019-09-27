import {createStore,combineReducers} from 'redux';
import commonReducer from './common';


let rootReducer= combineReducers({

    common:commonReducer
});

const store = createStore(rootReducer)

export default store