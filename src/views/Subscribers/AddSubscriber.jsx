import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Card } from "./../../components/Card/Card.jsx";

class AddSubscriber extends Component {
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div id="main-panel" className="main-panel" ref="mainPanel" style={{ marginTop: "-20px", paddingTop: "20px", height: "590px"}}>
                    <Grid fluid>
                        <Card
                            title="Add Subscriber"
                            category="Fill the fields below."
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Grid>
                                    <Row>
                                        <Col md={5}>
                                            <FormGroup>
                                                <ControlLabel>Names</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber names"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Phone numbers</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber phone number"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={5}>
                                            <FormGroup>
                                                <ControlLabel>Province</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber province"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>District</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber district"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Sector</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber sector"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Cell</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber cell"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Location</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber location"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Gender</ControlLabel>
                                                <FormControl placeholder="Enter Subscriber location"
                                                    componentClass="select">
                                                    <option value="">Select</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={10}>
                                            <div className="pull-right">
                                                <Button className="btn btn-danger" style={{ marginRight:  "10px"}}>Cancel</Button>
                                                <Button className="btn btn-primary">Save subscriber</Button>
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

export default AddSubscriber;