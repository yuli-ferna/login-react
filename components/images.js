import React from "react";
import axios from 'axios';
import html2canvas from 'html2canvas';
import { Form, Input, Button, Modal, Typography, message} from "antd";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const  url =  'https://api.cloudinary.com/v1_1/dqvbgvuoe/image/upload'
const preset = 'imagesamerik'
const { Text } = Typography;

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);     
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.state = {
        visible: true,
        formWasTouched: false,
        firstName: "",
        lastName: "",
        formFields: {
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
          this.setState({
              formFields: { ...this.state.formFields, imageUrl: res.data.secure_url }
          })
          this.setState({
              formFields: { ...this.state.formFields, publicId: res.data.public_id }
          })
          this.setState({formWasTouched: true})
      } catch (err) {
          console.error(err);
      }     
    }; 

    handleChange(e) {
      const { name, value } = e.target
      this.setState({
          formFields: { ...this.state.formFields, [name]: value }
      })
      this.setState({formWasTouched: true})
    }  

    printDocumentImg() {
      const input = document.getElementById('divToPrint');
      html2canvas(input, { allowTaint: true, useCORS: true })
        .then((canvas) => {
          const imgData = document.createElement('a')
          imgData.download = "capture.png";
        // Convert imagen to Base64
          imgData.href = canvas.toDataURL();
          imgData.click();
        });
    }

    handleSubmit = async (e) => {
      e.preventDefault()
      const values = JSON.stringify(this.state.formFields)
      console.log("Formulario: ", this.state.formFields)

      if (this.state.formWasTouched){
        message.info('Update successful')
      }
      this.props.close()
    }

    render(){ 
     
      const layout = {
        labelCol: { span: 6},
        wrapperCol: { span: 18 },
      };

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
          marginTop: -100
      };
      const alignTitle = {
        textAlign: 'center'
      };

      const { 
        city, 
        country, 
        phoneNumber, 
        email, 
        linkedinAddress, 
        businessWebsite,
        imageUrl,
        publicId,
        } = this.state.formFields
      
        return(
        <div>
            <Modal
              visible={this.state.visible}
              onCancel={this.props.close}
              footer={null}
              className='textAldrich'
              style={topModel}
            >
                <Form 
                    {...layout}
                    onSubmit={this.handleSubmit}>

                    <div>
                      <Form.Item style={alignTitle}>
                        <Text strong>MY PROFILE</Text>
                      </Form.Item>
                      <Form.Item size="small" label='Name' style={widthStyle} >
                      <Input size="small" name="name"  placeholder="Name" disabled= {true}/>
                      </Form.Item>
                      <Form.Item size="small" label='City' style={widthStyle} >
                          <Input size="small" name="city"  placeholder="City" value={city} onChange={this.handleChange}/>
                      </Form.Item>
                      <Form.Item size="small" label='Country' style={widthStyle}>
                          <Input size="small" name="country" placeholder="Country" value={country} onChange={this.handleChange}/>
                      </Form.Item>
                      <Form.Item size="small" label='Phone Number' style={widthStyle}>
                          <Input size="small" name="phoneNumber"  placeholder="Phone Number" value={phoneNumber} onChange={this.handleChange} />
                      </Form.Item>
                      <Form.Item size="small" label='Profile Image'  style={widthStyle}>
                          <Input type="file" name="file"  onChange={this.handleChangeFile}/>
                          <a href={imageUrl} target="_blank" >URL Image</a>
                      </Form.Item>
                    </div>
                    
                    <div id="divToPrint" > 
                      <Form.Item style={alignTitle}>
                        <Text strong >MY CARD</Text>
                      </Form.Item>
                      <Form.Item label="Photo:  " style={widthStyle}>
                          <Image cloudName="dqvbgvuoe" publicId={publicId} width="100" crop="scale" />
                      </Form.Item>
                      <Form.Item label="Name" style={widthStyle}>
                        <Input size="small" size="small" placeholder="Name for my card" />
                      </Form.Item>
                      <Form.Item size="small" label='Email' style={widthStyle}>
                          <Input size="small" name="email"  placeholder="Email" value={email} onChange={this.handleChange}/>
                      </Form.Item>
                      <Form.Item size="small" label='Linked' style={widthStyle}>
                          <Input size="small" name="linkedinAddress"  placeholder="Linked In Address" value={linkedinAddress} onChange={this.handleChange}/>
                      </Form.Item>
                      <Form.Item label='Website' style={widthStyle}>
                          <Input size="small" name="businessWebsite"  placeholder="Business Website" value={businessWebsite} onChange={this.handleChange}/>
                      </Form.Item>
                    </div>

                    <Form.Item>
                      <Button onClick={this.printDocumentImg}
                        style={{
                          height: 30, 
                          backgroundColor: 'rgba(99,37,201,1)',
                          borderColor: 'transparent' ,
                          fontSize: '12px',
                          color: "rgba(255,255,255)"              
                          }}
                          className={'textAldrich'}
                          type="primary"
                            >Get my card
                      </Button>
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

    } // close render



} // close class ProfileCard

export default (ProfileCard);