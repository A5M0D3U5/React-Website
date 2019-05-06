import React from "react";

function HeaderComponent (props) {
    return (
        <header>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.desc}
            </p>
            {props.loginComponent}
        </header>
    );
}

export default HeaderComponent;