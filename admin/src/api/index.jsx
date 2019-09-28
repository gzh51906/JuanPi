import axios from 'axios'
import { log } from 'util';

let fenlei = axios.create({
    baseURL: 'http://localhost:3003/goods'
})





async function getgood(url, params) {

    let { data } = await fenlei.get(url, { params })

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
export default {
    getgood,
    patchgood,
    removegood,
    addgood
  
}