import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';  

export default function Login() {
    return(
        <div className="container">
            <GoogleOAuthProvider
                clientId="191302798387-2mi97km89p65iog7kk536rj3p0qrj4cq.apps.googleusercontent.com">
                    <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        console.log("Login Feito com Sucesso!")
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />;
            </GoogleOAuthProvider>
        </div>
    )
};