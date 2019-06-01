import React, { Component } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar.jsx';
import Header from './../../components/Header/Header.jsx';
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from './../../components/Card/Card.jsx';

class Responses extends Component {
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
                                title="All Responses you have now"
                                category="Your Responses created since you started."
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                <div>
                                    <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Subscriber</th>
                                            <th>Answer One</th>
                                            <th>Answer Two</th>
                                            <th>Answer Three</th>
                                            <th>Answer Three</th>
                                            <th>Answer Four</th>
                                            <th>Answer Five</th>
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

export default Responses;