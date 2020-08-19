import React from "react";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import "./scss/ui.scss";
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Gallery from './gallery.js';
import ControlPanel from './controlPanel.js';
import ControlAudio from './controlAudio/ControlAudio.js';
import SkyboxSelect from "./skybox-select";
import Logout from "./logout/logout";
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
          controlPanel: false,
          world: false,
          donate: false,
          logout: false,
          //twilio
          mic: true,
          video: true,
          chat: true,
          screenShare: false,
          xr: false,
          supportedXR: true, 
          inputSkySelect:[
            //Position in skyboxSplit : url
            {n:'14', url: 'https://assets-test-o-zone.s3.amazonaws.com/assets/textures/skybox/skyboxesPreview/2020skyboxes-Skybox_A10-SBA10_Front.png'},
            {n:'16', url: 'https://assets-test-o-zone.s3.amazonaws.com/assets/textures/skybox/skyboxesPreview/2020skyboxes-Skybox_A11-SBA11_Front.png'},
            {n:'22', url: 'https://assets-test-o-zone.s3.amazonaws.com/assets/textures/skybox/skyboxesPreview/2020skyboxes-Skybox_A0-Front.png'},
          ]
        }
      }
      
    onClick = ({ key }) => {

      this.setState({ [key]: true });
      
    };  

    changeState = (key) => {

      this.setState({ [key]: !this.state[key] });

    }

    closeChildVisible = (key) => {
    
      this.setState({ [key]: false });
    
    }
    openControlPanel = () =>{
      this.setState({ controlPanel: true });
      
    }

    render(){
      const { mic, video, chat, xr, supportedXR, screenShare } = this.state;
      const controlPanel = (
        <button style={{position: 'relative', float: 'right',opacity: 1.0}} onDoubleClick={this.openControlPanel} >control</button>
      );
        const menu = (
         
            <Menu onClick={this.onClick}>
              <Menu.ItemGroup key="m1" title="My Stuff" style={{fontWeight: 'bold'}}>
                <Menu.Item key="profile" className="dropDownNeu">Profile</Menu.Item>
                {/* <Menu.Item key="childVisible2" >Card</Menu.Item> */}
                <Menu.Item key="addToMyGallery" className="dropDownNeu">Add to my gallery</Menu.Item> 
                <Menu.Item key="gallery" className="dropDownNeu">View or share my gallery</Menu.Item> 
                <Menu.Item key="chat" className="dropDownNeu">Chat</Menu.Item> 
              </Menu.ItemGroup>

              <Menu.ItemGroup key="m2" title="Controls" style={{fontWeight: 'bold'}}>

                <Menu.Item disabled key="buttonsTwilio" className="dropDownNeu">
                  <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
                  <p className="labelButtonTwilio">Video</p>
                  <p className="labelButtonTwilio">Mic</p>
                  <p className="labelButtonTwilio">Chat</p>
                  <Button id="video_button" className="labelButtonTwilio" 
                  onClick={() =>{ this.changeState('video')}}>
                    {video ? 'Off' : 'On'}
                  </Button>
                  <Button id="mic_button" className="labelButtonTwilio" 
                  onClick={() =>{ this.changeState('mic')}}> 
                    {mic ? 'Off' : 'On'}
                  </Button>
                  <Button id="chat_button" className="labelButtonTwilio" 
                  onClick={() =>{  this.changeState('chat')}}>
                    {chat ? 'Off' : 'On'}
                  </Button>
                  </div>
                </Menu.Item> 

                <Menu.Item className="dropDownNeu"
                // onClick={() => {this.changeScreenShare()}}
                >{screenShare ? 'Off ScreenShare' : 'On ScreenShare'}</Menu.Item> 
                <Menu.Item disabled key="avatarSelector" className="dropDownNeu">Avatar Selector</Menu.Item> 
                <Menu.Item disabled={!supportedXR} className="dropDownNeu"
                onClick={() =>{  this.changeState('xr')}}
                >
                  {supportedXR ? (xr ? 'Exit XR' : 'Enter XR') : 'No XR'}
                </Menu.Item> 
                <Menu.Item key="audio" className="dropDownNeu">Audio</Menu.Item> 
                <Menu.Item key="sky" className="dropDownNeu">Change Sky</Menu.Item> 
                <Menu.Item key="world" className="dropDownNeu">Change World</Menu.Item> 
                <Menu.Item key="donate" className="dropDownNeu">Donate</Menu.Item>  
                <Menu.Item key="logout" className="dropDownNeu">Logout</Menu.Item>  
              </Menu.ItemGroup>

                {/* <Menu.Item key="childVisible6">Screenshare - Camera Test</Menu.Item>   */}
            </Menu>
            
          );


        return(
            <div>
                
                <Dropdown overlay={menu} trigger={['click']} className='textAldrich'  >
                    <Button  className="buttonNeu">
                      <Icon type="menu" style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.45)' }}/>  
                    </Button>
                </Dropdown>

                {controlPanel}
                
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
                        <ControlAudio 
                        visible={this.state.audio }
                        close = {this.closeChildVisible.bind(this, 'audio')}
                        />
                        <SkyboxSelect 
                        visible={this.state.sky }
                        close = {this.closeChildVisible.bind(this, 'sky')}
                        items={this.state.inputSkySelect}
                        /> 
                        <Logout 
                        visible={this.state.logout }
                        close = {this.closeChildVisible.bind(this, 'logout')}
                        />
                        <ControlPanel 
                        visible={this.state.controlPanel }
                        close = {this.closeChildVisible.bind(this, 'controlPanel')}
                        />
                        {/*
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