import React from 'react';

import { Form, Icon, Input, Button, Row, Col, Alert, Layout, Menu, message, Card } from "antd";

import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
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

let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);