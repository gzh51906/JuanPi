import React from 'react'
import { Form, Input, Icon, Button, Upload, message } from 'antd'
import axios from "axios"
import Api from '../api'


class Listmodule extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toupload = this.toupload.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields( async (err, values) => {
      if (!err) {
       if(this.refs.loadurl.files[0]){
        let { title, middletitle } = values;
       
        let mydata = new FormData();
        mydata.set("goods", this.refs.loadurl.files[0])
        let { data } = await axios.post('http://localhost:3003/tupian/goods', mydata)
        if (data) {              
                let { filename } = data[0];
            this.setState({
              imgurl:filename
            })
                let rus= await Api.addgood('/listnav',{
                  title,
                  middletitle,
                  imgurl:filename
                })

              if(rus.code==1){
                message.success(`商品添加成功`);             
                
              }                             
              }
       }else{
         alert('请上传图片')
       }

      } else {


      }
    });
  };
  async toupload(){
    let mydata = new FormData();
        mydata.set("goods", this.refs.loadurl.files[0])
     
        let { data } = await axios.post('http://localhost:3003/tupian/goods', mydata)
        if (data) {
                message.success(`上传成功`);
                let { filename } = data[0];
                this.setState({
                  imgurl:filename
                })
  
              }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
  
    return (
      <Form id="addfenlei" onSubmit={this.handleSubmit}>
        <Form.Item label="title" >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input title!' }],
          })(
            <Input

              placeholder="title"
            />,
          )}
        </Form.Item>
        <Form.Item label="middletitle" >
          {getFieldDecorator('middletitle', {
            rules: [{ required: true, message: 'Please input middletitle!' }],
          })(
            <Input
              placeholder="middletitle"
            />,
          )}
        </Form.Item>
        <Form.Item label="imgurl" >
         
            <input type="file" ref="loadurl"/>
         
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          添加
          </Button>
      </Form>
    )
  }
}




export default Listmodule;