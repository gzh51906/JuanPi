import React, { Component } from 'react'
import { Form, Input, Button,Row,Col } from 'antd'
import { relative } from 'path';
class Home extends Component {
    render() {
        return (
            <div style={{background:"yellow",width:"100%",height:"100%"}} >

                <Row type="flex" justify="center" align='middle' style={{height:"100%"}}>
                    <Col span={12}>
                        <Form layout="horizontal" >
                            <Form.Item label="Field A" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="Field B" labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item  wrapperCol={{ span: 14, offset: 4 }}>                   
                                <Button type="primary" >Submit</Button>                        
                            </Form.Item>
                        </Form>
                    </Col>

                </Row>

            </div>

        )
    }
}



export default Home;