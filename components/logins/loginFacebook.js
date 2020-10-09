import React, { Component } from 'react';

// this import requires the following installation
//  npm install react-facebook-login 
import FacebookLogin from 'react-facebook-login';


class LoginFacebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        //   console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked = () => {
        console.log("clicked")  
    }

    render() {
        let fbContent;

        if (this.state.isLoggedIn){
            fbContent = (
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
            fbContent = (<FacebookLogin
                appId="761697851043985" 
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            //    cssClass="my-login-css-facebook"
                icon="fa-facebook"
                />)
        }
        
        return (
        <div >{fbContent}</div>
        );
    }
}

export default LoginFacebook;