import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from './../../components/Card/Card.jsx';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Trees extends Component {
    onCall() {
        fetch("", {
            method: 'GET'
        })
        .then(response => response.json())
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div id="main-panel" className="main-panel" ref="mainPanel" style={{ marginTop: "-20px", paddingTop: "20px", height: "590px"}}>
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                    <Card
                                        title="Try to click the button for a test call"
                                        category="This test the call"
                                        ctTableFullWidth
                                        ctTableResponsive
                                        content={
                                        <div>
                                            <div className="col-md-4" style={{ marginBottom: "20px" }}>
                                                <Button className="btn btn-info" onClick={this.onCall}>Call me</Button>
                                            </div>
                                        </div>
                                        }
                                        style={{ paddingBottom: "20px" }}
                                    />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Trees;