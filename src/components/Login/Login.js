import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function Login() {
        const onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
      const responseSuccessGoogle = (response) => {
        // console.log(response);
        onSignIn(response);
        axios({
               method : "POSt",
               URL: "http://localhost:3000/Auth" ,
               data: {tokenId:response.tokenId}
        }).then(response => {
            // console.log(response);
        })
        .catch(response => {
            if(response instanceof Error) {
              // console.log(response.message);
            } else {
              // console.log(response.data);
            }
        })
      }
      
      const responseFailureGoogle = (response) => {
        // console.log(response);
        console.log("please Login Again");
      }

     
    return (
        <div className="login">
                    <GoogleLogin
                    clientId=""
                    buttonText="Login"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
        </div>
    )
}

export default Login;
