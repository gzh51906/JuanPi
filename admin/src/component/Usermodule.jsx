import React from 'react'
import { Form, Input, Icon, Button, Dropdown, message ,Menu} from 'antd'
import axios from "axios"
import Api from '../api'
import { connect } from 'react-redux';

class Usermodule extends React.Component {
  constructor() {
    super();
    this.state = {
      ryvalue: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.haveZH = this.haveZH.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        //  reguser
        let {password,name} = values
        password=password.replace(/\s+/g,""); 
        name=name.replace(/\s+/g,"");
        let regx =/^[0-9]{12}$/;
 
        let vall = regx.test(Number(this.state.ryvalue));
        console.log('vay', vall,values);
        
        //检查账号是否存在 成功就没有
        if(vall){
          let checkuser =await Api.reguser('/check',{zhanghao:this.state.ryvalue}) 
           console.log('xx',checkuser);
           if(checkuser.msg=="success"){
            let adduser =await Api.reguser('/reg',{
              zhanghao:this.state.ryvalue,
              username:name,
              password,
              quanxian:this.props.quanxian
             
            }) 
            if(adduser.msg==='success'){
              message.success(`添加成功`); 
          }
        
           }
        }else{
          alert('请生成账号')
        }
       
        
        //不存在就注册

      }
    })
  }

  haveZH() {
    var date = new Date()
    let nian = date.getFullYear()
    let y = ("0" + (date.getMonth() + 1)).slice(-2)
    let r = date.getDate()
    let end = Math.floor((Math.random() * 1000) + 1000)
    let res = nian + y + r + end
    this.setState({
      ryvalue: res
    })

  }

  render() {
    const { getFieldDecorator } = this.props.form;
   
    return (
      <div>
     
        <Form id="adduser" onSubmit={this.handleSubmit}>
          <Form.Item label="用户名" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '用户名至少为2个字符!', pattern: /\S{2}/ }],
            })(
              <Input
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item label="账号" >

            <Input
              placeholder="账号"
              disabled
              value={this.state.ryvalue}
            />

            <Button type="primary" onClick={this.haveZH}>点击生成账号</Button>
          </Form.Item>
          <Form.Item label="密码" >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码为6-9个数字!', pattern: /[0-9]{6,9}/ }],
            })(
              <Input
                placeholder="密码"
              
              />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            添加
        </Button>
        </Form>
      </div>
    )
  }
}

let mapStateToProps = function (state) {
  let { quanxian } = state.reg;
  
  return {
     quanxian
    
  }
}

let mapDispatchToProps = function (dispatch) {
  return {
   
  
  }


}
Usermodule = connect(mapStateToProps, mapDispatchToProps)(Usermodule);

export default Usermodule;