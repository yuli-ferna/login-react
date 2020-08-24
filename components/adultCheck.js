import React, { Component } from 'react';
import { Modal, Button} from 'antd';

class AdultCheck extends Component {
  constructor(props) {
    super(props);     
    this.showModal = this.showModal.bind(this);
 
    this.state = { visible: true,
                   goToRef: false };
    }
    
    showModal = () => {
      this.setState({
        visible: true,
      });
      this.setState({
        goToRef: true,
      });
    
    };
  
    hideModal = () => {
      this.setState({
        visible: false,
      });
    };
    
    render(){
        return (
          <Modal
              title="Age Confirmation"
              visible={this.state.visible}
              footer={null}
              onOk={this.hideModal}
              onCancel={this.showModal}
              okText="Yes"
              cancelText="No"
            >
              
              <div style={{textAlign: "center"}}>
                <p style={{color: "#ff0000", fontWeight: "bold"}}>ONLY USE GOOGLE CHROME BROWSER  LAPTOP / DESKTOP / OCULUS QUEST</p>
                <br/>
                <p>This website requires you to be 18 years or older to enter</p>
                <h1>Are you over 18?</h1> 
              </div>
              <div style={{display: 'flex', justifyContent: "center"}}>
                <Button type="primary" onClick={this.hideModal} style={{margin:"5px"}}>Yes</Button>
                <Button  style={{margin:"5px"}}
                  href="https://kindling.burningman.org/" target="_blank">No</Button>
              </div>
        </Modal>
        )
    }
}

export default (AdultCheck);