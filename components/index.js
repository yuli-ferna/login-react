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

import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "antd/dist/antd.css";
import ReactPlayer from "react-player";
import classnames from "classnames";
// import Navbar from "./navbar.js";
// import Scene from "./scene.js";
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
    const liClasses = "login-form root form";

    const propsMetaburn = {
      logoMini:
        "https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/mfe/mfe-METABURN/logos/logo.jpeg",
      logo:
        "https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/mfe/mfe-METABURN/logos/logo.jpeg",
      title: "METABURN",
      titleMetaburn: "WELCOME HOME",
      publicity: false,
      partners: true,
      subtitle: 'MetaBurn 2020: "The Bridge Experience"',
      metaburn: true,
      list: [
        {
          name: "PLAYA PLAN-IT",
          li: [
            "The Ten Principles",
            "Tech Q's",
            "Avatars",
            "Camps",
            "Art Cars",
            "heARTery",
          ],
        },
        {
          name: "METABURN 2020 Agenda",
          li: [
            "EFFIGIES",
            "EVENTS CALENDAR",
            "META VIEW WIKI",
            "GOOGLE CALENDAR",
          ],
        },
        {
          name: "SIGN UP / REGISTER FOR FREE",
        },
        {
          name: "ABOUT",
          li: ["Why", "Who", "What", "Where", "When", "How", "Regionals"],
        },
        {
          name: "VOLUNTEERS",
          li: ["STAFF", "PROJECTS", "LEADS", "DEPARTMENTS"],
        },

        {
          name: "TOWNHALL",
          li: ["PRESS SIGN UP SPATIAL WIKI", "MEDIA COVERAGE", "BM PRINCIPLES"],
        },

        {
          name: "POLICIES",
          li: [
            "TERMS OF SERVICE",
            "COMMUNITY STANDARDS",
            "PLAYA AESTHETICS",
            "INFRASTRUCTURE POLICIES",
            "WEBSITE TERMS OF SERVICE",
            "MOZILLA HUBS",
            "OZONE UNIVERSE",
          ],
        },
        {
          name: "CONTACT US",
          li: [
            "EMAIL",
            "FACEBOOK",
            "TWITCH",
            "TWITTER",
            "WHATS APP",
            "DISCORD",
            "INSTAGRAM",
            "heARTery",
            "CURATION",
          ],
        },
        {
          name: "APPLICATION - ART GRANT",
          li: [
            "ARTISTS",
            "VJ",
            "DJ",
            "PRODUCER",
            "CREATIVE",
            "SOFTWARE",
            "ADMIN",
            "XR/VR/AR",
          ],
        },
        {
          name: "JOIN META BURN",
          li: [
            "APPLICATION - SIGN UP",
            "SOUND CAMPS + STAGE",
            "VJ + STREAM BOOTH",
            "DMV ART CARS",
            "PRESENTATION STATIONS",
            "PLATONIC SOLID EXHIBIT",
            "THE BRIDGE DNA PORTALS",
          ],
        },
        {
          name: "CAMPS",
          li: [
            "APPLICATION - SIGN UP",
            "THE MAN",
            "THE TEMPLE",
            "CENTER CAMP",
            "heARTery",
            "PLAYA SCHOOL & PRINCIPLES",
            "META VIEWS WIKI - SIGNS/SYMBOLS",
            "DEPARTMENT OF MUTANT VEHICLES",
            "Camp 1",
            "Camp 2",
            "Camp 3",
            "Camp 4",
            "Camp 5",
            "Camp 6",
            "Camp 7",
            "Camp 8",
            "Camp 9",
            "Camp 10",
            "Camp 11",
            "Camp 12",
            "Camp 13",
            "Camp 14",
          ],
        },
      ],
    };

    // return <Login {...propsMetaburn}  />;
    return <NavBarUsers/>
    // const liClasses = 'login-form root form';
    
    }
         
}

let container = document.getElementById("app");
let component = <Root />;
ReactDOM.render(component, container);
