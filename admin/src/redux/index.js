import {createStore,combineReducers} from 'redux';
import commonReducer from './common';
import createSagaMiddleware from 'redux-saga';

// 引入调试工具模块
import {composeWithDevTools} from 'redux-devtools-extension';

// 3.引入自定义saga配置文件
import rootSaga from './rootSaga.js'

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 2.将 中间件 连接至 Store
let enhancer = applyMiddleware(sagaMiddleware)
// const store = createStore(rootReducer,composeWithDevTools(enhancer));
let rootReducer= combineReducers({

    common:commonReducer
});

enhancer = compose(enhancer,composeWithDevTools())


// 4.运行 Saga配置
sagaMiddleware.run(rootSaga);
const store = createStore(rootReducer,enhancer);

export default store