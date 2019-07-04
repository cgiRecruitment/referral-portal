import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chart } from "react-google-charts";
import ProfilesTable from "./ProfilesTable";
import { checkStatus } from "../utility/checkLoginStatus";
import { chartConstants } from "../utility/chartConstants";
import { getProfiles } from "../actions/profileActions";

class Dashboard extends React.Component {
  componentWillMount() {
    checkStatus();
    getProfiles();
  }

  render() {
    const {
      joinerCount,
      inProgressProfilesCount,
      offerProfilesCount
    } = this.props.stats.pieChart;
    const { referralCount, notReferralCount } = this.props.stats.refChart;
    const pieOptions = {
      title: chartConstants.labels.referralStatus,
      pieHole: 0.6,
      slices: [
        {
          color: chartConstants.colors.green
        },
        {
          color: chartConstants.colors.blue
        },
        {
          color: chartConstants.colors.yellow
        },
        {
          color: chartConstants.colors.orange
        }
      ],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: chartConstants.colors.black,
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
                [chartConstants.labels.status, chartConstants.labels.count],
                [chartConstants.labels.joined, joinerCount],
                [chartConstants.labels.offerMade, offerProfilesCount],
                [chartConstants.labels.inProgress, inProgressProfilesCount]
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
                [
                  chartConstants.labels.typeOfApplication,
                  chartConstants.labels.count
                ],
                [chartConstants.labels.referral, referralCount],
                [chartConstants.labels.newEmployees, notReferralCount]
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
                [
                  chartConstants.labels.month,
                  chartConstants.labels.applications,
                  chartConstants.labels.offers,
                  chartConstants.labels.joiners
                ],
                ["Jan", 50, 10, 5],
                ["Feb", 47, 15, 9],
                ["Mar", 8, 3, 0],
                ["Apr", 18, 5, 2],
                ["May", 29, 9, 6],
                ["Jun", 43, 12, 8]
              ]}
              options={{
                title: chartConstants.labels.referrerChart,
                // Material design options
                chart: {
                  title: chartConstants.labels.referrerChart
                }
              }}
              // For tests
              rootProps={{ "data-testid": "2" }}
            />
          </Col>
        </Row>
        <Row>
          <ProfilesTable
            profiles={this.props.profiles}
            statusList={this.props.statusList}
            editUser={true}
            createComment={this.props.createComment}
            startIndex={0}

          />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
