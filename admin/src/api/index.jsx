import axios from 'axios'
import { log } from 'util';
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

let fenlei = axios.create({
    baseURL: 'http://localhost:3003/goods'
})

let user = axios.create({
    baseURL: 'http://localhost:3003/htuser'
})



async function getgood(url, params) {

    let { data } = await fenlei.get(url, { params})

    return data
}

async function patchgood(url, params) {

    let { data } = await fenlei.patch(url, { params })

    return data
}

async function removegood(url, params) {

    let { data } = await fenlei.delete(url, { params })

    return data
}

async function addgood(url, params) {

    let { data } = await fenlei.post(url, { params })

    return data
}
async function getuser(url, params) {

    let { data } = await user.get(url, { params })

    return data
}

async function reguser(url, params) {

    let { data } = await user.post(url, { params })

    return data
}

async function removeuser(url, params) {

    let { data } = await user.delete(url,{
        params
    })

    return data
}


export default {
    getgood,
    patchgood,
    removegood,
    addgood,
    getuser,
    reguser,
    removeuser
    // source
  
}