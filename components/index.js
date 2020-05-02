import React from 'react';
import { Form, Input, Button, Row, Col, Menu, Layout } from "antd";
import Icon from 'antd/lib/icon';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { classnames } from "classnames";
import classes from "./extra";
import { MailOutlined , LockOutlined } from '@ant-design/icons';

import './css/app.css';

const { SubMenu } = Menu;

var classNames = require('classnames');
class Root extends React.Component {
    render() {
        const { getFieldDecorator } = classes.form;
        const liClasses = 'login-form root form';
        return (
            <Layout style={{
                height: "100vh",
                backgroundImage: "url(" + "https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/space.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
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
                {/* <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                    gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
                    style={{ overflow: 'auto' }}
                >
                    <Col span={8} xs={20} sm={16} md={12} lg={10} xl={8} xxl={6}>
                        <Form
                            className={liClasses} 
                        >
                            <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle ant-form-item">
                                <img src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/OZ+logo.jpeg" style={{ height: "10em", width: "10em" }} />
                            </div>
                            <Form.Item>

                                <Input
                                    className={'input'}
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Email"
                                />

                            </Form.Item>
                            <Form.Item>

                                <Input
                                    className={'input'}
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />

                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button actionButton input"
                                    
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                            <Form.Item className={'lastRow'}>
                                <span className={'leftSubAction'}>
                                    <Link to="/register">
                                    </Link> 
                                    Register
                                </span>

                                <span className={'rightSubAction'}>
                                   <Link to="/recover-password">
                                    </Link>
                                    Forgot password
                                </span>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row> */}
            </Layout>
        )
    }
}
let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);