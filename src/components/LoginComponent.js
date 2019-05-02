import React from "react"

function LoginComponent (props) {

    let comp = props.isLoggedIn ? (<span>Logged in as {props.name}</span>) : (<span>Not logged in.  <button onClick={props.handleLogin}>Log In</button></span>)

    return (

        <div id="loginComponent">
            {comp}
        </div>
    );

}

export default LoginComponent
