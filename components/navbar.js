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
                
                
                
            </Menu.Item>
            
            </Menu>
        )
    }
}

export default Navbar;