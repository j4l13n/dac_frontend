import React, { Component } from "react";
import Sidebar from "./../../components/Sidebar/Sidebar.jsx";
import Header from "./../../components/Header/Header.jsx"
import {
  Grid
} from "react-bootstrap";

// import { Card } from "./../../components/Card/Card.jsx";

class Settings extends Component {
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div id="main-panel" className="main-panel" ref="mainPanel" style={{ marginTop: "-20px", paddingTop: "20px", height: "590px"}}>
                    <Grid fluid>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default Settings;