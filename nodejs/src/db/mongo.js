const mongodb = require("mongodb");
const {
    DBurl,
    DBname
} = require("../config.json");

//获取MongoDB客户端
const {
    MongoClient,
    ObjectId
} = mongodb;

//连接mongoDB
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(DBurl,async (err, client) => {
            //err:连接失败的错误信息，默认为null
            //client：连接数据库的客户端
            if (err) throw err;
            //连接具体一个数据库，没有就自动创建
            let db = client.db(DBname);
            resolve({
                client,
                db
            });
        })
    })
}

//下面都是工具方法，exports导出工具方法
//增加
exports.insert = async (colName, data) => {
    //连接数据库，获取客户端与数据库对象

    let {
        client,
        db
    } = await connect();
        if (data._id) {
            data._id = ObjectId(data._id);
        }

    //获取集合
    let collection = db.collection(colName);
    //插入一条数据

    let result = await collection.insertOne(data);
    //查询结束，关闭客户端连接
    client.close();
    return result;
}

//删除
exports.remove = async (colName, query) => {
    //colName:集合名称
    //query:查询条件
    if (query._id) {
        query._id = ObjectId(query._id);
    }
    let {
        db,
        client
    } = await connect();
    //获取集合
    let collection = db.collection(colName);
    collection.deleteMany(query);
    client.close();

}

//修改
exports.update = async (colName, query, data) => {
    //colName:集合名称
    //query：查询条件
    //data:跟新的数据
    if (query._id) {
        query._id = ObjectId(query._id);
    }
    let {
        db,
        client
    } = await connect();
    let collection = db.collection(colName);
    collection.updateMany(query, data);
    client.close();
}

//查找
exports.find = async (colName, query = {}, {
    sort,
    skip,
    limit,
    asc
} = {}) => {
    let {
        db,
        client
    } = await connect();
    let collection = db.collection(colName);

    //对传进来的id进行添加前缀ObjectId（）
    if (query._id) {
        query._id = ObjectId(query._id);
    }

    let result = collection.find(query);

    //筛选
    //排序
    if (sort) {
        let opt = {};
        opt[sort] = asc == 'true' ? -1 : 1;
        // console.log(opt[sort]);

        result = result.sort(opt)
    }
    //限制每一页的数量
    if (limit) {
        result = result.limit(Number(limit));
    }
    //跳过指定数量
    if (skip) {
        result = result.skip(Number(skip));
    }

    let data = await result.toArray();

    
    client.close();
    return data;
}