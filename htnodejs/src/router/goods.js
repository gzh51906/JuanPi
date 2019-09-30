const express = require('express')
const Router = express.Router()

const {
    insert,
    remove,
    find,
    update
} = require('../db/mongo');
const {
    formatData,
    token
} = require('../utils');


//增加商品
Router.post('/add', async (req, res) => {
    let {
        title, //大分类
        middletitle, // 中分类
        oldprice,
        newprice,
        residue, // 上新
        inventory, //kucun
        sales_type, //销售量
        name, //名字
        status_txt, // "部分缺货"
        imgurl,
        size
    } = req.body.params;
    let colname
    switch (title) {
        case '女装':
            colname = 'nvzgoods';

            break;
        case '男装':
            colname = 'nanzgoods';
            break;
        case '母婴':
            colname = 'muygoods';

            break;
        case '鞋子':
            colname = 'xiezgoods';
            break;
        case '箱包':
            colname = 'xiangbgoods';
            break;
        case '居家百货':
            colname = 'jujbhgoods';
            break;
        case '家电数码':
            colname = 'jiadsmgoods';
            break;
        case '内衣配饰':
            colname = 'neiypsgoods';
            break;
        case '美妆':
            colname = 'meizgoods';
            break;
        case '运动户外':
            colname = 'yundhwmgoods';
            break;
        case '美食':
            colname = 'meisgoods';
            break;
        case '车品文娱':
            colname = 'chepwygoods';
            break;
        case '通讯旅游':
            colname = 'tongxlygoods';
            break;
        default:
            colname = 'goods'


    }

    try {
        insert(colname, {
            title, //大分类
            middletitle, // 中分类
            oldprice: Number(oldprice),
            newprice: Number(newprice),
            residue, // 上新
            inventory: Number(inventory), //kucun
            sales_type: Number(sales_type), //销售量
            name, //名字
            status_txt, // "部分缺货"
            imgurl,
            size
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})



// 后台删除商品
Router.delete('/:id', (req, res) => {
    let {
        id
    } = req.params;


    let { colname } = req.query;

    switch (colname) {
        case '女装':
            colname = 'nvzgoods';

            break;
        case '男装':
            colname = 'nanzgoods';
            break;
        case '母婴':
            colname = 'muygoods';

            break;
        case '鞋子':
            colname = 'xiezgoods';
            break;
        case '箱包':
            colname = 'xiangbgoods';
            break;
        case '居家百货':
            colname = 'jujbhgoods';
            break;
        case '家电数码':
            colname = 'jiadsmgoods';
            break;
        case '内衣配饰':
            colname = 'neiypsgoods';
            break;
        case '美妆':
            colname = 'meizgoods';
            break;
        case '运动户外':
            colname = 'yundhwmgoods';
            break;
        case '美食':
            colname = 'meisgoods';
            break;
        case '车品文娱':
            colname = 'chepwygoods';
            break;
        case '通讯旅游':
            colname = 'tongxlygoods';
            break;
        default:
            colname = 'goods'


    }
    try {
        remove(colname, {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})



//列表页
//必须传的参数为 title大分类  middletitle小分类
//获取大分类  title = '女装'
//大分类的小分类   middletitle = '上衣'
Router.get('/list', async (req, res) => {
    let {
        skip,
        limit,
        sort,
        asc,
        title,
        middletitle,

    } = req.query;


    let colname
    switch (title) {
        case '女装':
            colname = 'nvzgoods';

            break;
        case '男装':
            colname = 'nanzgoods';
            break;
        case '母婴':
            colname = 'muygoods';

            break;
        case '鞋子':
            colname = 'xiezgoods';
            break;
        case '箱包':
            colname = 'xiangbgoods';
            break;
        case '居家百货':
            colname = 'jujbhgoods';
            break;
        case '家电数码':
            colname = 'jiadsmgoods';
            break;
        case '内衣配饰':
            colname = 'neiypsgoods';
            break;
        case '美妆':
            colname = 'meizgoods';
            break;
        case '运动户外':
            colname = 'yundhwmgoods';
            break;
        case '美食':
            colname = 'meisgoods';
            break;
        case '车品文娱':
            colname = 'chepwygoods';
            break;
        case '通讯旅游':
            colname = 'tongxlygoods';
            break;
        default:
            colname = 'goods'
            break;

    }


    let data = await find(colname, {
        "middletitle": middletitle
    }, {
            skip,
            limit,
            sort,
            asc
        });

    res.send(formatData({
        data
    }))
})




//获取全部商品   筛选数据  第一个{} 放where条件 即query
//同时满足多个条件  {key1:value1, key2:value2}
// 或   $or: [ {key1: value1}, {key2:value2}]
//搜索框
Router.get('/like', async (req, res) => {
    let {
        skip,
        limit,
        sort,
        asc,
        select
    } = req.query;
    //     let allcolname = ['nvzgoods', 'nanzgoods', 'muygoods', 'xiezgoods',
    //         'xiangbgoods', 'jujbhgoods', 'jiadsmgoods', 'neiypsgoods', 'meizgoods', 'chepwygoods', 'tongxlygoods']

    //   let qq=[]
    //     let data = allcolname.map(async (item) => {
    //         let list = await find(item, { "name":{$regex:select} }, {});    
    //         console.log('list',...list);
    //         // qq=[..]].qq,...list]
    //          return list

    //     })

    async function SelectAll() {
        let list1 = await find('nvzgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list2 = await find('nanzgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list3 = await find('muygoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list4 = await find('xiezgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list5 = await find('xiangbgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list6 = await find('jujbhgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list7 = await find('meizgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list8 = await find('jiadsmgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list9 = await find('neiypsgoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list10 = await find('chepwygoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });
        let list11 = await find('tongxlygoods', {
            "name": {
                $regex: select
            }
        }, {
                skip,
                limit,
                sort,
                asc
            });

        return [...list1, ...list2, ...list3, ...list4, ...list5, ...list6, ...list7, ...list8, ...list9, ...list10, ...list11]
    }

    let data = await SelectAll()

    res.send(formatData({
        data
    }))


})

Router.patch('/listnav/:id', async (req, res) => {
    let { id } = req.params;
    let { title, middletitle, imgurl } = req.body.params

    try {
        if (title) {
            update("listgoods", {
                _id: id
            }, {
                    $set: {
                        title: title
                    }
                })
        }
        if (middletitle) {
            update("listgoods", {
                _id: id
            }, {
                    $set: {
                        middletitle: middletitle
                    }
                })
        }

        if (imgurl) {
            update("listgoods", {
                _id: id
            }, {
                    $set: {
                        imgurl: imgurl
                    }
                })
        }
        res.send(formatData({

        }))
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }



})



//修改商品
Router.patch('/shopping/:id', (req, res) => {
    let {
        id
    } = req.params;
    let {
        title,
        middletitle,
        oldprice,
        newprice,
        residue, // 上新
        inventory, //kucun
        sales_type, //销售量
        name, //名字
        status_txt, // "部分缺货"
        imgurl,
    } = req.body.params;

    
    let colname
    switch (title) {
        case '女装':
            colname = 'nvzgoods';

            break;
        case '男装':
            colname = 'nanzgoods';
            break;
        case '母婴':
            colname = 'muygoods';

            break;
        case '鞋子':
            colname = 'xiezgoods';
            break;
        case '箱包':
            colname = 'xiangbgoods';
            break;
        case '居家百货':
            colname = 'jujbhgoods';
            break;
        case '家电数码':
            colname = 'jiadsmgoods';
            break;
        case '内衣配饰':
            colname = 'neiypsgoods';
            break;
        case '美妆':
            colname = 'meizgoods';
            break;
        case '运动户外':
            colname = 'yundhwmgoods';
            break;
        case '美食':
            colname = 'meisgoods';
            break;
        case '车品文娱':
            colname = 'chepwygoods';
            break;
        case '通讯旅游':
            colname = 'tongxlygoods';
            break;
        default:
            colname = 'goods'
    }

    try {
        if (middletitle) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        middletitle: middletitle
                    }
                })
        }
        //旧价格
        if (oldprice) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        oldprice: Number(oldprice)
                    }
                })
        }
        //新价格
        if (newprice) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        newprice: Number(newprice)
                    }
                })
        }

        // 上新
        if (residue) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        residue: residue
                    }
                })
        }

        //库存
        if (inventory) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        inventory: Number(inventory)
                    }
                })
        }
        //销售量
        if (sales_type) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        sales_type: Number(sales_type)
                    }
                })
        }
        //商品名字
        if (name) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        name: name
                    }
                })
        }
        // "部分缺货"
        if (status_txt) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        status_txt: status_txt
                    }
                })
        }
        if (imgurl) {
            update(colname, {
                _id: id
            }, {
                    $set: {
                        imgurl: imgurl
                    }
                })
        }


        res.send(formatData())
    } catch (err) {
        console.log(111);
        
        res.send(formatData({
            code: 0
        }))
    }
})
Router.get('/listnavselect', async (req, res) => {
    let { title, middletitle } = req.query

    if (middletitle) {
        try {
            let data = await find('listgoods', { title: title, middletitle: middletitle }, {})
            res.send(formatData({
                data
            }))


        } catch (err) {
            res.send(formatData({
                code: 0
            }))
        }
    } else {
        try {
            let data = await find('listgoods', { title: title }, {})
            res.send(formatData({
                data
            }))


        } catch (err) {
            res.send(formatData({
                code: 0
            }))
        }
    }


})
// 列表页导航
Router.get('/listnav', async (req, res) => {
    let data = await find('listgoods', {}, {})
    res.send(formatData({
        data
    }))
})




//tabs
Router.get('/tabs', async (req, res) => {
    let data = await find('tabs', {}, {})
    res.send(formatData({
        data
    }))
})


//获取单个   必须传的参数为 title大分类 
Router.get('/:id', async (req, res) => {

    let {
        id
    } = req.params;

    let {
        title
    } = req.query;

    let colname
    switch (title) {
        case '女装':
            colname = 'nvzgoods';

            break;
        case '男装':
            colname = 'nanzgoods';
            break;
        case '母婴':
            colname = 'muygoods';

            break;
        case '鞋子':
            colname = 'xiezgoods';
            break;
        case '箱包':
            colname = 'xiangbgoods';
            break;
        case '居家百货':
            colname = 'jujbhgoods';
            break;
        case '家电数码':
            colname = 'jiadsmgoods';
            break;
        case '内衣配饰':
            colname = 'neiypsgoods';
            break;
        case '美妆':
            colname = 'meizgoods';
            break;
        case '运动户外':
            colname = 'yundhwmgoods';
            break;
        case '美食':
            colname = 'meisgoods';
            break;
        case '车品文娱':
            colname = 'chepwygoods';
            break;
        case '通讯旅游':
            colname = 'tongxlygoods';
            break;
        default:
            colname = 'goods'
            break;

    }

    let data = await find(colname, {
        _id: id
    });

    res.send(formatData({
        data
    }))
})






module.exports = Router;