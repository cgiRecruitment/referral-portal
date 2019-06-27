import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Chart} from "react-google-charts";
import ProfilesTable from "./ProfilesTable";
import {checkStatus} from "../utility/checkLoginStatus";

class Dashboard extends React.Component {
    componentWillMount() {
        checkStatus();
    }


    render() {
        const {joinerCount, inProgressProfilesCount, offerProfilesCount} = this.props.stats.pieChart
        const {referralCount, notReferralCount} = this.props.stats.refChart
        const pieOptions = {
            title: "Referral Status",
            pieHole: 0.6,
            slices: [
                {
                    color: "#4d974d"
                },
                {
                    color: "#3079ff"
                },
                {
                    color: "#e9d613"
                },
                {
                    color: "#e9a227"
                }
            ],
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "233238",
                    fontSize: 14
                }
            },
            tooltip: {
                showColorCode: true
            },
            chartArea: {
                left: 0,
                top: 0,
                width: "100%",
                height: "80%"
            },
            fontName: "Roboto"
        };
        return (
            <Container>
                <Row>
                    <Col>
                        <Chart
                            chartType="PieChart"
                            data={[
                                ["status", "count"],
                                ["Joined", joinerCount],                               
                                ["Offer Made", offerProfilesCount],
                                ["In Progress", inProgressProfilesCount]
                            ]}
                            options={pieOptions}
                            graph_id="PieChart"
                            width={"90%"}
                            height={"400px"}
                            legend_toggle
                        />
                    </Col>
                    <Col>
                        <Chart
                            width={"90%"}
                            height={"400px"}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ["Type of Application", "count"],
                                ["Referral", referralCount],
                                ["New Employees", notReferralCount],
                            ]}
                            options={pieOptions}
                            legend_toggle
                            //rootProps={{"data-testid": "1"}}
                        />
                    </Col>
                    <Col>
                        <Chart
                            width={"110%"}
                            height={"400px"}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ["Month", "Applications","Offers","Joiners"],
                                ["Jan", 50,10,5],
                                ["Feb", 47,15,9],
                                ["Mar", 8,3,0],
                                ["Apr", 18,5,2],
                                ["May", 29,9,6],
                                ["Jun", 43,12,8]
                            ]}
                            options={{
                                title: "Referer Chart",
                                // Material design options
                                chart: {
                                    title: "Referer Chart"
                                }
                            }}
                            // For tests
                            rootProps={{"data-testid": "2"}}
                        />
                    </Col>
                </Row>
                <Row>
                    <ProfilesTable
                        profiles={this.props.profiles}
                        statusList={this.props.statusList}
                        editUser={false}
                        paginationList={false}
                    />
                </Row>
            </Container>
        );
    }
}

export default Dashboard;
