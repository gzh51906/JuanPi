const express = require('express');

//上传文件/图片
const path = require('path');
const multer = require('multer');

const Router = express.Router();

const {
    update
} = require('../db/mongo')
// 1


var storage = multer.diskStorage({
    //保存图片的目录，没有则自动创建
    destination: "../../admin/public/img/",

    // 重命名文件名（必须使用回调函数cb）
    filename: function (req, file, cb) {
        //获取文件后缀
        let ext = path.extname(file.originalname);
 

        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})

var upload = multer({
    storage
});

const {
    insert,
    remove,
    find
} = require('../db/mongo');
const {
    formatData
} = require('../utils');

// 上传商品图片a
Router.use('/goods', upload.array('goods', 6), (req, res) => {
    console.log(999);
    console.log('req', req.files);
    // upload.array()会对上传的图片进行处理，并设置到req.files中
    // res.send('111')
    res.send(req.files)
})

// Router.post('/goods', (req, res) => {
//     res.send("yyy")
// })

// 
// router.post('/touxiang',upload.single('touxiang'),(req,res)=>{
//     // upload.single()会对上传的图片进行处理，并设置到req.file属性中
//     console.log(req.file);  
//     let {_id} = req.body

//     // update('user',{_id},{touxiang:req.file.filename})
//     res.send('success')
// })
module.exports = Router;