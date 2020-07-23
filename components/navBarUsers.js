import React from "react";
import { Menu, Dropdown, Button, Icon } from 'antd';
import ProfileForm from './profile.js';
import ProfilePng from './profilePng.js';
import Images from './images.js';
import Gallery from './gallery.js';
import GalleryByUser from './galleryByUser.js'
import SampleGallery from './sampleGallery.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const menu = (
  <Menu>
    
    <Menu.Item>
      <Link to="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/card">Card</Link>
    </Menu.Item>
    
    <Menu.Item>
      <Link to="/gallery">Gallery</Link>
    </Menu.Item>
    
    
  </Menu>
);

function NavBarUsers() {
    return(
       <Router>
         <div>
            <Dropdown overlay={menu} placement="bottomLeft" className='textAldrich'>
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

            <Switch>
              <Route path="/profile">
                <ProfileForm/>
              </Route>
              <Route path="/card">
                <ProfilePng/>
              </Route>
              
              <Route path="/gallery">
                <Gallery/>
              </Route>
              
            </Switch>
        </div>

      </Router>
    )
}

export default (NavBarUsers);