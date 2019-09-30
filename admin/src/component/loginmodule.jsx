import React from 'react'
import { Form, Input, Icon, Button } from 'antd';
import Api from '@/api'
import {connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class Loginmodule extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)

    }
 handleSubmit(e) {
        e.preventDefault();
        let {gotologin} = this.props
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
               
                let {username ,password} = values
                password=password.replace(/\s+/g,""); 
                username=username.replace(/\s+/g,"");
                let loginres = await Api.reguser('/login',{
                  zhanghao:username,
                  password
                })


                if(loginres.msg=='success'){
             
                    //如果正确，跳转home
                    gotologin(loginres.data.jpauthorization,loginres.data._id)
                     this.props.history.push('/home')              
                }else{
                    alert('用户名或密码错误')
                }
              
            }
        });
    }

    render() {
        let { getFieldDecorator } = this.props.form;
      return  (<Form onSubmit={this.handleSubmit} id="normal_login">
            <Form.Item label="用户名" labelCol={{ span: 5 }} wrapperCol={{ span: 14 }}>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '密码为12个字符!', pattern: /^[0-9]{12}$/ }],
                })(
                  
                    <Input placeholder="请输入账号" />
                )}
              
            </Form.Item>
            <Form.Item label="密码" labelCol={{ span: 5 }} wrapperCol={{ span: 14 }}>
               
                {getFieldDecorator('password', {
                    rules: [{ required: true,message: '密码为6-9个数字!', pattern: /^[0-9]{6,9}$/  }],
                })(
                    <Input type="password" placeholder="请输入密码" />
                )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 14, offset: 8 }}>
                <Button type="primary" htmlType="submit" >登录</Button>
            </Form.Item>
        </Form>
        )
    }
}


let mapStateToProps = function (state) {

    return {
      
      
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
     gotologin(authorization,id){
        dispatch({type:"login",authorization,id})
      }
    
    }

 
}
Loginmodule = connect(mapStateToProps, mapDispatchToProps)(Loginmodule)
Loginmodule=withRouter(Loginmodule)
export default Loginmodule;