import React, { Component } from 'react';
import { Modal} from 'antd';

class AdultCheck extends Component {
    state = { visible: true };
    
    showModal = () => {
      this.setState({
        visible: true,
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
              onOk={this.hideModal}
              onCancel={this.showModal}
              okText="Yes"
              cancelText="No"
              
            >
              <div style={{textAlign: "center"}}>
                <p>This website requires you to be 18 years or older to enter</p>
                <h1>Are you over 18?</h1> 
              </div>
             
        </Modal>
        )
    }
}

export default (AdultCheck);