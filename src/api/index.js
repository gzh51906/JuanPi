import axios from 'axios';


async function get() {
    let { data } = await axios.get('')
    return data;
}

//tabs
async function getTabs() {
    let { data } = await axios.get('http://localhost:3003/goods/tabs');
    return data;
}
//goodslist
async function goodslist(title,middletitle) {
    let { data } = await axios.get('http://localhost:3003/goods/list',{
        params: {
            title,
            middletitle
          }
    });
    return data;
}

//getgoods
async function getgoods(id,classitf) {
    let { data } = await axios.get(`http://localhost:3003/goods/${id}?title=${classitf}`);
  
    return data;
}

export default {
    get,
    getTabs,
    goodslist,
    getgoods
};