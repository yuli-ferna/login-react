import React, { Component } from 'react';

// this import requires the following installation
// npm install react-google-login
import GoogleLogin from 'react-google-login';

class LoginGoogle extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseGoogle = response => {
        //   console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.profileObj.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email,
            picture: response.profileObj.imageurl
        })
    }

    failureGoogle = () => {
        console.log("connection error with google")  
    }

    render() {
        let gooContent;

        if (this.state.isLoggedIn){
            gooContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email {this.state.email}

                </div>
            )
        } else {
            gooContent = (<GoogleLogin
                clientId="333708009676-n3b1lgm04n71pfkfrc9f721ek7p9ssen.apps.googleusercontent.com"   //america
              //clientId= "651038064863-t6bh1jc541d0q515kt7hcdhn8h9mmo8l.apps.googleusercontent.com/"  //ozone
              buttonText="LOGIN WITH GOOGLE"
                onSuccess={this.responseGoogle}
                onFailure={this.failureGoogle}
                cookiePolicy={'single_host_origin'}
              />)
        }
        
        return (
        <div >{gooContent}</div>
        );
    }
}

export default LoginGoogle;