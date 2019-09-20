import { call,apply, put, takeEvery, takeLatest,delay } from 'redux-saga/effects';

// import Api from '@/api'

function* helloSaga() {
    yield console.log('hello saga');
}

function* rootSaga() {
    // 监听`HELLO_SAGA`动作，
    // 当组件中调用dispatch({type:'HELLO_SAGA'})时，执行helloSaga函数
    yield takeLatest("HELLO_SAGA", helloSaga);
    // yield takeLatest("CHANGE_QTY_ASYNC", getKucun);
}

export default rootSaga;