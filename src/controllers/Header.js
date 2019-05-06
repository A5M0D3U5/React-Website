import React, {Component} from "react";

import HeaderComponent from "../components/HeaderComponent";
import LoginComponent from "../components/LoginComponent";

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {

            siteTitle: "React Testing",
            siteDesc: "Welcome to my site. Here I will be designing stuff with react, and hopefully I can get some cool things going!",

            isLoggedIn: false,
            username: "",
            passwd: ""
        };
    }

    handleLogin = (event) => {
        //const {name} = event.target;
        this.setState({
            isLoggedIn: true,
        });
    };

    render () {
        return (
            <HeaderComponent
                title={this.state.siteTitle}
                isLoggedIn={this.state.isLoggedIn}
                desc={this.state.siteDesc}
                loginComponent={<LoginComponent name={this.state.username} handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>}
            />
        );
    }
}

export default Header;