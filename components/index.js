import React from 'react';
import { Layout, Row, Col, Card } from "antd";
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import classes from "./extra";
import ReactPlayer from 'react-player'
import Navbar from "./navbar.js";
import './css/app.css';

const { Header, Content, Footer } = Layout;
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
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden'
            }}>
                <Navbar />
                <Content>
                    <Row 
                    justify="space-around" 
                    align="middle" 
                    gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 10]}
                    style={{overflow:'auto'}}> 
                        <Col xs={22} sm={22} md={20} lg={20} xl={11} xxl={11}>
                            <a href="">
                                <img src={"../dist/assets/main_image.png"} style={{ width: "100%" }} />
                            </a>
                        
                        </Col>
                        <Col xs={22} sm={22} md={20} lg={20} xl={11} xxl={11}>
                        
                        </Col>
                    </Row>

                </Content>
                <Footer style={{background: 'transparent'}}>
                <Row 
                justify="space-around" 
                align="middle" 
                className={'logos'}> 
                    <Col>
                        <img src={"../dist/assets/AWS logo-compress.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/gitlab-logo-compress.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/GLTF-compress.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/google-logo-5.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/khronos-compress.jpg"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/react js logo-compress.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/stripe-payment-logo_1-compress.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/twilio-compress.png"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/virtual-world-society-logo-compress.jpg"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/W3C-Logo-compress.jpg"} />
                    </Col>
                    <Col>
                        <img src={"../dist/assets/webGL-compress.png"} />
                    </Col>
                </Row>
                </Footer>
            </Layout>
        )
    }
}
let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);