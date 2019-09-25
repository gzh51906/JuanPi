import React, { Component } from 'react'
import { Form, Input, Button,Row,Col } from 'antd'
import { relative } from 'path';



class Login extends Component {
    render() {
        return (
            <div style={{width:"100%",height:"100%", background: "#b3c0d1"}} >

                <Row type="flex" justify="center" align='middle' style={{height:"100%"}}>
                    <Col span={12} style={{padding:"50px 30px",minWidth:"350px",borderRadius:"3px"}}>
             
                    <Row type="flex" justify="center" style={{fontSize:"30px",marginBottom:"20px",color:"#ffffff"}}>卷皮后台管理系统</Row>
                        <Form layout="horizontal">
                            <Form.Item label="用户名" labelCol={{ span: 5 }} wrapperCol={{ span: 14 }}>
                                <Input placeholder="请输入账号" />
                            </Form.Item>
                            <Form.Item label="密码" labelCol={{ span: 5 }} wrapperCol={{ span: 14 }}>
                                <Input placeholder="请输入密码" />
                            </Form.Item>
                            <Form.Item  wrapperCol={{ span: 14, offset: 8 }}>                   
                                <Button type="primary" >登录</Button>                        
                            </Form.Item>
                        </Form>
                       
                    </Col>

                </Row>

            </div>

        )
    }
}



export default Login;