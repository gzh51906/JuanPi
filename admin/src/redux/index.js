import {createStore,combineReducers} from 'redux';
import commonReducer from './common';
import regReducer from './reg'



// const store = createStore(rootReducer,composeWithDevTools(enhancer));
let rootReducer= combineReducers({

    common:commonReducer,
    reg:regReducer
});



const store = createStore(rootReducer);

export default store