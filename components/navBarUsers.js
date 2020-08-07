import React from "react";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Gallery from './gallery.js';
// import ControlAudio from './controlAudio/ControlAudio.js';
// import SkyboxSelect from "./skybox-select";
class NavBarUsers extends React.Component {
    constructor() {
        super();
        this.state = {
          childVisible1: false,
          childVisible2: false,
          childVisible3: false,
          childVisible4: false,
          childVisible5: false,
          childVisible6: false,
          childVisible7: false,
          childVisible8: false,

        }
      }
      
    onClick = ({ key }) => {
      this.setState({ [key]: true });
    };  

    closeChildVisible = (key) => {
    
      this.setState({ [key]: false });
    
    }

    render(){
        const menu = (
            <Menu onClick={this.onClick} >
                    <Menu.Item key="childVisible1">Profile</Menu.Item>
                    <Menu.Item key="childVisible3">Gallery</Menu.Item> 
                    <Menu.Item key="childVisible4">Audio</Menu.Item> 
                    <Menu.Item key="childVisible5">Change Sky</Menu.Item> 
                    <Menu.Item key="childVisible7">Change Scene</Menu.Item> 
                    <Menu.Item key="childVisible6">Screenshare - Camera Test</Menu.Item> 
                    <Menu.Item key="childVisible8">Logout</Menu.Item> 
            </Menu>
          );

        return(
            <div>
                <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" className='textAldrich'>
                    <Button
                        style={{
                            height: 50,
                            fontWeight: "bold",
                            backgroundColor: 'rgba(99,37,201,1)',
                            borderColor: 'transparent'
                        }}
                        type="primary"
                        className='textAldrich'
                        >
                        <Icon type="menu" style={{ fontSize: '26px' }}/>    
                    </Button>
                </Dropdown>

                
                <div>
                        <ProfileForm 
                        visible={this.state.childVisible1 }
                        close = {this.closeChildVisible.bind(this, 'childVisible1')}
                        /> 
                        {/* <ProfilePng 
                        visible={this.state.childVisible2 }
                        close = {this.closeChildVisible.bind(this, 'childVisible2')}
                        />  */}
                        <Gallery 
                        visible={this.state.childVisible3 }
                        close = {this.closeChildVisible.bind(this, 'childVisible3')}
                        /> 
                        <ControlAudio 
                        visible={this.state.childVisible4 }
                        close = {this.closeChildVisible.bind(this, 'childVisible4')}
                        />
                        <SkyboxSelect 
                        visible={this.state.childVisible5 }
                        close = {this.closeChildVisible.bind(this, 'childVisible5')}
                        items={[16, 14, 22]}
                        /> 
                        {/* <ChangeScene 
                        visible={this.state.childVisible6 }
                        close = {this.closeChildVisible.bind(this, 'childVisible6')}
                        />  */}
                </div>

            </div>
        )
    }

    
}

export default (NavBarUsers);