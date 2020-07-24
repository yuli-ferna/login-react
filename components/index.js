import React from "react";

import {
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col,
  Alert,
  Layout,
  Menu,
  message,
  Card,
} from "antd";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import ReactPlayer from "react-player";
import classnames from "classnames";
// import Navbar from "./navbar.js";
import ProfileForm from "./profile.js"
import ProfilePng from "./profilePng.js"
import Photo02 from "./photo02.js"
import NavBarUsers from "./navBarUsers.js"
import Images from "./images.js"
import Gallery from "./gallery.js"
import { HashLink as Link } from 'react-router-hash-link';

import Login from "./login.js";
const { Header, Content, Footer } = Layout;

class Root extends React.Component {
    render() {
        // const { getFieldDecorator } = classes.form;
        const liClasses = 'login-form root form';
        
        return (
            
            
                <Login/>
            
        );
    }
}

let container = document.getElementById("app");
let component = <Root />;
ReactDOM.render(component, container);
