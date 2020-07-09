import React from "react";
import { Form, Input, Button, Modal } from "antd";

import Photo from './Photo.js';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);     
        this.state = { visible: false };  
      }

    showModal = () => {
    this.setState({
        visible: true,
    });
    };

    handleOk = e => {       
    this.setState({
        visible: false,
    });
    };

    handleCancel = e => {    
    this.setState({
        visible: false,
    });
    };

    render(){  
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
        
        return(  
            <div>
                <Button onClick={this.showModal}
                        style={{
                            height: 50,
                            width: "30%",
                            fontWeight: "bold",
                            backgroundColor: 'rgba(99,37,201,1)',
                            borderColor: 'transparent'
                        }}
                        
                        type="primary"
                        htmlType="submit"
                        >
                        Profile
                </Button>

                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}  > 
                    <Form>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="First Name" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="Last Name" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="City" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="Country" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="Email" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="Linked In Profile" />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ height: 50 }} placeholder="Business Website" />
                        </Form.Item>
                        <Form.Item>
                            <Photo />
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button
                                style={{
                                    height: 50,
                                    width: "100%",
                                    fontWeight: "bold",
                                    backgroundColor: 'rgba(99,37,201,1)',
                                    borderColor: 'transparent'
                                }}
                                
                                type="primary"
                                htmlType="submit"
                            >
                                Update Profile
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            
        )
                   
    }
}

export default (ProfileForm);