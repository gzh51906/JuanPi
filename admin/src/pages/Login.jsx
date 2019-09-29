import React, { Component } from 'react'
import { Form, Input, Button,Row,Col,Icon } from 'antd'
import Loginmodule from '@/component/loginmodule'


class Login extends Component {


    render() {
       
        return (
            <div style={{width:"100%",height:"100%", background: "#b3c0d1"}} >

                <Row type="flex" justify="center" align='middle' style={{height:"100%"}}>
                    <Col span={12} style={{padding:"50px 30px",minWidth:"350px",borderRadius:"3px"}}>
             
                    <Row type="flex" justify="center" style={{fontSize:"30px",marginBottom:"20px",color:"#ffffff"}}>卷皮后台管理系统</Row>
                     <WLoginmodule></WLoginmodule>
                       
                    </Col>

                </Row>

            </div>

        )
    }
}


const WLoginmodule = Form.create({ name: 'normal_login' })(Loginmodule);
// const WrapListForm = Form.create({ name: 'addfenlei' })(Listmodule);
export default Login;