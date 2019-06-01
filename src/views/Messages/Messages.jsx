import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from './../../components/Card/Card.jsx';

class Messages extends Component {
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
                                title="All Messages you have now"
                                category="Your Messages created since you started."
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                <div>
                                    <div className="">
                                    <a href="/send-message" className="btn btn-primary pull-right" style={{ marginRight: "10px"}}>
                                        Send a Message
                                    </a>
                                    </div>
                                    <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Creator</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

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

export default Messages;