import React from "react";
import { Form, Input, Button, Alert, Modal } from "antd";
import {Link, Route, Router} from 'react-router';

import { Layout, Row } from "antd";
import ProfileForm from './profile.js';

const { Content } = Layout;

const styles = {
    form: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        background: "white",
        boxShadow:
        "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
        padding: 40,
        borderRadius: 4,
        // marginTop: 50
    }
};

class RegistrationForm extends React.Component {
   
    render() {
        // const { userCreated, showError, error } = this.state;
        // const { getFieldDecorator } = this.props.form;
        const { metaburn } = this.props;

        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0
            },
            sm: {
            span: 24,
            offset: 0
            }
        }
        };

        const heightInput = metaburn ? 40 : 50;


        return (
        <div>
            
            <Form
            // onSubmit={this.handleSubmit}
            // onFocus={this.clearGlobalErrors}
            >
            {/* {showError && (
                <Form.Item
                style={{ display: "flex", justifyContent: "center" }}
                >
                <Alert message={error || REQUEST_ERROR} type="error" />
                </Form.Item>
            )} */}
            <Form.Item>
                {/* {getFieldDecorator("firstName", {
                rules: [
                    {
                    // type: "text",
                    message: "The field cannot be blank"
                    },
                    {
                    required: true,
                    message: "Please enter your Username"
                    }
                ]
                })( */}
                <Input style={{ height: heightInput }} placeholder="Username" />
                {/* )} */}
            </Form.Item>
            <Form.Item>
                {/* {getFieldDecorator("lastName", {
                rules: [
                    {
                    // type: "string",
                    message: "The field cannot be blank"
                    },
                    {
                    required: true,
                    message: "Please enter your Real Name"
                    }
                ]
                })( */}
                <Input style={{ height: heightInput }} placeholder="Real Name" />
              {/*  )}*/}
            </Form.Item>
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
                <Input style={{ height: heightInput }} placeholder="E-Mail" />
                {/*)}*/}
            </Form.Item>
            <Form.Item hasFeedback>
                {/* {getFieldDecorator("password", {
                rules: [
                    {
                    required: true,
                    message: "Please input your password"
                    },
                    {
                    validator: this.validateToNextPassword
                    }
                ]
                })( */}
                <Input.Password
                    style={{ height: heightInput }}
                    placeholder="Password"
                />
                {/* )} */}
            </Form.Item>
            <Form.Item hasFeedback>
                {/* {getFieldDecorator("confirm", {
                rules: [
                    {
                    required: true,
                    message: "Please confirm your password"
                    },
                    {
                    validator: this.compareToFirstPassword
                    }
                ]
                })( */}
                <Input.Password
                    style={{ height: heightInput }}
                    onBlur={this.handleConfirmBlur}
                    placeholder="Confirm"
                />
                {/*})}*/}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button
                style={{
                    height: heightInput,
                    width: "100%",
                    fontWeight: "bold",
                    boxShadow: ' inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)',
                    borderRadius: '20px',
                    borderColor: 'transparent'
                  }}
                  className={'textAldrich'}
                // loading={this.state.loading}
                //type="primary"
                htmlType="submit"
                >
                Register
                </Button>
                
               
            </Form.Item>
            
            <Row>
                <span style={{ alignItems: "center" }}>
                {/* Already registered? <Link to="/login">Login</Link> */}
                </span>
            </Row>
            </Form>

        

        </div>
        );
    }
}

export default (RegistrationForm);
