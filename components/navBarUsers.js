import React from "react";
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Gallery from './gallery.js';
import Photo02 from './photo02.js';

class NavBarUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          childVisible: ProfileForm,
          notFirstView: false,
         
        }
      }
      
      onClick = ({ key }) => {
        this.setState({notFirstView: true})
       
        if (key == "1"){
          this.setState({childVisible: ProfileForm})
        }
        if (key == "2"){
          this.setState({childVisible: ProfilePng})
        }
        if (key == "3"){
          this.setState({childVisible: Gallery})
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
                
                <div >
                  {this.state.notFirstView && <this.state.childVisible /> }
                 
                </div>
            </div>
        )
    }

    
}

export default (NavBarUsers);