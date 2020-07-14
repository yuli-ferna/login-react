import React from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Card, Avatar, Layout, Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { Meta } = Card;

class PdfFile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  printDocumentImg() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const enlace = document.createElement('a');
      enlace.download = "Captura de página web - Parzibyte.me.png";
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
        
      })
    ;
  }
    render(){
      
          return(
            <div>
              <div >
                <button onClick={this.printDocumentImg}>PNG</button>
              </div>
              <div id="divToPrint" >
                <div>
                  <Card
                   title="User Profile" 
     
                   style={{ width: 400, margin: 20}}
                  >

                    <Layout>
                        <Header>
                         
                          <p
                            style={{ color: "rgb(255, 255, 255)"
                            }}
                          >First Last Name</p>
                          
                        </Header>
                        <Layout>
                          
                          <Content>
                            <p>City</p>
                            <p>Country</p>
                            <p>Phone number</p>
                            <p>Email</p>
                          </Content>
                          
                        </Layout>
                        <Footer>
                          <tr>
                            <td>Linked In</td>
                            <td>/</td>
                            <td>Business Website</td>
                          </tr>
                          
                        </Footer>
                    </Layout>
                  </Card>
                </div>
              </div>
            </div>




 
          )
            
        
            
        
        
    }
}


export default (PdfFile);