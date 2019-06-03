import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { Card } from "./../../components/Card/Card.jsx";

class AddSubscriber extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            location: '',
            province: '',
            district: '',
            sector: '',
            cell: '',
            gender: '',
            owner: '',
            done: []
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    clickSubmit = () => {
        const subscriber = {
            name: this.state.name || undefined,
            phone: this.state.phone || undefined,
            location: this.state.location || undefined,
            province: this.state.province || undefined,
            district: this.state.district || undefined,
            sector: this.state.sector || undefined,
            cell: this.state.cell || undefined,
            gender: this.state.gender || undefined
        }
        console.log(subscriber);
        fetch("http://localhost:4000/subscribers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        })
        .then(response => {
            response.json()
        })
        .then(response => {
            this.setState({
                done: response.error
            })
        })
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
                                                <FormControl id="name" value={this.state.name} onChange={this.handleChange('name')} placeholder="Enter Subscriber names"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Phone numbers</ControlLabel>
                                                <FormControl value={this.state.phone} onChange={this.handleChange('phone')} placeholder="Enter Subscriber phone number"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={5}>
                                            <FormGroup>
                                                <ControlLabel>Province</ControlLabel>
                                                <FormControl value={this.state.province} onChange={this.handleChange('province')} placeholder="Enter Subscriber province"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>District</ControlLabel>
                                                <FormControl value={this.state.district} onChange={this.handleChange('district')} placeholder="Enter Subscriber district"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Sector</ControlLabel>
                                                <FormControl value={this.state.sector} onChange={this.handleChange('sector')} placeholder="Enter Subscriber sector"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Cell</ControlLabel>
                                                <FormControl value={this.state.cell} onChange={this.handleChange('cell')} placeholder="Enter Subscriber cell"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Location</ControlLabel>
                                                <FormControl value={this.state.location} onChange={this.handleChange('location')} placeholder="Enter Subscriber location"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Gender</ControlLabel>
                                                <FormControl value={this.state.gender} onChange={this.handleChange('gender')} placeholder="Enter Subscriber location"
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
                                                <Button className="btn btn-primary" onClick={this.clickSubmit}>Save subscriber</Button>
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