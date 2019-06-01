import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Card } from "./../../components/Card/Card.jsx";

class AddTree extends Component {
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div id="main-panel" className="main-panel" ref="mainPanel" style={{ marginTop: "-20px", paddingTop: "20px", height: "590px"}}>
                    <Grid fluid>
                        <Card
                            title="Add New Tree"
                            category="Fill the fields below."
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Grid>
                                    <Row>
                                        <Col md={8}>
                                            <FormGroup>
                                                <ControlLabel>Tree Title</ControlLabel>
                                                <FormControl placeholder="Enter Tree title"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Tree Description</ControlLabel>
                                                <FormControl placeholder="Enter Tree description" componentClass="textarea" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={8}>
                                            <div className="pull-right">
                                                <Button className="btn btn-danger" style={{ marginRight:  "10px"}}>Cancel</Button>
                                                <Button className="btn btn-primary">Save tree</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            }
                        />
                    </Grid>
                </div>
            </div>
        );
    }
}

export default AddTree;