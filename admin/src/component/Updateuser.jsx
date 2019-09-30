
import React, { Component } from 'react'
import { Table,  Button, Input,  Row, Col, Icon } from 'antd';
import api from '../api/index.jsx'
import '../css/fenlei.css'

class Updateuser extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: 'name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '账号',
                    dataIndex: 'zhanghao',
                    key: 'zhanghao',
                },
                {
                    title: '密码',
                    dataIndex: 'password',
                    key: 'password',
                },

                {
                    title: '权限',
                    dataIndex: 'quanxian',
                    key: 'quanxian',
                },

                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <>
                            <Button type="primary" size="small" onClick={this.changecon.bind(this,text)}>编辑</Button>
                            <Button type="danger" size="small" onClick={this.removeItem.bind(this, text)}>删除</Button>
                        </>
                    ),
                },
            ],
            data: [],

            show: "none",
            text: {},
            pass:""



        }

        this.search = this.search.bind(this)
        this.changecon = this.changecon.bind(this)
        this.okcheck = this.okcheck.bind(this)
        this.nocheck = this.nocheck.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.allselet = this.allselet.bind(this)
        this.modelfunction = this.modelfunction.bind(this)
        this.onChangepass = this.onChangepass.bind(this)
    }
    async componentWillMount() {

        let { data } = await api.getuser('', {})
        let res = []
        data.forEach(element => {

            res.push({
                key: element._id,
                name: element.username,
                zhanghao: element.zhanghao,
                password: element.password,
                quanxian: element.quanxian
            })


        })

        this.setState({
            data: res
        })


    }

    
componentWillUnMount () {
    this.setState = (state, callback) => {
        return
      }


}

    modelfunction(data) {
        let res = []
        data.forEach(element => {
            res.push({
                key: element._id,
                name: element.username,
                zhanghao: element.zhanghao,
                password: element.password
            })
        })

        this.setState({
            data: res
        })
    }
    async allselet() {
        let { data } = await api.getuser('/', {})
        this.modelfunction(data)
    }

    search(value) {
        let val = value.replace(/\s+/g, "");


    }

    changecon(text) {

        this.setState({
            show: "block"
        })

        this.setState({
            text
        })


    }

    onChangepass(e){
    
       this.setState({
           pass:e.target.value
       })

        
    }

    async okcheck() {
        let { quanxian, zhanghao } = this.state.text
   
        let qxreg = /^(初级|中级|高级)$/
        let result1 = qxreg.test(quanxian)

        let resreg = /^[0-9]{6,9}$/;
        let result3 = resreg.test(Number(this.state.pass))
              //如果为空，不修改
        if(this.state.pass){
            if(result3){
                if(result1){
                   //验证成功修改数据
                     let xiugai = await api.reguser('/change', {
                         zhanghao,
                         password,
                         quanxian                    
                     })
                     
                     alert('修改成功')
                     this.setState({
                        show: "none"
                    })
                }else{
                 alert(`权限只有初级中级高级!`)
                }
             }else{
                 alert(`密码为6-9个数字!`)
             }
        }else{
            if(result1){
                //验证成功修改数据
                  let xiugai1 = await api.reguser('/change', {
                      zhanghao,                 
                      quanxian                    
                  })
                
                  
                  if(xiugai1.msg==='success'){   
                    alert('修改成功')
                    this.setState({
                      show: "none"
                  })
                  }
              
                
             }else{
              alert(`权限只有初级中级高级!`)
             }
        }
 


    }

    nocheck() {
        this.setState({
            show: "none"
        })
        this.setState({
            text: {}
        })
    }

    onChangeValue(name, e) {
        let data = this.state.text;
        let res = e.target.value.replace(/\s+/g, "")
        data[name] = res;
        this.setState({
            text: data
        })
    }


    removeItem(text) {
        //未改
        var r = confirm("确定删除？");
        if (r == true) {
            api.removeuser(`/${text.key}`, {
                id: text.key
             
            })

            let res = this.state.data.filter(item => {
                return item.key != text.key
            })
            this.setState({
                data: res
            })
            alert('删除成功')
        } else {

        }


    }
    render() {
        let { columns, data } = this.state


        return (<div style={{ padding: "10px" }}>
            <div>用户管理 / 修改用户信息</div>
            <Row gutter={16} type="flex" justify="start" style={{ margin: "20px 0" }}>
                <Col span={4} >
                    <Button type="primary" onClick={this.allselet}>全部</Button>
                </Col>
                <Col span={20}>
                    <Input.Search
                        placeholder=""
                        enterButton="搜索"
                        size="large"
                        onSearch={this.search}

                    />
                </Col>
            </Row>

            <Table columns={columns} dataSource={data} />
            <div className="blockbox" style={{ display: this.state.show }}>
                <div>编辑商品</div>

                <div>
                    {
                        Object.keys(this.state.text).map((key) => {
                            if (key == 'quanxian') {
                                return <label key={key}>
                                    {key}:
                                <Input defaultValue={this.state.text[key]} onChange={this.onChangeValue.bind(null, key)} />
                                </label>
                            }

                        })
                    }
                    <label key="changepass">
                        修改密码:
                           <Input onChange={this.onChangepass} value={this.state.pass}/>
                    </label>
                    <div style={{ marginTop: "30px" }}>
                        <Button onClick={this.okcheck}>确定</Button>
                        <Button onClick={this.nocheck}>取消</Button>
                    </div>

                </div>
            </div>
        </div >)


    }
}

export default Updateuser;        