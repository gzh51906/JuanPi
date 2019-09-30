import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import "../css/home.css"
import { Layout, Menu, Button, Icon } from 'antd';
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
import axios from 'axios'
import { connect } from 'react-redux'
import Api from '@/api'



class Home extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
            menu: [],
            user:''
        };

        this.onCollapse = this.onCollapse.bind(this)
        this.menuClick = this.menuClick.bind(this)
        this.tologinout= this.tologinout.bind(this)
    }


    onCollapse(collapsed) {
        this.setState({ collapsed });
    };
    async componentDidMount() {
        console.log('sss', this.props);

        let token = localStorage.getItem('htAuthorization')
        let htid = localStorage.getItem('htid')

        // token验证
        let { data: { data } } = await axios.get('http://localhost:3003/verify', {
            headers: { Authorization: token }
        })

        if (data.authorization) {
            try {
                let { data: { quanxian ,username} } = await Api.getuser('/havetoken', { id: htid })
                //   权限                    
                let menu;
                if (quanxian == "初级") {
                    menu = [
                        {
                            title: '分类管理',
                            icon: "mail",
                            sco: [
                                {
                                    name: '分类列表',
                                    path: '/fenleilist',
                                    disabled: false
                                }, {
                                    name: '添加分类',
                                    path: '/addfenlei',
                                    disabled: false
                                },
                            ],
                            disabled: false
                        },
                        {
                            title: '商品管理',
                            icon: "shop",
                            sco: [
                                {
                                    name: '商品列表',
                                    path: '/shoppinglist',
                                    disabled: false
                                }, {
                                    name: '添加商品',
                                    path: '/addshopping',
                                    disabled: false
                                }
                            ],
                            disabled: false
                        },
                        {
                            title: '订单管理',
                            icon: "file-done",
                            sco: [
                                {
                                    name: '待处理订单',
                                    path: '/dingdan',
                                    disabled: false
                                }
                            ],
                            disabled: false
                        },
                        {
                            title: '用户管理',
                            icon: "user",
                            sco: [
                                {
                                    name: '添加用户',
                                    path: '/adduser',
                                    disabled: false
                                }, {
                                    name: '修改用户信息',
                                    path: '/updateuser',
                                    disabled: false
                                }

                            ],
                            disabled: true
                        }
                    ]
                }
                if (quanxian == "中级") {
                    menu = [{
                        title: '分类管理',
                        icon: "mail",
                        sco: [
                            {
                                name: '分类列表',
                                path: '/fenleilist',
                                disabled: false
                            }, {
                                name: '添加分类',
                                path: '/addfenlei',
                                disabled: false
                            },
                        ],
                        disabled: false
                    },
                    {
                        title: '商品管理',
                        icon: "shop",
                        sco: [
                            {
                                name: '商品列表',
                                path: '/shoppinglist',
                                disabled: false
                            }, {
                                name: '添加商品',
                                path: '/addshopping',
                                disabled: false
                            }
                        ],
                        disabled: false
                    },
                    {
                        title: '订单管理',
                        icon: "file-done",
                        sco: [
                            {
                                name: '待处理订单',
                                path: '/dingdan',
                                disabled: false
                            }
                        ],
                        disabled: false
                    },
                    {
                        title: '用户管理',
                        icon: "user",
                        sco: [
                            {
                                name: '添加用户',
                                path: '/adduser',
                                disabled: true
                            }, {
                                name: '修改用户信息',
                                path: '/updateuser',
                                disabled: true
                            }

                        ],
                        disabled: false
                    }]

                }
                if (quanxian == "高级") {
                    menu = [
                        {
                            title: '分类管理',
                            icon: "mail",
                            sco: [
                                {
                                    name: '分类列表',
                                    path: '/fenleilist',
                                    disabled: false
                                }, {
                                    name: '添加分类',
                                    path: '/addfenlei',
                                    disabled: false
                                },
                            ],
                            disabled: false
                        },
                        {
                            title: '商品管理',
                            icon: "shop",
                            sco: [
                                {
                                    name: '商品列表',
                                    path: '/shoppinglist',
                                    disabled: false
                                }, {
                                    name: '添加商品',
                                    path: '/addshopping',
                                    disabled: false
                                }
                            ],
                            disabled: false
                        },
                        {
                            title: '订单管理',
                            icon: "file-done",
                            sco: [
                                {
                                    name: '待处理订单',
                                    disabled: false,
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
                                    name: '添加用户',
                                    path: '/adduser',
                                    disabled: false
                                }, {
                                    name: '修改用户信息',
                                    path: '/updateuser',
                                    disabled: false
                                }

                            ],
                            disabled: false
                        }
                    ]
                }

                this.setState({
                    menu
                })
                this.setState({
                    user:username
                })

            } catch (err) {
                alert('请重新登陆')
            }


        } else {
            this.props.history.push('/')
        }


    }

    menuClick({ keyPath, key, item }) {
        let { path } = this.props.match
        this.props.history.push(path + key)

    }

  tologinout(){
this.props.loginout();
this.props.history.push('/')
  }
    render() {
        let { menu,user } = this.state
        let { path } = this.props.match
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Layout>
                    <Header style={{ background: "#b3c0d1", textAlign: "center" }}>
                        <img src={require("~~/59ca3863a9fcf823cd42cfcb_84x60.png")} alt="" className="logo" />
                        <span className="home-title"> 卷皮后台管理系统</span>
                        <div className="loginout"><span className="loginspan">{user}</span> <Button type="link" onClick={this.tologinout}>退出登陆</Button></div>

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
                                                        return <Menu.Item key={ele.path} disabled={ele.disabled}>{ele.name}</Menu.Item>

                                                    })
                                                }
                                            </SubMenu>)

                                        } else {
                                            return (
                                                <Menu.Item key={item.title} disabled={item.disabled}>
                                                    <Icon type={item.icon} />
                                                    <span>{item.title}</span>
                                                </Menu.Item>

                                            )
                                        }

                                    })
                                }


                            </Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path={path + '/adduser'} component={Adduser}></Route>
                                <Route path={path + '/addfenlei'} component={Addfenlei}></Route>
                                <Route path={path + '/addshopping'} component={Addshopping}></Route>
                                <Route path={path + '/dingdan'} component={Dingdan}></Route>
                                <Route path={path + '/fenleilist'} component={Fenleilist}></Route>
                                <Route path={path + '/shoppinglist'} component={Shoppinglist}></Route>
                                <Route path={path + '/updateuser'} component={Updateuser}></Route>
                            </Switch>
                        </Content>
                    </Layout>

                </Layout>
            </div>

        )
    }
}


let mapStateToProps = function (state) {
    return {
        state
    }
}
let mapDispatchToProps = function (dispatch) {
    return {
      loginout(){
          dispatch({type:'logout'})
      }
    }
}

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home;