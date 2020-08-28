import React from "react";
import { Menu, Dropdown, Button, Icon, message, Row, Col } from 'antd';
import "./scss/ui.scss";
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Gallery from './gallery.js';
import ControlPanel from './controlPanel.js';
import ControlAudio from './controlAudio/ControlAudio.js';
import SkyboxSelect from "./skybox-select";
import Logout from "./logout/logout";
import MenuMetaburn from "./menuMetaburn";
// import Screenshare from "./screenshare.js";

class NavBarUsers extends React.Component {
    constructor() {
        super();
        window.paintModeActive = false;
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
          metaburn: true,
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
         
            <Menu onClick={this.onClick} >
              <Menu.ItemGroup key="m1" title="MY STUFF" style={{fontWeight: 'bold', textAlign: "center"}}>
                <Menu.Item key="profile" type="checkbox" className="dropDownNeu buttonSize">PROFILE</Menu.Item>
                {/* <Menu.Item key="childVisible2" >Card</Menu.Item> */}
                <Menu.Item key="addToMyGallery" className="dropDownNeu buttonSize">ADD TO MY GALLERY</Menu.Item> 
                <Menu.Item key="gallery" className="dropDownNeu buttonSize">VIEW OR SHARE MU GALLERY</Menu.Item> 
                <Menu.Item key="chat" className="dropDownNeu buttonSize">TEXT CHAT</Menu.Item> 
              </Menu.ItemGroup>

              <Menu.ItemGroup key="m2" title="CONTROLS" style={{fontWeight: 'bold', textAlign: "center"}}>

                <Menu.Item disabled key="buttonsTwilio" className="dropDownNeu">
                  <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
                  <p className="labelButtonTwilio">VIDEO</p>
                  <p className="labelButtonTwilio">MIC</p>
                  <p className="labelButtonTwilio">STREAM</p>
                  <Button id="video_button" className="labelButtonTwilio dropDownNeu" 
                  onClick={() =>{ this.changeState('video')}}>
                    {video ? 'Off' : 'On'}
                  </Button>
                  <Button id="mic_button" className="labelButtonTwilio dropDownNeu" 
                  onClick={() =>{ this.changeState('mic')}}> 
                    {mic ? 'Off' : 'On'}
                  </Button>
                  <Button id="chat_button" className="labelButtonTwilio dropDownNeu" 
                  onClick={() =>{  this.changeState('chat')}}>
                    {chat ? 'Off' : 'On'}
                  </Button>
                  </div>
                </Menu.Item> 

                <Menu.Item className="dropDownNeu"
                // onClick={() => {this.changeScreenShare()}}
                >{screenShare ? 'OFF SCREENSHARE' : 'ON SCREENSHARE'}</Menu.Item> 
                <Menu.Item disabled key="avatarSelector" className="dropDownNeu buttonSize">AVATAR SELECTOR</Menu.Item> 
                <Menu.Item disabled={!supportedXR} className="dropDownNeu"
                onClick={() =>{  this.changeState('xr')}}
                >
                  {supportedXR ? (xr ? 'EXIT XR' : 'ENTER XR') : 'NO XR'}
                </Menu.Item> 
                <Menu.Item className="dropDownNeu" onClick={() =>{ window.paintModeActive = !window.paintModeActive }}>
                  {window.paintModeActive ? 'PAINT MODE OFF' : 'PAINT MODE ON'}
                </Menu.Item>
                <Menu.Item key="audio" className="dropDownNeu buttonSize">AUDIO</Menu.Item> 
                <Menu.Item key="sky" className="dropDownNeu buttonSize">CHANGE SKY</Menu.Item> 
                <Menu.Item key="world" className="dropDownNeu buttonSize">CHANGE WORL</Menu.Item> 
                <Menu.Item key="donate" className="dropDownNeu buttonSize">DONATE</Menu.Item>  
                <Menu.Item key="logout" className="dropDownNeu buttonSize">LOGOUT</Menu.Item>  
              </Menu.ItemGroup>
              <Menu.ItemGroup key="m3" title="SCENES" style={{fontWeight: 'bold', textAlign: "center"}}>
                
                <Menu.Item >
                  <a  className="dropDownNeu buttonSize" href='https://metaburn.org/camp1' target="_blank" >LOVE VILLAGE</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/camp2' target="_blank" >MAYAMI</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/camp3' target="_blank" >ONWARD</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/camp4' target="_blank" >HARMONIZE HUMANITY</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/camp6' target="_blank">AQUA VENUS</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/camp8' target="_blank">LOVE BURN</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/camp11' target="_blank" >CONSCIOUS PLAYGROUND</a>
                </Menu.Item>  
                <Menu.Item>
                  <a className="dropDownNeu buttonSize" href='https://metaburn.org/desert' target="_blank" >DEEP PLAYA</a>
                </Menu.Item>  
                <Menu.Item className="dropDownNeu buttonSize">
                  <a className="dropDownNeu" href='https://metaburn.org/camp15' target="_blank" >THE MAN</a>
                </Menu.Item>  
              </Menu.ItemGroup>
              <Menu.ItemGroup key="m3" title="AVATAR ANIMATIONS" style={{fontWeight: 'bold', textAlign: "center"}}>

                
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" >ANIMATION 1</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" >ANIMATION 2</a>
                </Menu.Item>  
                <Menu.Item >
                  <a className="dropDownNeu buttonSize" >ANIMATION 3</a>
                </Menu.Item>  
              </Menu.ItemGroup>
                {/* <Menu.Item key="childVisible6">Screenshare - Camera Test</Menu.Item>   */}
            </Menu>
            
          );


        return(
            <div>
              <Row>

                <Col  span={2} xs={7} sm={4}>
                  <Dropdown overlay={menu} trigger={['click']} className='textAldrich'  >
                      <Button  className="buttonNeu">
                        <Icon type="menu" style={{ fontSize: '20px', color: '#ff0080 ' }}/> 
                        <span className="textAldrich" style={{fontWeight: 'bold', color: '#ff0080 '}}>MENU</span> 
                      </Button>
                  </Dropdown>
                  <Button  className="buttonNeu blink_me textAldrich" 
                    style={{fontWeight: 'bold', color: '#ff0080 '}}
                    onClick={()=>{this.setState({ audio: true });}}>
                        AUDIO 
                  </Button>
                  <Button  className="buttonNeu blink_me textAldrich" style={{fontWeight: 'bold', color: '#ff0080 '}}>
                        DONATE 
                  </Button>
                </Col>
                <Col  span={20} xs={10} sm={16} >
                    <MenuMetaburn visible={this.state.metaburn} />
                  </Col>
                  <Col  span={2} xs={7} sm={4}>
                    {controlPanel}
                  </Col>
              </Row>
                
                <div>
                        <ProfileForm 
                        visible={this.state.profile }
                        close = {this.closeChildVisible.bind(this, 'profile')}
                        /> 
                        {/* <ProfilePng 
                        visible={this.state.childVisible2 }
                        close = {this.closeChildVisible.bind(this, 'childVisible2')}
                        />  */}
                        {/*<Gallery 
                        visible={this.state.gallery }
                        close = {this.closeChildVisible.bind(this, 'gallery')}
                        /> */}
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