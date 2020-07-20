import React from "react";
import { Form, Input, Button, Modal, Icon } from "antd";
import Photo from './Photo.js';
import Photo02 from './photo02.js';



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

    handleCancel = () => {
        this.setState({ visible: false });
      };

    handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
        this.setState({ loading: false, visible: false });
    }, 3000);
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

        const widthStyle = {
            margin: 0
        };
        const topModel = {
            marginTop: -30
        };
        
        return(  
            
            <div  >
                
                <Button onClick={this.showModal}
                        style={{
                            height: 50,
                            // width: "20%",
                            fontWeight: "bold",
                            backgroundColor: 'rgba(99,37,201,1)',
                            borderColor: 'transparent'
                        }}
                        
                        type="primary"
                        htmlType="submit"
                        className='textAldrich'
                        >
                        <Icon type="menu" style={{ fontSize: '26px' }}/>
                </Button>

                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    className='textAldrich'
                    style={topModel}
                     > 

                    <Form >
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