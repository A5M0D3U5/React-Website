import React from 'react';

import Header from "./controllers/Header";
import MainContent from "./controllers/MainContent";

function App() {
    return (
        <div id={"container"}>
            <Header />
            <MainContent/>
        </div>
    );
}

export default App;
