import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {BackTop, Button} from 'antd-mobile';
import { TabBar } from 'antd-mobile';
import { Icon } from 'antd';
import Home from './pages/home';
import Reg from './pages/reg';
import Login from './pages/login';
import Mine from './pages/mine';
import Goods from './pages/goods';
import Cart from './pages/cart';
import List from './pages/list';
import SearchPage from './pages/home/components/searchPage'


import './App.css';
class App extends Component{





    render() {
        let div = <>
            <div>

                state = {
                current: 'home',
                menu: [{
                name: 'home',
                path: '/home',
                title: '首页',
                icon: 'bank'
            }, {
                name: 'list',
                path: '/list',
                title: '分类',
                icon: 'table'
            }, {
                name: 'cart',
                path: '/cart',
                title: '购物车',
                icon: 'shopping-cart'
            }, {
                name: 'mine',
                path: '/mine',
                title: '我的卷皮',
                icon: 'user'
            }]
            }
                render() {
                return (
                <div>
                <div style={{position: 'fixed', bottom: 0, width: '100%', zIndex: 2}}>
                <TabBar
                unselectedTintColor = "#000"
                tintColor = "red"
                barTintColor="#fff"
                tabBarPosition="bottom"
                >
                {
                    this.state.menu.map(item => {
                        return <TabBar.Item
                            key={item.path}
                            title={item.title}
                            icon={<Icon type={item.icon}/>}
                            onPress={() => {
                                this.props.history.push(item.path);
                                this.setState({current: item.name})
                            }}
                            selectedIcon={
                                <Icon type={item.icon} style={{color: 'red'}}/>
                            }
                            selected={
                                this.state.current === item.name
                            }


                        />
                    })
                }
                </TabBar>
                </div>

                <div>
                <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/reg' component={Reg}/>
                <Route path='/login' component={Login}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/goods/:id' component={Goods}/>
                <Route path='/mine' component={Mine} />
                <Route path='/list' component={List} />
                <Route path='/searchPage' component={SearchPage} />
                <Route path="/notfound" render={() => <div>404</div>} />
                <Redirect from='/' to='/home' exact/>
                <Redirect from='*' to='/notFound' />
                </Switch>
                </div>
                </div>
                )
            }
                };

                App = withRouter(App);

                let mapStateToProps = (state) => {
                return {}
            };

                let mapDispatchToProps = (dispatch) => {
                return {}
            };

                App = connect(mapStateToProps, mapDispatchToProps)(App);
                export default App;


