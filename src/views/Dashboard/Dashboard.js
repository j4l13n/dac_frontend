import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "./../../components/Card/Card.jsx";
import { StatsCard } from "./../../components/StatsCard/StatsCard.jsx";
import Sidebar from "./../../components/Sidebar/Sidebar.jsx"
import Header from "./../../components/Header/Header.jsx"
import ChartistGraph from "react-chartist";
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales
  } from "./../../variables/Variables";

class Dashboard extends Component {
    createLegend(json) {
        var legend = [];
        for (var i = 0; i < json["names"].length; i++) {
          var type = "fa fa-circle text-" + json["types"][i];
          legend.push(<i className={type} key={i} />);
          legend.push(" ");
          legend.push(json["names"][i]);
        }
        return legend;
      }
    render() {
        return (
            <div className="content">
                <Sidebar />
                <Header />
                <div id="main-panel" className="main-panel" ref="mainPanel" style={{ marginTop: "-20px", paddingTop: "20px"}}>
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-phone text-warning" />}
                                statsText="Calls"
                                statsValue="105"
                                statsIcon={<i className="pe-7s-call" />}
                                statsIconText="Calls made"
                            />
                            </Col>
                            <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-mail-open text-success" />}
                                statsText="Messages"
                                statsValue="1,345"
                                statsIcon={<i className="pe-7s-mail-open" />}
                                statsIconText="Messages Sent"
                            />
                            </Col>
                            <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-users text-info" />}
                                statsText="Subscribers"
                                statsValue="2,300"
                                statsIcon={<i className="pe-7s-users" />}
                                statsIconText="Susbscribers you have"
                            />
                            </Col>
                            <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-refresh text-secondary" />}
                                statsText="Responses"
                                statsValue="45"
                                statsIcon={<i className="fa fa-refresh" />}
                                statsIconText="Updated now"
                            />
                        </Col>
                    </Row>
                    <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
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

export default Dashboard