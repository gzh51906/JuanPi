const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
// let salt = bcrypt.genSaltSync(10);

const {
    insert,
    find,
    update,remove

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
        quanxian,
        zhanghao
    } = req.body.params;
    password = bcrypt.hashSync(password, 10);
    try {
        insert('htuser', {
            username,
            password,
            quanxian,
            zhanghao
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
        zhanghao
    } = req.body.params;
    let data
    
    try {
        data = await find('htuser', {
            zhanghao
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
          
        }))
    }
})



//用户登录
Router.post('/login', async (req, res) => {
    let {
        password,
        zhanghao
    } = req.body.params;

       
    let data
    try {
        data = await find('htuser', {
            zhanghao
        });
        //  console.log(data);
        data = data[0];
    
        // 生成token返回前端
        let jpauthorization = token.create(zhanghao);
        if (data) {
        //  console.log('data',data);
         
            if (bcrypt.compareSync(password, data.password)) {
                res.send(formatData({
                    data: {
                        _id: data._id,
                        zhanghao: data.zhanghao,
                        username:data.username,
                        jpauthorization,
                        quanxian: data.quanxian
                    }
                }))
            // if(data){
            //     bcrypt.compare("B4c0/\/", hash, function(err, res) {
            //         // res === true
            //     });
            
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
        zhanghao,
        quanxian,
        password
    } = req.body.params;

    try {
        if (quanxian) {
            update('htuser', { "zhanghao": zhanghao }, {
                $set: {
                    quanxian: quanxian
                }
            })

        }

        if (password) {
            password = bcrypt.hashSync(password, salt);
            update('htuser', { "zhanghao": zhanghao }, {
                $set: {
                    password: password
                }
            })
        }
        if (username) {
            update('htuser', { "zhanghao": zhanghao }, {
                $set: {
                    username:username
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


Router.get('/havetoken', async (req, res) => {
    let {id} = req.query;
  
        try {

           let data =await find('htuser',{"_id":id},{})
           data = data[0];
            res.send(formatData({data}))
  
        } catch (err) {
            res.send(formatData({
                code: 0
            }))
        
        }

    
   
})


Router.get('/', async (req, res) => {
    let {username,zhanghao} = req.query;

 
    let result = username || zhanghao
  
    if(result){
        try {
            if(username){
           let data =await find('htuser',{"username":username},{})
            res.send(formatData({data}))
            }
           if(zhanghao){
                let data =await find('htuser',{"username":username},{})
            res.send(formatData({data}))
           }
        } catch (err) {
            res.send(formatData({
                code: 0
            }))
        }

    }else{
        try {
            let data =await find('htuser',{},{})
            res.send(formatData(
                {data}
            ))              
        } catch (err) {
            res.send(formatData({
                code: 0
            }))
        }
    }
   
})

Router.delete('/:id', (req, res) => {
    let {
        id

    } = req.params;

    
    try {
        remove('htuser', {
            _id: id
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})






module.exports = Router;