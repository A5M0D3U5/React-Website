import React from "react";

function LoginComponent (props) {

    let comp = props.isLoggedIn
        ? (
            <span>Logged in as {props.name}</span>
        ) : (
            <span>
                <button id={"loginBtn"} onClick={props.handleLogin}>Log In</button>
                Not logged in.
            </span>
        );

    return (

        <div id={"loginComponent"}>
            {comp}
        </div>
    );

}

export default LoginComponent;
