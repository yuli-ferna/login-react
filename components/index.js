import React from 'react';

import { Form, Icon, Input, Button, Row, Col, Alert, Layout, Menu, message, Card } from "antd";

import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import ReactPlayer from 'react-player';
import classnames from "classnames";
import Navbar from "./navbar.js";
import { HashLink as Link } from 'react-router-hash-link';

import RegistrationForm from "./register.js";
import Login from "./login.js";
import classes from "./formCard.js";
// import Logos from "./Logos.js";
import { withStyles, makeStyles } from "@material-ui/styles";

import './css/app.css';
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

let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);