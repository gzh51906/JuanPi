import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import "../css/home.css"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

import Adduser from '../component/Adduser'
import Addshopping from '../component/Addshopping'
import Addfenlei from '../component/Addfenlei'
import Dingdan from '../component/Dingdan'
import Fenleilist from '../component/Fenleilist'
import Shoppinglist from '../component/Shoppinglist'
import updateuser from '../component/updateuser'
import Updateuser from '../component/updateuser';




class Home extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            menu: [
                {
                    title: '分类管理',
                    icon: "mail",
                    sco: [

                        {
                            name: '分类列表',
                            path: '/fenleilist'
                        }, {
                            name: '添加分类',
                            path: '/addfenlei'
                        },


                    ],
                    disabled: false
                },
                {
                    title: '商品管理',
                    icon: "shop",
                    sco: [
                        {
                            name:   '商品列表',
                            path: '/shoppinglist'
                        }, {
                            name:  '添加商品',
                            path: '/addshopping'
                        }

                      
                       
                    ],
                    disabled: false
                },
                {
                    title: '订单管理',
                    icon: "file-done",
                    sco: [
                        {
                            name:   '待处理订单',
                            path: '/dingdan'
                        }
                      
                    ],
                    disabled: false
                },
                {
                    title: '用户管理',
                    icon: "user",
                    sco: [
                        {
                            name:  '添加用户',
                            path: '/adduser'
                        }, {
                            name:  '修改用户信息',
                            path: '/updateuser'
                        }                    
                        
                    ],
                    disabled: false
                }
            ]
        };

        this.onCollapse = this.onCollapse.bind(this)
        this.menuClick = this.menuClick.bind(this)
    }


    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    componentDidMount() {

    }

    menuClick({ keyPath,key,item}) {
        let { path } = this.props.match
        console.log("w", path+key);
        this.props.history.push(path+key)

    }


    render() {
        let { menu } = this.state
        let { path } = this.props.match
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Layout>
                    <Header style={{ background: "#b3c0d1", textAlign: "center" }}>
                        <img src={require("~~/59ca3863a9fcf823cd42cfcb_84x60.png")} alt="" className="logo" />
                        <span className="home-title"> 卷皮后台管理系统</span>

                    </Header>
                    <Layout className="home-bottom">
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>

                            <Menu defaultSelectedKeys={['1']} mode="inline" onClick={this.menuClick}>

                                {
                                    menu.map((item, i) => {


                                        if (item.sco) {
                                            return (<SubMenu
                                                disabled={item.disabled}
                                                key={item.title}
                                                title={
                                                    <span>
                                                        <Icon type={item.icon} />
                                                        <span>{item.title}</span>
                                                    </span>

                                                }

                                            >
                                                {
                                                    item.sco.map(ele => {
                                                        return <Menu.Item key={ele.path} >{ele.name}</Menu.Item>

                                                    })
                                                }
                                            </SubMenu>)

                                        } else {
                                            return (<Menu.Item key={item.title} disabled={item.disabled}>
                                                <Icon type={item.icon} />
                                                <span>{item.title}</span>
                                            </Menu.Item>)
                                        }

                                    })
                                }


                            </Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path={path + '/adduser'}  component={Adduser}></Route>
                                <Route path={path + '/addfenlei'}  component={Addfenlei}></Route>
                                <Route path={path + '/addshopping'}  component={Addshopping}></Route>
                                <Route path={path + '/dingdan'}  component={Dingdan}></Route>
                                <Route path={path + '/fenleilist'}  component={Fenleilist}></Route>
                                <Route path={path + '/shoppinglist'}  component={Shoppinglist}></Route>
                                <Route path={path + '/updateuser'}  component={Updateuser}></Route>
                            </Switch>
                        </Content>
                    </Layout>

                </Layout>
            </div>

        )
    }
}



export default Home;