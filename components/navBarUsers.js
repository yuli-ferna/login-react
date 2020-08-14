import React from "react";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Gallery from './gallery.js';
// import ControlAudio from './controlAudio/ControlAudio.js';
// import SkyboxSelect from "./skybox-select";
// import Logout from "./logout/logout";
// import Screenshare from "./screenshare.js";

class NavBarUsers extends React.Component {
    constructor() {
        super();
        this.state = {
          profile: false,
          childVisible2: false,
          gallery: false,
          audio: false,
          sky: false,
          childVisible6: false,
          world: false,
          logout: false,

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
              <Menu.ItemGroup key="m1" title="My Stuff">
                <Menu.Item key="profile">Profile</Menu.Item>
                {/* <Menu.Item key="childVisible2" >Card</Menu.Item> */}
                <Menu.Item key="addToMyGallery">Add to my gallery</Menu.Item> 
                <Menu.Item key="gallery">View or share my gallery</Menu.Item> 
                <Menu.Item key="chat">Chat</Menu.Item> 
              </Menu.ItemGroup>

              <Menu.ItemGroup key="m2" title="Controls">
                <Menu.Item key="stream">Video/Audio Stream</Menu.Item> 

                <Menu.Item key="buttonsTwilio">
                  <Button>Video</Button>
                  <Button>Mic</Button>
                  <Button>Chat</Button>
                </Menu.Item> 

                <Menu.Item key="addJoin">Add Join Room</Menu.Item> 
                <Menu.Item key="muteRoom">Mute Room</Menu.Item> 
                <Menu.Item key="disableVideo">Disable Video</Menu.Item> 
                <Menu.Item key="screenShare">Screen Share</Menu.Item> 
                <Menu.Item key="avatarSelector">Avatar Selector</Menu.Item> 
                <Menu.Item key="audio">Audio</Menu.Item> 
                <Menu.Item key="sky">Change Sky</Menu.Item> 
                <Menu.Item key="world">Change World</Menu.Item> 
                <Menu.Item key="donate">Donate</Menu.Item>  
                <Menu.Item key="logout">Logout</Menu.Item>  
              </Menu.ItemGroup>

                {/* <Menu.Item key="childVisible6">Screenshare - Camera Test</Menu.Item>   */}
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
                        visible={this.state.profile }
                        close = {this.closeChildVisible.bind(this, 'profile')}
                        /> 
                        {/* <ProfilePng 
                        visible={this.state.childVisible2 }
                        close = {this.closeChildVisible.bind(this, 'childVisible2')}
                        />  */}
                        <Gallery 
                        visible={this.state.gallery }
                        close = {this.closeChildVisible.bind(this, 'gallery')}
                        /> 
                        {/*<ControlAudio 
                        visible={this.state.audio }
                        close = {this.closeChildVisible.bind(this, 'audio')}
                        />
                        <SkyboxSelect 
                        visible={this.state.sky }
                        close = {this.closeChildVisible.bind(this, 'sky')}
                        items={[16, 14, 22]}
                        /> 
                        <Logout 
                        visible={this.state.logout }
                        close = {this.closeChildVisible.bind(this, 'logout')}
                        />
                         <Screenshare 
                        visible={this.state.childVisible6 }
                        close = {this.closeChildVisible.bind(this, 'childVisible6')}
                        /> */}
                </div>

            </div>
        )
    }

    
}

export default (NavBarUsers);