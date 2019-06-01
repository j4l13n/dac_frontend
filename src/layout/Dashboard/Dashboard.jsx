import React, { Component } from 'react';
//import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './../../components/Header/Header';
import Sidebar from './../../components/Sidebar/Sidebar';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
            
    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <Header />
                </div>
            </div>
        );
    }
}

export default Dashboard;