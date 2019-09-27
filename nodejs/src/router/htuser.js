const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);
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
        password,
        quanxian
    } = req.body;
    password = bcrypt.hashSync(password, salt);
    try {
        insert('htuser', {
            username,
            password,
            quanxian
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



//用户登录
Router.post('/login', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data
    try {
        data = await find('user', {
            username
        });
        //  console.log(data);
        data = data[0];

        // 生成token返回前端
        let jpauthorization = token.create(username);
        if (data) {
            if (bcrypt.compareSync(password, data[0].password)) {
                res.send(formatData({
                    data: {
                        _id: data._id,
                        username: data.username,
                        jpauthorization,
                        quanxian: data.quanxian
                    }
                }))
            } else {
                res.send(formatData({
                    code: 0
                }))
            }

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
// 修改用户权限密码
Router.post('/change', async (req, res) => {
    let {
        username,
        quanxian,
        password
    } = req.body;

    try {
        if (quanxian) {
            update('htuser', { "username": username }, {
                $set: {
                    quanxian: quanxian
                }
            })

        }

        if (password) {
            update('htuser', { "username": username }, {
                $set: {
                    password: password
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


module.exports = Router;