import React from 'react'
import { Form, Input, Icon, Button,Upload, message } from 'antd'
class Listmodule extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let { title, middle, imgurl } = values;

      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const props = {
      name: 'file',
      action:"http://localhost:3003/upload/goods",
      // action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
       
        if (info.file.status !== 'uploading') {
          console.log("jj",info.file, "jp",info.fileList);
          
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

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
        {/* <Form.Item label="imgurl" > */}
         <div>img:
         <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
                 </Button>
            </Upload>
         </div>
            
          
        {/* </Form.Item> */}


        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
      </Form>
    )
  }
}




export default Listmodule;