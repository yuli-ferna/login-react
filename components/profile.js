import React from "react";
import { Form, Input, Button, Modal, Icon } from "antd";
import Photo from './Photo.js';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);     
        this.state = { visible: true };  
      }

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

        const widthStyle = {
            margin: 0
        };
        const topModel = {
            marginTop: -30
        };
        
        return(  
            
            <div  >
               
                <Modal
                    keyboard={false}
                    maskClosable={false}
                    visible={this.state.visible}
                    onCancel={this.props.close}
                    destroyOnClose={true}
                    footer={null}
                    className='textAldrich'
                    style={topModel}
                     > 

                    <Form>
                        <Form.Item label='First Name' style={widthStyle}>
                            <Input name="firstName"  placeholder="First Name"  />
                        </Form.Item>
                                                
                        <Form.Item label='Last Name' style={widthStyle}>
                            <Input  name="lastName"  placeholder="Last Name" />
                        </Form.Item>
                        <Form.Item label='City' style={widthStyle}>
                            <Input  name="city"  placeholder="City" />
                        </Form.Item>
                        <Form.Item label='Country' style={widthStyle}>
                            <Input  name="country" placeholder="Country" />
                        </Form.Item>
                        <Form.Item label='Phone Number' style={widthStyle}>
                            <Input name="phoneNumber"  placeholder="Phone Number" />
                        </Form.Item>
                        <Form.Item label='Email' style={widthStyle}>
                            <Input name="email"  placeholder="Email" />
                        </Form.Item>
                        <Form.Item label='Linked In Profile' style={widthStyle}>
                            <Input name="linkedinAddress"  placeholder="Linked In Profile" />
                        </Form.Item>
                        <Form.Item label='Business Website' style={widthStyle}>
                            <Input name="businessWebsite"  placeholder="Business Website" />
                        </Form.Item>

                        <Form.Item>
                            <Photo />
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button
                                style={{
                                    height: 40,
                                    width: "100%",
                                    fontWeight: "bold",
                                    backgroundColor: 'rgba(99,37,201,1)',
                                    borderColor: 'transparent'
                                }}
                                
                                type="primary"
                                htmlType="submit"
                                className='textAldrich'
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