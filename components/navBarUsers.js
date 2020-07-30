import React from "react";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Gallery from './gallery.js';

class NavBarUsers extends React.Component {
    constructor() {
        super();
        this.state = {
          childVisible1: false,
          childVisible2: false,
          childVisible3: false,
        }
      }
    
      onClick = ({ key }) => {
        if (key == "1"){
          this.setState({ childVisible1: true })
          this.setState({ childVisible2: false })
          this.setState({ childVisible3: false })
        }
        if (key == "2"){
          this.setState({ childVisible1: false })
          this.setState({ childVisible2: true })
          this.setState({ childVisible3: false })
        }
        if (key == "3"){
          this.setState({ childVisible1: false })
          this.setState({ childVisible2: false })
          this.setState({ childVisible3: true })
        }
      };  

      closeChildVisible = ( key ) => {
        if (key == "1"){
          this.setState({ childVisible1: false })
        }
        if (key == "2"){
          this.setState({ childVisible2: false })
        }
        if (key == "3"){
          this.setState({ childVisible3: false })
        }
      };  

    render(){
        const menu = (
            <Menu onClick={this.onClick} >
                    <Menu.Item key="1">Profile</Menu.Item>
                    <Menu.Item key="2" >Card</Menu.Item>
                    <Menu.Item key="3">Gallery</Menu.Item> 
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
                    
                    {this.state.childVisible1 && <ProfileForm 
                    close={this.closeChildVisible.bind(this, "1")}/> }

                    {this.state.childVisible2 && <ProfilePng 
                    close={this.closeChildVisible.bind(this,"2")}/> }

                    {this.state.childVisible3 && <Gallery  
                    close={this.closeChildVisible.bind(this,"3")}/> }
                   
                </div>

            </div>
        )
    }

    
}

export default (NavBarUsers);