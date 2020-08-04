import React from "react";
import axios from 'axios';
import { Form, Input, Button, Modal, Tooltip} from "antd";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const  url =  'https://api.cloudinary.com/v1_1/dqvbgvuoe/image/upload'
const preset = 'imagesamerik'

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);     
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
       
        this.state = {
             visible: true,
             disabled: false,
             formFields: {
                firstName: "",
                lastName: "",
                city: "",
                country: "",
                phoneNumber: "",
                email: "",
                linkedinAddress: "",
                businessWebsite: "",
                imageUrl: "",
                publicId: "", 
             }
           
            };  
      }

    handleChangeFile = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', preset);

    try {
        const res = await axios.post(url, formData);
        console.log("cargue imagen en claudinary", res)   
        
        this.setState({
            formFields: { ...this.state.formFields, imageUrl: res.data.secure_url }
        })
        this.setState({
            formFields: { ...this.state.formFields, publicId: res.data.public_id }
        })
    } catch (err) {
        console.error(err);
    }     
    }; 
   
    handleChange(e) {
    const { name, value } = e.target
    this.setState({
        formFields: { ...this.state.formFields, [name]: value }
    })
    }

    handleSubmit = async (e) => {
    e.preventDefault()
    const values = JSON.stringify(this.state.formFields)
    console.log("Formulario: ", this.state.formFields)
    
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
        
        const { firstName,
                lastName, 
                city, 
                country, 
                phoneNumber, 
                email, 
                linkedinAddress, 
                businessWebsite,
                imageUrl,
                publicId,
                file,
                value} = this.state.formFields
        
        return(  
            
            <div>
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

                    <Form 
                        onSubmit={this.handleSubmit}
                        >

                        <Form.Item label='First Name' style={widthStyle}>
                            <Input type="text" name="firstName"  placeholder="First Name" value={firstName} onChange={this.handleChange} />
                        </Form.Item>
                                                
                        <Form.Item label='Last Name' style={widthStyle}>
                            <Input  type="text" name="lastName"  placeholder="Last Name" value={lastName} onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item label='City' style={widthStyle}>
                            <Input  type="text" name="city"  placeholder="City" value={city} onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item label='Country' style={widthStyle}>
                            <Input  name="country" placeholder="Country" value={country} onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item label='Phone Number' style={widthStyle}>
                            <Input name="phoneNumber"  placeholder="Phone Number" value={phoneNumber} onChange={this.handleChange} />
                        </Form.Item>
                        <Form.Item label='Email' style={widthStyle}>
                            <Input name="email"  placeholder="Email" value={email} onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item label='Linked In Address' style={widthStyle}>
                            <Input name="linkedinAddress"  placeholder="Linked In Address" value={linkedinAddress} onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item label='Business Website' style={widthStyle}>
                            <Input name="businessWebsite"  placeholder="Business Website" value={businessWebsite} onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item label='Profile Image' style={widthStyle}>
                            <Input type="file" name="file"  onChange={this.handleChangeFile}/>
                        </Form.Item>
                        <Form.Item style={widthStyle}>
                            <a href={this.state.formFields.imageUrl} target="_blank" >URL Image</a>
                        </Form.Item>
                        <Form.Item style={widthStyle}>
                            <Image cloudName="dqvbgvuoe" publicId={publicId} width="100" crop="scale" />
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
//export default qlgraph(queries.mutation.updateProfile)(ProfileForm);