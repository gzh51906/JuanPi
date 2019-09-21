import React, { Component } from 'react';
import { Route, Redirect, Swith, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {BackTop, Button} from 'antd-mobile';


class App extends Component{




    render() {
        return ( <div >



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
