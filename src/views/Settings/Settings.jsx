import React, { Component } from "react";
import Sidebar from "./../../components/Sidebar/Sidebar.jsx";
import Header from "./../../components/Header/Header.jsx"
import {
  Grid,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

import { Card } from "./../../components/Card/Card.jsx";


class Settings extends Component {
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div id="main-panel" className="main-panel" ref="mainPanel" style={{ marginTop: "-20px", paddingTop: "20px", height: "590px"}}>
                    <Grid fluid>
                        <Card
                            title="Change your password"
                            category="Fill the fields below to change your password."
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Grid>
                                    <Row>
                                    <Col md={8}>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <ControlLabel>Names</ControlLabel>
                                                    <FormControl value="Karangwa Hirwa Julien" disabled/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <ControlLabel>Email</ControlLabel>
                                                    <FormControl value="juliushirwa@gmail.com" disabled/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <ControlLabel>Old Password</ControlLabel>
                                                    <FormControl value="oldpassword" type="password" />
                                                    <span><i className="pe-7s-refresh text-info"></i></span>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <ControlLabel>Password</ControlLabel>
                                                    <FormControl placeholder="Enter new password" type="password" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <ControlLabel>Confirm</ControlLabel>
                                                    <FormControl placeholder="Confirm new password" type="password"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <div className="pull-right">
                                                    <Button className="btn btn-primary">Save changes</Button>
                                                </div>
                                            </Col>
                                        </Row>
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

export default Settings;