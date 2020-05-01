import React from 'react';
import { Form, Icon, Input, Button, Row, Col, Alert, Layout } from "antd";
import ReactDOM from 'react-dom';
import { classnames } from "classnames";

class Root extends React.Component {
    render() {
        return (
        <Layout style={{
            height: "100vh",
            backgroundImage: "url(" + "https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/space.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}>

            <Row
                type="flex"
                justify="space-around"
                align="middle"
                gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
                style={{ overflow:'auto' }}
            >
                <Col span={8} xs={20} sm={16} md={12} lg={10} xl={8} xxl={6}>
                <Form
                    className={
                    "login-form"
                    }
                >
                    <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle ant-form-item">
                    <img src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/OZ+logo.jpeg" style={{ height: "10em", width: "10em" }} />
                    </div>
                    <Form.Item>
                    {(
                        <Input
                        prefix={
                            <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                            />
                        }
                        placeholder="Email"
                        />
                    )}
                    </Form.Item>
                    <Form.Item>
                    {(
                        <Input
                        prefix={
                            <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                            />
                        }
                        type="password"
                        placeholder="Password"
                        />
                    )}
                    </Form.Item>
                    <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={
                        "login-form-button"
                        }
                    >
                        Log in
                    </Button>
                    </Form.Item>
                    <Form.Item >
                    <span >
                        Register
                    </span>

                    <span >
                        Forgot password
                    </span>
                    </Form.Item>
                </Form>
                </Col>
            </Row>
            </Layout>
        )
    }
}
let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);