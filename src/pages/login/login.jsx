import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less'
import logo from './images/02.jpg'
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {  };
      }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
        });
    }
    validatorPwd=(rule, value, callback)=>{
        if(!value){
            callback("密码必须输入")
        }
    }
    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, whitespace:true,message: '请输入用户名' },
                                { min: 4, message: '最少四位' },
                                { max: 12, message: '最多12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须为英文字母和_' },
                            ],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                        </Button>
                       
                        </Form.Item>
                    </Form> 
                    
                </section>
            </div>
         );
    }
}
const WrapLogin=Form.create()(Login)
export default WrapLogin
