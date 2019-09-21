import React, { Component } from 'react';
import { Route, Redirect, Swith, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

import Cate from '~/cate'
import { Switch } from '../node_modules/antd';

class App extends Component{
    render() {
        return (
            <div>
                      
                    <Route path='/cate' component={Cate}></Route> 
                    test                         
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