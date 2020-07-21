import React from "react";

import { Form, Icon, Input, Button, Row, Col, Layout, Menu } from "antd";

import "antd/dist/antd.css";
import classnames from "classnames";
import RegisterForm from "./register.js";

import styles from "./formCard.js";
import Logos from "./Logos.js";
import { withStyles, makeStyles } from "@material-ui/styles";
import $ from "jquery";

import "./scss/login.scss";
const { Header, Content, Footer } = Layout;

class Login extends React.Component {
  render() {
    let props = this.props;

    const openDropDown = (e) => {
      let id = "#dropDown-" + e;
      $(id).toggleClass("active");
    };
    let liMeta;
    if (props.metaburn) {
      liMeta = props.list.map((item, index) => {
        return (
          <li className="drop-down textAldrich" key={index.toString()}>
            <button onClick={() => openDropDown(index)}>{item.name}</button>
            {item.li && (
              <ul
                className="list-unstyled-drop card-dropdown"
                id={`dropDown-${index}`}
              >
                {item.li.map((itemChild, index) => {
                  return (
                    <li key={index.toString()}>
                      <button>{itemChild}</button>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      });
    }

    // const { getFieldDecorator } = classes.form;
    const liClasses = "login-form root form";
    const { classes } = this.props;
    return (
      <Layout
        className={`${
          props.metaburn ? "background-metaburn" : "background-others"
        }
        `}
      >
        <Header className={"header-login"}>
          {/* Navbar */}
          <Menu theme="dark" mode="horizontal">
            <Menu.Item
              style={{ backgroundColor: "transparent", padding: "0px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "64px",
                }}
              >
                <img
                  src={props.logoMini}
                  style={{ width: 35, margin: "auto", marginRight: "10px" }}
                ></img>
                <div style={{ padding: "0 1em" }}>
                  <p className="textAldrich" style={{ margin: "auto" }}>
                    {props.title}
                  </p>
                </div>
              </div>
            </Menu.Item>

            <Menu.Item
              style={{ backgroundColor: "transparent", padding: "0px" }}
            >
              <div style={{ lineHeight: "64px" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={classnames(
                    classes.actionButton,
                    "login-form-button",
                    classes.inputNavbar,
                    "textAldrich"
                  )}
                >
                  Donate
                </Button>
              </div>
            </Menu.Item>

            <Menu.Item
              className={"form-inline-login"}
              style={{
                float: "right",
                backgroundColor: "transparent",
                height: 64,
              }}
            >
              {/* Login <700px */}
              <Row>
                <Col span={24} xs={0} sm={0} md={0} lg={0} xl={24} xxl={24}>
                  <Form
                    layout="inline"
                    onSubmit={props.handleSubmit}
                    className={classnames(
                      "login-form",
                      // classes.root,
                      classes.formMenuItem
                    )}
                    onFocus={props.clearGlobalErrors}
                  >
                    <Form.Item>
                      {/* {getFieldDecorator("email", {
                                rules: [
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail"
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail"
                                }
                                ]
                            })( */}
                      <Input
                        className={classes.inputNavbar}
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Email"
                        // onChange={props.changeValues}
                      />
                      {/* )} */}
                    </Form.Item>
                    <Form.Item>
                      {/* {getFieldDecorator("password", {
                                rules: [
                                {
                                    required: true,
                                    message: "Please input your Password"
                                }
                                ]
                            })( */}
                      <Input
                        className={classes.inputNavbar}
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Password"
                        // onChange={props.changeValues}
                      />
                      {/* )} */}
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        // loading={props.state.loading}
                        className={classnames(
                          classes.actionButton,
                          "login-form-button",
                          classes.inputNavbar,
                          "textAldrich"
                        )}
                      >
                        Log in
                      </Button>
                    </Form.Item>
                    <Form.Item
                    // className={classes.lastRow}
                    >
                      {/* <span className={classes.leftSubAction}>
                    <Link to="/register">Register</Link>
                  </span> */}

                      <span className={classes.rightSubAction}>
                        {/* <Link to="/recover-password"></Link> */}
                        Forgot password
                      </span>
                    </Form.Item>
                    {/* {displayError && (
                            // <Form.Item>
                                <Alert message={displayError} type="error" style={{marginTop: '10px', zIndex: 1, textAlign: 'center'}} />
                            // </Form.Item>
                            )} */}
                  </Form>
                </Col>
              </Row>
            </Menu.Item>
          </Menu>
        </Header>
        {props.metaburn && (
          <div className="logo-metaburn">
            <img
              src={props.logo}
              style={{
                height: "50vh",
                minHeight: "250px",
                maxHeight: "350px",
              }}
            />
          </div>
        )}
        <Content
          style={{
            zIndex: 2,
          }}
        >
          {/* Content */}
          {/* Login <700px */}

          <Row
            type="flex"
            justify="space-around"
            align="middle"
            gutter={[0, 20]}
            // style={{ overflow:'auto' }}
          >
            <Col span={8} xs={20} sm={20} md={20} lg={20} xl={0} xxl={0}>
              <Form
                //onSubmit={props.handleSubmit}
                className={classnames("login-form", classes.root, classes.form)}
                //  onFocus={props.clearGlobalErrors}
              >
                <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle ant-form-item">
                  <img src={props.logo} style={{ width: "8em" }} />
                </div>
                {/* {displayError && (
                        <Form.Item>
                        <Alert message={displayError} type="error" />
                        </Form.Item>
                    )} */}
                <Form.Item>
                  {/* {getFieldDecorator("email_responsive", {
                        rules: [
                            {
                            type: "email",
                            message: "The input is not valid E-mail"
                            },
                            {
                            required: true,
                            message: "Please input your E-mail"
                            }
                        ]
                        })( */}
                  <Input
                    className={classes.input}
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
                    // onChange={props.changeValues}
                  />
                  {/* )} */}
                </Form.Item>
                <Form.Item>
                  {/* {getFieldDecorator("password_responsive", {
                        rules: [
                            {
                            required: true,
                            message: "Please input your Password"
                            }
                        ]
                        })( */}
                  <Input
                    className={classes.input}
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                    // onChange={props.changeValues}
                  />
                  {/* )} */}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    // loading={props.state.loading}
                    className={classnames(
                      classes.actionButton,
                      "login-form-button",
                      classes.input,
                      classes.formButton,
                      "textAldrich"
                    )}
                  >
                    Log in
                  </Button>
                </Form.Item>
                <Form.Item className={classes.lastRow}>
                  <span className={classes.leftSubAction}>
                    {/* <Link to="/register">Register</Link> */}
                    Register
                  </span>

                  <span className={classes.rightSubAction}>
                    {/* <Link to="/recover-password"></Link> */}
                    Forgot password
                  </span>
                </Form.Item>
              </Form>
            </Col>
          </Row>

          {/* Content */}
          <Row
            type="flex"
            justify="space-around"
            // align="middle"
            gutter={[0, 0]}
          >
            {props.publicity ? (
              <Col
                span={8}
                xs={20}
                sm={20}
                md={20}
                lg={20}
                xl={14}
                xxl={14}
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <div className={classes.messageChrome}>
                  <Row type="flex" justify="space-around" align="middle">
                    <Col
                      span={18}
                      xs={14}
                      sm={14}
                      md={18}
                      lg={17}
                      xl={17}
                      xxl={18}
                      style={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h3 className={classes.messageChromeText}>
                        {" "}
                        USE LATEST CHROME BROWSER{" "}
                        <a
                          href="https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en"
                          target="_blank"
                          className={classes.messageChromeLink}
                        >
                          (UPDATE HERE)
                        </a>{" "}
                        OR OCULUS QUEST NATIVE BROWSER
                      </h3>
                      <div>
                        <img
                          style={{ width: 30 }}
                          src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/chrome-icon.png"
                        />

                        <img
                          style={{ width: 30, marginLeft: 10 }}
                          src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/oculus-icon.png"
                        />
                      </div>
                    </Col>
                    <Col span={6} xs={9} sm={6} md={6} lg={7} xl={7} xxl={6}>
                      <Button
                        type="primary"
                        href="https://assets-test-o-zone.s3.amazonaws.com/assets/legaldocs/System+requirements.pdf"
                        target="_blank"
                        className={classnames(
                          classes.messageChromeButton,
                          classes.formButton
                        )}
                        style={{ padding: 5 }}
                      >
                        System requirements
                      </Button>
                    </Col>
                  </Row>
                </div>
                <img
                  className={classes.photo}
                  src="https://assets-test-o-zone.s3.amazonaws.com/assets/Landing+page/login+screen.png"
                />

                <div className={classes.buttonsContainer}>
                  <Button
                    type="primary"
                    size={"large"}
                    className={classnames(classes.contentButton, "textAldrich")}
                    href="https://support358346.typeform.com/to/iLp9iR"
                    target="_blank"
                  >
                    {" "}
                    Schedule demo{" "}
                  </Button>
                  <Button
                    type="primary"
                    size={"large"}
                    className={classnames(classes.contentButton, "textAldrich")}
                    href="https://support358346.typeform.com/to/iLp9iR"
                    target="_blank"
                  >
                    {" "}
                    Order form{" "}
                  </Button>
                  <Button
                    type="primary"
                    size={"large"}
                    className={classnames(classes.contentButton, "textAldrich")}
                    href="https://assets-test-o-zone.s3.amazonaws.com/assets/legaldocs/OZONE+UNIVERSE+CATALOG+AND+PRICING.pdf"
                    target="_blank"
                  >
                    {" "}
                    Intro, products and pricing (PDF){" "}
                  </Button>
                </div>
              </Col>
            ) : (
              props.metaburn && (
                <Col
                  span={8}
                  xs={20}
                  sm={20}
                  md={20}
                  lg={20}
                  xl={14}
                  xxl={14}
                  style={{
                    marginTop: 20,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ul className="list-unstyled-drop">{liMeta}</ul>
                </Col>
              )
            )}

            <Col
              span={8}
              xs={20}
              sm={20}
              md={20}
              lg={20}
              xl={8}
              xxl={8}
              className={classes.form}
              style={{
                marginTop: 40,
                padding: "1.5em",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className={`${
                props.metaburn ? "background-card-metaburn" : "background-white"
              }`}
              id="register-form"
            >
              {!props.metaburn && (
                <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle ant-form-item">
                  <img src={props.logo} style={{ width: "8em" }} />
                </div>
              )}
              <Row
                type="flex"
                justify="space-around"
                align="middle"
                gutter={[5, 5]}
                style={{ marginBottom: 10 }}
              >
                <Col span={24} style={{ textAlign: "center" }}>
                  {props.subtitle && [
                    <h1 className="textAldrich" key="0">
                      {!props.metaburn ? props.title : props.titleMetaburn}
                    </h1>,
                    <h1 className="textAldrich" key="1">
                      {props.subtitle}
                    </h1>,
                  ]}
                  <h1 className="textAldrich">Create Your Free Account Now!</h1>
                </Col>
                {/* <Col span={7} xs={20} sm={20} md={20} lg={20} xl={20} xxl={8}>
                <Button type="primary" size={'large'} className={classes.formButton}> Schedule demo </Button>
              </Col>
              <Col span={7} xs={20} sm={20} md={20} lg={20} xl={20} xxl={8}>
                <Button type="primary" size={'large'} className={classes.formButton}> Order form </Button>
              </Col> */}
              </Row>

              <RegisterForm />
            </Col>
          </Row>
          {props.partners && (
            <Row
              type="flex"
              justify="space-around"
              align="bottom"
              className="logosContainer"
            >
              <Logos />
            </Row>
          )}
        </Content>
      </Layout>
    );
  }
}

export default withStyles(styles)(Login);
