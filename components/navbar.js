import React from 'react';
import { Form, Input, Button, Menu } from "antd";
import "antd/dist/antd.css";
import { MailOutlined , LockOutlined } from '@ant-design/icons';

import './css/app.css';

class Navbar extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <Menu theme="dark" mode="horizontal">
            <Menu.Item>OZONE UNIVERSE</Menu.Item>
            <Menu.Item className={'form-inline-login'} style={{ float:'right' }}>
                
                <Form name="horizontal_login" layout="inline" style={{display: 'inline-flex'}}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                        {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            
                        >
                            Log in
                        </Button>
                        )}
                    </Form.Item>
                    </Form>
                
            </Menu.Item>
            
            </Menu>
        )
    }
}

export default Navbar;