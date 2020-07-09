import React from 'react';

import { Form, Icon, Input, Button, Row, Col, Alert, Layout, Menu, message, Card } from "antd";

import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import ReactPlayer from 'react-player';
import classnames from "classnames";
import Navbar from "./navbar.js";
import { HashLink as Link } from 'react-router-hash-link';

import RegistrationForm from "./register.js";
import ProfileForm from "./profile.js";
import ProfilePng from "./profilePng.js";

import styles from "./formCard.js";
// import Logos from "./Logos.js";
import { withStyles, makeStyles } from "@material-ui/styles";

import './css/app.css';
const { Header, Content, Footer } = Layout;

class Login extends React.Component {
    render() {
        // const { getFieldDecorator } = classes.form;
        const liClasses = 'login-form root form';
        const { classes } = this.props;
        return (
            <Layout 
                // className='textAldrich' 
                style={{
                height: "100vh",
                // backgroundImage: "url(" + "https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/space.jpg" + ")",
                background: 'radial-gradient(circle, rgba(43,16,97,1) 0%, rgba(99,37,201,1) 100%)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                overflow: 'auto'
                }}>
                <Header
                className={'header-login'}>
                    {/* Navbar */}
                    <Menu theme="dark" mode="horizontal" >
                    <Menu.Item style={{backgroundColor: 'transparent'}}>
                        <div style={{ display: 'flex', alignItems: 'center', lineHeight: '64px'}}>
                            <img src="https://s3.amazonaws.com/assets-test-o-zone/assets/img/logo.png" style={{width: 35, margin: 'auto', marginRight: '10px'}}></img>
                        <div>
                        <p className='textAldrich' style={{margin: 'auto'}}>
                            OZONE UNIVERSE
                        </p>
                        </div>
                        
                        </div>
                        
                        
                    </Menu.Item>
                    <Menu.Item className={'form-inline-login'} style={{ float:'right', backgroundColor: 'transparent', height: 64 }}>
                        {/* Login <700px */}
                        <Row>
                        <Col span={24} xs={0} sm={0} md={0} lg={0} xl={24} xxl={24}> 
                        <Form
                            layout="inline" 
                            // onSubmit={props.handleSubmit}
                            className={classnames(
                            "login-form",
                            // classes.root,
                            classes.formMenuItem
                            )}
                            // onFocus={props.clearGlobalErrors}
                        >  
                            <Form.Item>
                            {/* {getFieldDecorator("email", {
                                rules: [
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail"
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail"
                                }
                                ]
                            })( */}
                                <Input
                                className={classes.inputNavbar}
                                prefix={
                                    <Icon
                                    type="user"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Email"
                                // onChange={props.changeValues}
                                />
                            {/* )} */}
                            </Form.Item>
                            <Form.Item>
                            {/* {getFieldDecorator("password", {
                                rules: [
                                {
                                    required: true,
                                    message: "Please input your Password"
                                }
                                ]
                            })( */}
                                <Input
                                className={classes.inputNavbar}
                                prefix={
                                    <Icon
                                    type="lock"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                                // onChange={props.changeValues}
                                />
                            {/* )} */}
                            </Form.Item>
                            <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                // loading={props.state.loading}
                                className={classnames(
                                classes.actionButton,
                                "login-form-button",
                                classes.inputNavbar,
                                'textAldrich'
                                )}
                            >
                                Log in
                            </Button>
                            </Form.Item>
                            <Form.Item 
                            // className={classes.lastRow}
                            >
                            {/* <span className={classes.leftSubAction}>
                                <Link to="/register">Register</Link>
                            </span> */}
    
                            <span className={classes.rightSubAction}>
                                {/* <Link to="/recover-password"></Link> */}
                                Forgot password
                            </span>
                            </Form.Item>
                            {/* {displayError && (
                            // <Form.Item>
                                <Alert message={displayError} type="error" style={{marginTop: '10px', zIndex: 1, textAlign: 'center'}} />
                            // </Form.Item>
                            )} */}
                        </Form>
                        
                        </Col>
    
                        </Row> 
                    </Menu.Item>
                    </Menu>
                    
                </Header>
                <Content >
    
                    {/* Content */}
                    {/* Login <700px */}
                    
                    <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                    gutter={[0, 20]}
                    // style={{ overflow:'auto' }}
                    >
                    <Col span={8} xs={20} sm={20} md={18} lg={14} xl={0} xxl={0}>
                    <Form
                    // onSubmit={props.handleSubmit}
                    className={classnames(
                        "login-form",
                        classes.root,
                        classes.form
                    )}
                    // onFocus={props.clearGlobalErrors}
                    >
                    <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle ant-form-item">
                        <img src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/OZ+logo.jpeg" style={{ height: "8em", width: "8em" }} />
                    </div>
                    {/* {displayError && (
                        <Form.Item>
                        <Alert message={displayError} type="error" />
                        </Form.Item>
                    )} */}
                    <Form.Item>
                        {/* {getFieldDecorator("email_responsive", {
                        rules: [
                            {
                            type: "email",
                            message: "The input is not valid E-mail"
                            },
                            {
                            required: true,
                            message: "Please input your E-mail"
                            }
                        ]
                        })( */}
                        <Input
                            className={classes.input}
                            prefix={
                            <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                            />
                            }
                            placeholder="Email"
                            // onChange={props.changeValues}
                        />
                        {/* )} */}
                    </Form.Item>
                    <Form.Item>
                        {/* {getFieldDecorator("password_responsive", {
                        rules: [
                            {
                            required: true,
                            message: "Please input your Password"
                            }
                        ]
                        })( */}
                        <Input
                            className={classes.input}
                            prefix={
                            <Icon
                                type="lock"
                                style={{ color: "rgba(0,0,0,.25)" }}
                            />
                            }
                            type="password"
                            placeholder="Password"
                            // onChange={props.changeValues}
                        />
                        {/* )} */}
                    </Form.Item>
                    <Form.Item>
                        <Button
                        type="primary"
                        htmlType="submit"
                        // loading={props.state.loading}
                        className={classnames(
                            classes.actionButton,
                            "login-form-button",
                            classes.input,
                            classes.formButton,
                            'textAldrich'
                        )}
                        >
                        Log in
                        </Button>
                    </Form.Item>
                    <Form.Item className={classes.lastRow}>
                        <span className={classes.leftSubAction}>
                        {/* <Link to="/register">Register</Link> */}
                        {/* <Link smooth to="/login#register-form"></Link> */}
                        Register
                        </span>
    
                        <span className={classes.rightSubAction}>
                        {/* <Link to="/recover-password"></Link> */}
                        Forgot password
                        </span>
                    </Form.Item>
                    </Form>
                
                    </Col>
                    </Row>
                    
                    {/* Content */}
                    <Row
                    type="flex"
                    justify="space-around"
                    // align="middle"
                    gutter={[0, 0]}
                    >
                    <Col span={8} xs={24} sm={24} md={24} lg={20} xl={14} xxl={14}
                    style={{textAlign: 'center', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'}}>
                    <div className={classes.messageChrome}>
                    <Row
                    type="flex"
                    justify="space-around"
                    align="middle"
                    >
                        <Col span={18} xs={14} sm={14} md={18} lg={17} xl={17} xxl={18}
                        style={{display: 'flex',
                        flexFlow: 'row wrap',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <h3 className={classes.messageChromeText}> USE LATEST CHROME BROWSER <a href="https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en" target="_blank" className={classes.messageChromeLink}>(UPDATE HERE)</a> OR OCULUS QUEST NATIVE BROWSER  
                        </h3>  
                        <div>
                        <img style={{width: 30}} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/chrome-icon.png" />
                        
                        <img style={{width: 30, marginLeft: 10}} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/oculus-icon.png" />
                        </div>
                        </Col>
                        <Col span={6} xs={9} sm={6} md={6} lg={7} xl={7} xxl={6}>
                        <Button type="primary" href="https://assets-test-o-zone.s3.amazonaws.com/assets/legaldocs/System+requirements.pdf" target="_blank"
                        className={classnames(classes.messageChromeButton, classes.formButton)}
                        style={{padding: 5}}>System requirements</Button>
                        </Col>
                    </Row>
                    </div>
                    <img className={classes.photo} src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/login+screen.png" />
    
                    <div className={classes.buttonsContainer}>
                        <Button type="primary" size={'large'} className={classnames(classes.contentButton, 'textAldrich')} href="https://support358346.typeform.com/to/iLp9iR" target="_blank"> Schedule demo </Button>
                        <Button type="primary" size={'large'} className={classnames(classes.contentButton, 'textAldrich')} href="https://support358346.typeform.com/to/iLp9iR" target="_blank"> Order form </Button>
                        <Button type="primary" size={'large'} className={classnames(classes.contentButton, 'textAldrich')} href="https://assets-test-o-zone.s3.amazonaws.com/assets/legaldocs/OZONE+UNIVERSE+CATALOG+AND+PRICING.pdf" target="_blank"> Intro, products and pricing (PDF) </Button>
    
                    </div>
                        
                    </Col>
    
                    <Col span={8} xs={20} sm={20} md={20} lg={20} xl={8} xxl={8}
                    className={classes.form}
                    style={{ marginTop: 40, paddingBottom: 0 }}
                    id="register-form"
                    >
    
                        <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle ant-form-item">
                        <img src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/OZ+logo.jpeg" style={{ height: "8em", width: "8em" }} />
                        </div>
                        <Row
                        type="flex"
                        justify="space-around"
                        align="middle"
                        gutter={[5, 5]}
                        style={{ marginBottom: 10 }}>
                        <Col span={24} style={{textAlign: 'center'}}>
                            <h1 className='textAldrich'>Create Your Free Account Now!</h1>
                        </Col>
                        {/* <Col span={7} xs={20} sm={20} md={20} lg={20} xl={20} xxl={8}>
                            <Button type="primary" size={'large'} className={classes.formButton}> Schedule demo </Button>
                        </Col>
                        <Col span={7} xs={20} sm={20} md={20} lg={20} xl={20} xxl={8}>
                            <Button type="primary" size={'large'} className={classes.formButton}> Order form </Button>
                        </Col> */}
                        </Row>
    
                        
                        <ProfileForm/>
                    </Col>
                    </Row>
                <Row
                type="flex"
                justify="space-around"
                align="bottom"
                className='logosContainer'
                style={{
                    // background: 'linear-gradient(0deg, rgba(240,248,255,0) 0%, rgba(212, 235, 255, 0.5) 20%, rgba(255,157,157,0) 100%)'
                }}>
    
                {/* <Logos/> */}
    
                </Row>
    
                </Content>
                </Layout>
        );
    }
}

export default withStyles(styles)(Login)