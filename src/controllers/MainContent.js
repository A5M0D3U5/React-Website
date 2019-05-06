import React, {Component} from "react";

import Header from "./Header";
import MainContentComponent from "../components/MainContentComponent";

class MainContent extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <MainContentComponent />
        );
    }
}

export default MainContent;