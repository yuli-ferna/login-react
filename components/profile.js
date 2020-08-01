import React from "react";
import { Form, Input, Button, Modal, Icon } from "antd";
import Photo from './Photo.js';
//import {graphql} from 'react-apollo';
//import queries from '../utils/queries.js'

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);     
        this.handleChange = this.handleChange.bind(this);
        this.state = {
             visible: true,
             formFields: {
                firstName: "",
                lastName: "",
                city: "",
                country: "",
                phoneNumber: "",
                email: "",
                linkedinAddress: "",
                businessWebsite: "",

             }
           
            };  
      }

      getData(){
        this.setState({ formFields: {firstName: "America" } })
        this.setState({ formFields: {lastName: "Munoz" } })
        this.setState({ formFields: {city: "Caracas" } })
        this.setState({ formFields: {country: "Venezuela" } })
        this.setState({ formFields: {email: "amerik0904@gmail.com" }  })
        console.log("componentDidMount ", this.state.formFields)
      }
      componentDidMount(){
        this.getData()
      }
      
      handleSubmit = async (e) => {
        e.preventDefault()
        const values = JSON.stringify(this.state.formFields)
        console.log("Formulario: ", this.state.formFields)
        
       /* const response = await this.mutation({
            variables: this.state.formFields
        })
        console.log("Grapql response: ", response)*/
      }

     handleChange(e) {
        const { name, value } = e.target
        this.setState({
            formFields: { ...this.state.formFields, [name]: value }
        })
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
                businessWebsite } = this.state.formFields

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

                    <Form onSubmit={this.handleSubmit}>
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
//export default qlgraph(queries.mutation.updateProfile)(ProfileForm);