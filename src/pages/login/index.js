import React, {Component} from 'react';
import { Layout, Icon , Input, Button, Checkbox,Form } from 'antd';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
const { Header, Footer, Sider, Content } = Layout;
import './style/login.css';


class Login extends Component{
    state = {
        tabs:[
                { title: '卷皮快捷登录' },
                { title: '手机快捷登录' },
        ],
        code: '',
        Codeflag: false,
        phoneFlag: false,
        // userFlag:false
            }

    handleSubmit = e => {
        e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('验证成功', values);
        //     } else {
        //         console.log('验证失败');
        //     }
        // });
        // console.log(this.props.form);
        let form = this.props.form;
        // let values = form.getFieldsValue();
        // console.log(values);
        let username = form.getFieldValue('username');
        let password = form.getFieldValue('password');
        console.log(username);        
        console.log(password);
    }

    handleSubmit1 = e => {
        if (this.state.phoneFlag) {
            e.preventDefault();
            let form = this.props.form;
            let phone = form.getFieldValue('phone');
            let code = form.getFieldValue('code');
            console.log('手机号码: ',phone);
            console.log('验证码: ',code);
        } else {
            alert('请按输入正确的资料')
        }
        // console.log(this.props.form);
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         console.log('验证成功', values);
        //     } else {
        //         console.log('验证失败');
        //     }
        // });        
    }

    validatorPwd = (rule, value, callback) => {
        // console.log(rule);
        // console.log(value);
        // console.log(callback);  
        value = value.trim();
        if (!value) {
            callback('请输入密码');
        } else if (value.length < 6) {
            callback('密码不能少于6位');
        } else if (value.length > 10) {
            callback('密码不能多于10位');
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须为英文字母大小写与数字组成');
        } else {
            callback();
        }
    }

    validatorPhone = (rule, value, callback) => {
        value = value.trim();
        if (!value) {
            callback('请输入手机号码');
        } else if (value.length < 11 || value.length > 11) {
            callback('手机号码必须为11位数字');
        } else if (!/^1[3-9]\d{9}$/.test(value)) {
            callback('请输入正确的手机号码');
        } else {
            console.log('验证成功',value);
            this.setState({
                Codeflag: true
            });
            callback();
        }
    }

    getCode = () => {
        // console.log(this.state.flag);
        if (this.state.Codeflag) {
            let num = String(parseInt(Math.random()*(10000-1000)+1000));
            console.log(num);
            this.setState({
                code: num
            })
        } 
    }
    

    validatorCode = (rule, value, callback) => {
        value = value.trim();
        console.log(this.state.code);
        console.log(value);
        
        if (!value) {
            callback('请输入验证码')
        } else if (!value === this.state.code) {
            callback('请输入正确的验证码')
        } else if (value === this.state.code) {
            console.log('验证成功');
            this.setState({
                phoneFlag:true
            })
            callback()
        }
    }

    goTo = () => {
    // console.log(this.props);
    this.props.history.push('/reg')
    }

    goBack = () => {
    // console.log(this.props);
        this.props.history.go(-1)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <Layout>
                    <Header style={{ background: 'linear-gradient(150deg,#ff5a61 50%,#fd631c)', maxHeight: 50, padding: 0, color: '#fff', fontSize: 20 }}>
                        <div className='loginHeader'>
                            <span className='back' onClick={this.goBack}><Icon type="arrow-left" /></span>
                            <span>登 录</span>
                            <span className='reg' onClick={this.goTo}>注 册</span>
                        </div>
                    </Header>
                    <Content>
                        <div>
                            <Tabs
                                className='tabT'
                                tabs={this.state.tabs}
                                 tabBarActiveTextColor='red'
                                initialPage={0}
                                // tabBarUnderlineStyle={{width:100,marginLeft:25}}
                                // onChange={() => { console.log('onChange'); }}
                                // onTabClick={() => { console.log('onTabClick'); }}
                            >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Form.Item>
                                            {getFieldDecorator('username', {
                                            initialValue:'',
                                            rules: [{ required: true, whiteSpace:true, message: '请输入用户名' },
                                                    { min: 6, message: '用户名不能少于6位' },
                                                    { max: 12, message: '用户名不能大于12位' },
                                                    { pattern: /^[a-zA-Z0-9]+$/, message: '用户名必须为英文字母大小写与数字组成' }
                                                    ]
                                        })(
                                            <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="用户名"
                                            />
                                        )}
                                    </Form.Item>
                                        
                                    <Form.Item>
                                            {getFieldDecorator('password', {
                                            initialValue:'',
                                            rules: [{ validator : this.validatorPwd}]
                                        })(
                                            <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="密码"
                                            />
                                        )}
                                    </Form.Item>
                                        
                                    <Form.Item>
                                    <Button type="danger" htmlType="submit" className="login-form-button">
                                       登 录
                                    </Button>
                                    </Form.Item>
                                </Form>
                                    
                                </div>
                                

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                                <Form onSubmit={this.handleSubmit1} className="login-form">
                                    <Form.Item>
                                            {getFieldDecorator('phone', {
                                            initialValue:'',
                                            rules: [{ validator : this.validatorPhone}]

                                        })(
                                            <Input
                                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="请输入手机号码"
                                            />
                                        )}
                                    </Form.Item>
                                        
                                    <Form.Item>
                                            {getFieldDecorator('code', {
                                            initialValue:'',
                                            rules: [{ validator : this.validatorCode}]
                                            })(
                                                <div>
                                                    <Input style={{width:'50%',marginRight:'10%'}}/><span style={{width:'50%', color:this.state.Codeflag ? 'red' : ''}} onClick={this.getCode}>获取验证码</span>   
                                                </div>
                                            )}
                                    </Form.Item>
                                        
                                    <Form.Item>
                                    <Button type="danger" className="login-form-button" onClick={this.handleSubmit1}>
                                       登 录
                                    </Button>
                                    </Form.Item>
                                </Form>
                                    {/* <div>
                                        <Input placeholder='请输入手机号码' style={{ width: '80%', marginTop: '5%', marginBottom: '5%' ,marginRight:'50%'}} />
                                    </div>
                                    <div>
                                        <Input style={{ width: '80%' }} />
                                    </div> */}
                                </div>
                            </Tabs>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
};
const WrappedLoginForm = Form.create()(Login);


export default WrappedLoginForm;