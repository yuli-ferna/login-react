import React from "react";
import html2canvas from 'html2canvas';
import { Card, Avatar, Layout, Modal} from 'antd';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const cloudname = 'dqvbgvuoe'
const publicid = 'imagesamerik/ypgjl3r7makze9mv6oh4'

class ProfilePng extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true};  
  }

  
  handleCancel = () => {
   this.setState({ visible: false});
 
  };

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

  render(){
    const topModel = {
      marginTop: -30
    };
          
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
       
            <div id="divToPrint" > 
                <div>
                  <Card title="MY CARD INFO"  style={{ width: 400, margin: 20}}>
                  
                    <Layout>
                      
                        <Header>
                            <p style={{ color: "rgba(255,255,255)" }}
                            >First and Last Name:</p>   
                        </Header>
                        
                        <Layout> 
                          <Content>
                            <Image cloudName={cloudname} publicId={publicid}
                            style={{ height: "8em", width: "8em" }} />
                            <br></br>
                            <br></br>
                            <p >Email:</p>
                            <p>Phone number:</p>
                          </Content>
                        </Layout>

                        <Footer>
                            <p>LinkedIn:</p>
                            <p>Website:</p>
                        </Footer>

                    </Layout>

                  </Card>
                </div>
              
            </div>
        
            <div >
                  <button onClick={this.printDocumentImg}
                  style={{
                    height: 50,
                    
                    backgroundColor: 'rgba(99,37,201,1)',
                    borderColor: 'transparent' ,
                    fontSize: '14px',
                    color: "rgba(255,255,255)"              
                    }}
                    className={'textAldrich'}
                    type="primary"
                    
                      >Download</button>
            </div>
        </Modal>
      </div>

    )
         
  }
}


export default (ProfilePng);