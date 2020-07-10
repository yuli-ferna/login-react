import React from "react";
import html2canvas from 'html2canvas';
import { Card, Avatar, Layout} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

class ProfilePng extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };  
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

  render(){
       
    return(
      <div>
        <div >
          <button onClick={this.printDocumentImg}>PNG</button>
        </div>

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
                        <img 
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                        crossOrigin="true"
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
      </div>

    )
         
  }
}


export default (ProfilePng);