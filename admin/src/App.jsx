import React, { Component } from 'react';
import { withRouter ,Route, Switch} from 'react-router-dom';
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import '@/css/index.css'


class App extends Component{
    render(){
        return (
            <div style={{width:"100%",height:"100%"}}>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    {/* 登陆页面 */}
                    <Route path='/' component={Login}></Route>
                
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>

                </Switch>
            </div>
        )
    }
}

App = withRouter(App);//返回一个新的组件 
export default App;