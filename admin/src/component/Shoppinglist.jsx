import  React,{Component} from 'react'

import { Table, Divider, Tag, Button, Input, Dropdown, Menu, Row, Col, Icon,Spin } from 'antd';
import api from '../api/index.jsx'


import '../css/fenlei.css'
import '../css/shop.css'
class Shopping extends Component {
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    title: 'title',
                    dataIndex: 'title',
                    key: 'title',
                    fixed:'left',
                    width: "80px",
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'middletitle',
                    dataIndex: 'middletitle',
                    key: 'middletitle',
                    fixed:'left',
                    width: "100px",
                },{
                    title: '商品名',
                    dataIndex: 'name',
                    key: 'name',
                    width:"150px"
                },
                {
                    title: 'oldprice',
                    dataIndex: 'oldprice',
                    key: 'oldprice',
                    width: "100px",
                },
                {
                    title: 'newprice',
                    dataIndex: 'newprice',
                    key: 'newprice',
                    width: "100px",
                },
                {
                    title: '上新',
                    dataIndex: 'residue',
                    key: 'residue',
                    width:" 100px",
                },
                {
                    title: '库存',
                    dataIndex: 'inventory',
                    key: 'inventory',
                    width: "100px",
                },
                {
                    title: '销售量',
                    dataIndex: 'sales_type',
                    key: 'sales_type',
                    width: "100px",
                },
                {
                    title: '是否缺货',
                    dataIndex: 'status_txt',
                    key: 'status_txt',
                    width: "100px",
                },
                {
                    title: 'imgurl',
                    dataIndex: 'imgurl',
                    key: 'imgurl',
                    width: "100px",
                },

                {
                    title: 'Action',
                    key: 'action',
                    fixed: 'right',
                    width: "130px",
                    render: (text, record) => (
                        <>

                            <Button type="primary" size="small" onClick={this.changecon.bind(this, text)}>编辑</Button>
                            <Button type="danger" size="small" onClick={this.removeItem.bind(this, text)}>删除</Button>
                        </>
                    ),
                },
            ],
            data: [],
      
            show: "none",
            text: {},
            ok:false



        }

        this.search = this.search.bind(this)
        this.modelfunction = this.modelfunction.bind(this)
        this.okcheck = this.okcheck.bind(this)

        this.changecon = this.changecon.bind(this)
        this.nocheck = this.nocheck.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this) 

        this.removeItem = this.removeItem.bind(this)
    }

    modelfunction(data){
        let res = []
        data.forEach(element => {

            res.push({
                key: element._id,
                title: element.title,
                middletitle: element.middletitle,
                imgurl: element.imgurl,
                oldprice:element.oldprice,
                newprice:element.newprice,
                residue:element.residue,
                inventory:element.inventory,
                name:element.name,
                status_txt:element.status_txt,
                sales_type:element.sales_type
            })
        })

        this.setState({
            data: res
        })
    }
    async componentDidMount() {

        let { data } = await api.getgood('/like', {"select":''})
    
        this.modelfunction(data)
        this.setState({
            ok:true
        })
       

    }

  async search(value) {   
        let val =value.replace(/\s+/g,""); 
        let titlearr = [/女装/,/男装/,/母婴/,/鞋子/,/箱包/,/居家百货/,/家电数码/,/内衣配饰/,/美妆/,/运动户外/,/美食/,/车品文娱/,/通讯旅游/]
        
        let endval;
        
        let titleReg= titlearr.some((item,i)=>{ 
            if(item.exec(val)!= null) {
                endval=item.exec(val)
                return item
            }          
          
        })
       
        //大分类为真
        if(titleReg){
          
            let result1 = await api.getgood('/list', {'title':endval[0]})
            this.modelfunction(result1.data)
        }else{
            let result2 = await api.getgood('/like', {"select":val})
            this.modelfunction(result2.data)
        }
       
        

       
        
        
    }

    

    changecon(text) {

        this.setState({
            show: "block"
        })


        this.setState({
            text,
        })

    }
    async okcheck() {
        //   console.log("text",this.state.text);
        // api.getgood('/list')
        let { key, title, middletitle, imgurl,oldprice ,newprice,residue,inventory, name,status_txt,sales_type} = this.state.text
        let res = await api.patchgood(`/${key}`, { title, middletitle, imgurl ,oldprice ,newprice,residue,inventory, name,status_txt,sales_type})
        this.setState({
            show: "none"
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

        api.removegood(`${text.key}`, {        
            colname: "listgoods",
            id:text.key
        })


        let res = this.state.data.filter(item => {
            return item.key != text.key
        })
        this.setState({
            data: res
        })
        alert('删除成功')

    }
    render() {
        let { columns, data} = this.state
      

        return (<div style={{ padding: "10px" }}>
            <div>分类管理 / 分类列表</div>


            <Spin style={{display:!this.state.ok ? "block":"none"}} className="spin"/>
            <div style={{display:this.state.ok ? "block":"none"}}>
            <Row gutter={16} type="flex" justify="start" style={{ margin: "20px 0" }}>
               
               <Col span={24}>
                   <Input.Search
                       placeholder=""
                       enterButton="搜索"
                       size="large"
                       onSearch={this.search}

                   />
               </Col>
           </Row>
          
           <Table columns={columns} dataSource={data} scroll={{ x:1500, y: 300 }}/>
           <div className="blockbox" style={{ display: this.state.show }}>
               <div>编辑商品</div>

               <div>
                   {
                   
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
            </div>
           
        </div >)


    }
}

export default Shopping;