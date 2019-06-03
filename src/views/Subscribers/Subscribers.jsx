import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from './../../components/Card/Card.jsx';
import { Link } from 'react-router-dom';


class Subscribers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribers: [],
            errors: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/subscribers")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    subscribers: response.data
                });
            }).catch(err => {
                this.setState({
                    errors: err
                });
            });
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
                                title="All Subscribers you have now"
                                category="Your subscribers are people you can call or send to them messages"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                <div>
                                    <div className="">
                                    <Link to="/add-subscriber" className="btn btn-primary pull-right" style={{ marginRight: "10px" }} >
                                        Add Subscriber
                                    </Link>
                                    </div>
                                    <Table striped hover>
                                    <thead>
                                        <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Location</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.state.subscribers.map((subscriber, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{key}</td>
                                                    <td>{subscriber.name}</td>
                                                    <td>{subscriber.phone}</td>
                                                    <td>{subscriber.location}</td>
                                                    <td>
                                                    <Link to="#pabro" style={{ paddingRight: "10px" }}><i className="glyphicon glyphicon-pencil"></i></Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                            </Table>
                        </div>
                        }
                    />
                    </Col>
                </Row>
                </Grid>
                </div>
            </div>
        );
    }
}

export default Subscribers;