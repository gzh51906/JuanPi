const express = require('express')
const Router = express.Router()


const {
    insert,
    find,
    update

} = require('../db/mongo');
const {
    formatData,
    token
} = require('../utils')

// 注册用户
Router.post('/reg', async (req, res) => {
    let {
        username,
        password
    } = req.body;

    try {
        insert('user', {
            username,
            password,
            dengji:"Lv1"
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

// 检查用户名是否存在
Router.post('/check', async (req, res) => {
    let {
        username
    } = req.body;
    let data
    try {
        data = await find('user', {
            username
        });
        data = data[0];
        if (data) {
            res.send(formatData({
                code: 0
            }))
        } else {
            res.send(formatData())
        }
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})




//用户个人中心数据
Router.post('/usercontent', async (req, res) => {
    let {
        username
    } = req.body;
    let data
    try {
        data = await find('user', {
            username
        });
        data = data[0];
        if (data) {
            res.send(formatData({
                data
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})


// 用户中心插入信息
Router.post('/change', async (req, res) => {
    let {
        username,
        touxiang
    } = req.body;

    try {
      if(toxiang){
        update('user', { "username": username }, {
            $set: {
                touxiang:touxiang
            }
        })
      }
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})






//登录
Router.post('/login', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data
    try {
        data = await find('user', {
            username,
            password
        });
        //  console.log(data);
        data = data[0];

        // 生成token返回前端
        let authorization = token.create(username);
        if (data) {
            res.send(formatData({
                data: {
                    _id: data._id,
                    username: data.username,
                    authorization
                }
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})
//动态码登录
Router.post('/dtlogin', async (req, res) => {
    let {
        username
    } = req.body;
    let data
    try {
        data = await find('user', {
            username
        });
        //  console.log(data);
        data = data[0];

        // 生成token返回前端
        let authorization = token.create(username);
        if (data) {
            res.send(formatData({
                data: {
                    _id: data._id,
                    username: data.username,
                    authorization
                }
            }))
        } else {
            res.send(formatData({
                code: 0
            }))
        }
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})


module.exports = Router;