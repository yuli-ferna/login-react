import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar02 from "./navbar02.js";
import ProfileForm from "./profile.js";
import ProfilePng from "./profilePng.js";
import { Card } from 'antd';

class Scene extends React.Component {
    constructor(props) {
        super(props);     
        this.state = { visible: false };  
      }

      render(){
          return(
              
              <div>
               
                <Navbar02/>
              </div>
          )
      }
}

export default (Scene);