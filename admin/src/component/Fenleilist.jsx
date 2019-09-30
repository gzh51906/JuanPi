import React, { Component } from 'react'
import { Table, Divider, Tag, Button, Input, Dropdown, Menu, Row, Col, Icon } from 'antd';
import api from '../api/index.jsx'

import { log } from 'util';

import '../css/fenlei.css'

class Fenleilist extends Component {
    constructor() {
        super();
        this.state = {
            columns: [      
            ],
            data: [],
            resmenu: [],
            select: "全部",
            show: "none",
            text: {}
        }

        this.search = this.search.bind(this)
        this.onselect = this.onselect.bind(this)
        this.changecon = this.changecon.bind(this)
        this.okcheck = this.okcheck.bind(this)
        this.nocheck = this.nocheck.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.modelfunction= this.modelfunction.bind(this)
    }

   async modelfunction(data){
    
    let menu = ['全部']
        let res = []
        data.forEach(element => {
            res.push({
                key: element._id,
                title: element.title,
                middletitle: element.middletitle,
                imgurl: element.imgurl
            })
            menu.push(element.title)

        })
        this.setState({
            data: res
        })
        let resmenu = [...new Set(menu)]
        this.setState({
            resmenu
        })
    }
   
    async componentDidMount() {

        let { data } = await api.getgood('/listnav', {})
        let res = []
        let menu = ['全部']
        let htid = localStorage.getItem('htid')
        data.forEach(element => {
            res.push({
                key: element._id,
                title: element.title,
                middletitle: element.middletitle,
                imgurl: element.imgurl
            })
            menu.push(element.title)

        })
        let { data: { quanxian} } = await api.getuser('/havetoken', { id: htid })
        let columns;

        if(quanxian=="初级"){
            columns=[
                {
                    title: 'title',
                    dataIndex: 'title',
                    key: 'title',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'middletitle',
                    dataIndex: 'middletitle',
                    key: 'middletitle',
                },
                {
                    title: 'imgurl',
                    dataIndex: 'imgurl',
                    key: 'imgurl',
                },

                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <>

                            <Button type="primary" size="small" onClick={this.changecon.bind(this, text)}>编辑</Button>
                            <Button type="danger" size="small" onClick={this.removeItem.bind(this, text)} disabled>删除</Button>
                        </>
                    ),
                },
            ]
        }else{
            columns=[
                {
                    title: 'title',
                    dataIndex: 'title',
                    key: 'title',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'middletitle',
                    dataIndex: 'middletitle',
                    key: 'middletitle',
                },
                {
                    title: 'imgurl',
                    dataIndex: 'imgurl',
                    key: 'imgurl',
                },

                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <>

                            <Button type="primary" size="small" onClick={this.changecon.bind(this, text)}>编辑</Button>
                            <Button type="danger" size="small" onClick={this.removeItem.bind(this, text)}>删除</Button>
                        </>
                    ),
                },
            ]
        }
       
        this.setState({
            data: res
        })
        let resmenu = [...new Set(menu)]
        this.setState({
            resmenu
        })
        this.setState({
           columns
        })


    }

    componentWillUnMount (){
        this.setState = (state, callback) => {
            return
          }
    }

   async search(value) {
        let tit = this.state.select;
  
        if (tit === '全部') {
            if (value === '') {
                let { data } = await api.getgood('/listnav', {})
                this.modelfunction(data)
            } else {
                let { data } = await api.getgood('/listnavselect', {title:tit})

                this.modelfunction(data)
            }


        } else {
            if (value == '') {
             let {data}= await api.getgood('/listnavselect',{title:tit})
             this.modelfunction(data)
            } else {

                let {data}= await api.getgood('/listnavselect',{title:tit,middletitle:value})
             this.modelfunction(data)
            }


        }

    }

    onselect(val) {
        this.setState({
            select: val
        })
    }
    changecon(text) {
        this.setState({
            show: "block"
        })
        this.setState({
            text
        })

    }
    async okcheck() {
        let { key, title, middletitle, imgurl } = this.state.text
        let res = await api.patchgood(`/listnav/${key}`, { title, middletitle, imgurl })
       
        this.setState({
            show: "none"
        })
        this.setState({
            text:{}
        })
        alert("修改成功")

    }

    nocheck() {
        this.setState({
            show: "none"
        })
        this.setState({
            text:{}
        })
    }

    onChangeValue(name, e) {
        let data = this.state.text;
        data[name] = e.target.value;
        this.setState({
            text: data
        })



    }


    removeItem(text) {
        var r = confirm("确定删除？");
        if (r == true) {
            api.removegood('/listnav', {
                id: text.key,
                colname: "listgoods"
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
        let { columns, data, resmenu, select } = this.state
        const menu = (
            <Menu>
                {

                    resmenu.map(item => {
                        return <Menu.Item key={item} onClick={this.onselect.bind(this, item)}>
                            {item}
                        </Menu.Item>
                    })
                }


            </Menu>
        );

        return (<div style={{ padding: "10px" }}>
            <div>分类管理 / 分类列表</div>
            <Row gutter={16} type="flex" justify="start" style={{ margin: "20px 0" }}>
                <Col span={4} >
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button>{select}<Icon type="down" /></Button>
                    </Dropdown>
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
                        //  {Object.keys(this.props.appearanceNode).map(key => (
                        //     <Form.Item {...formItemLayout} key={key}>
                        //       <div key={key}>{this.props.appearanceNode[key]}        
                        //             </div>
                        //     </Form.Item>
                        //   ))}  
                        Object.keys(this.state.text).map((key) => {
                            if (key === 'key') {
                                return <label key={key}>
                                    {key}:
                                <Input defaultValue={this.state.text[key]} disabled />
                                </label>
                            }
                            return <label key={key}>
                                {key}:
                                <Input defaultValue={this.state.text[key]} onChange={this.onChangeValue.bind(null, key)} />
                            </label>
                        })
                    }

                    <div style={{ marginTop: "30px" }}>
                        <Button onClick={this.okcheck}>确定</Button>
                        <Button onClick={this.nocheck}>取消</Button>
                    </div>

                </div>
            </div>
        </div >)


    }
}

export default Fenleilist;              