const express = require('express');
const Router = express.Router();

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

//增加订单
Router.post('/add', async (req, res) => {


    let {
        oldprice,
        newprice,
        name,                 //商品名字
        imgurl,               //图片
        num,                  //数量
        selectstyle,           //选择款式
        selectsize,             //选择的大小
        goodid                  //商品的id
    } = req.body;
    
    try {
        let total = (price.slice(1)) * num
      
        insert('mycart', {
            oldprice:Number(oldprice),
            newprice:Number(newprice),
            name,                 //商品名字
            imgurl,               //图片
            status:"1",           //加入购物车状态为1
            num:Number(num),  
            selectstyle,         //选择的款式
            selectsize  ,         //选择的大小
            goodid  
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//获取全部订单
Router.get('/', async (req, res) => {
    let {
        skip,
        limit,
        sort
    } = req.query;
    let data = await find('mycart', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})


// 删除订单  
Router.delete('/:id', (req, res) => {
    let {
        id
    } = req.params;

    try {
        remove('mycart', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//修改订单状态 ：就是修改status的对应状态
// 添加购物车为1 已经下单为2 已经付款为3 订单完成为4 退款为5 退款成功为6
Router.patch('/:id', (req, res) => {
    let {
        id,
    } = req.params;
    let {
        status
    } = req.body
    // console.log('req',status);

    try {

        update('mycart', {
            _id: id
        }, {
            $set: {
                status: status
            }
        })

        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})


//获取单个订单
Router.get('/:id', async (req, res) => {
    let {
    id
    } = req.params;
    let data = await find('mycart', {
    _id: id
    });
    res.send(formatData({
    data
    }))
    })





module.exports = Router;