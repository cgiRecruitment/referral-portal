import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/es/Col";
import "./calenderStyle.css";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/es/Row";
import Form from "react-bootstrap/es/Form";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/Tab";
import InterviewsTable from "./InterviewsTable";
import Button from "react-bootstrap/es/Button";

class AddProfile extends React.Component {
  componentWillMount() {
    this.props.getAvailabilityOverview();
  }

  state = {
    key: "",
    candidateId: "",
    date:"",
    time: "",
    interviewer: "",
    location: "",
  };

  addInterview = e => {
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      this.props.createInterview(JSON.stringify(this.state));
    }
    this.setState({validated: true});
  };

  render() {
    return (
      <Container fluid={true} className="availabilityContainer">
        <Col md={3} className="availabilityPanel">
          <h5 className={"availabilityPanelHeader"}>Availability Overview</h5>
          {this.props.availabilityOverview.map(item => (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>{`Beschibaar ${item.name}`}</th>
                  <th>Van</th>
                  <th>Tot</th>
                </tr>
              </thead>
              <tbody>
                {item.schedule.map(schedule => (
                  <tr>
                    <td>{schedule.date}</td>
                    <td>{schedule.from}</td>
                    <td>{schedule.to}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ))}
        </Col>
        <Col md={9} className="calender">
          <Form
              noValidate
              validated={this.state.validated}
              onSubmit={e => this.addInterview(e)}
          >
          <Row>
            <Col md="2" />
            <Col md="2">
              <Form.Label column sm="4" md="12">
                Candidate
              </Form.Label>
              <Form.Label column sm="4" md="12">
                Date:
              </Form.Label>
              <Form.Label column sm="4" md="12">
                Time
              </Form.Label>
              <Form.Label column sm="4" md="12">
                Interviewers
              </Form.Label>
              <Form.Label column sm="4" md="12">
                Location
              </Form.Label>
            </Col>
            <Col md="3">
              <Form.Control
                  as="select"
                  required
                  onChange={e =>
                      this.setState({candidateId: e.target.value})
                  }
              >
                {this.props.activeProfiles &&
                this.props.activeProfiles.map((profiles) =>(
                    <option value={profiles.id}>{profiles.name}</option>
                ))}
              </Form.Control>
              <Form.Control
                type="date"
                onChange={e =>
                    this.setState({date: e.target.value})
                }
              />
              <Form.Control
                  type="time"
                  onChange={e =>
                      this.setState({time: e.target.value})
                  }
              />
              <Form.Control
                  type="text"
                  onChange={e =>
                      this.setState({interviewer: e.target.value})
                  }
              />
              <Form.Control
                  type="text"
                  onChange={e =>
                      this.setState({location: e.target.value})
                  }
              />
            </Col>
            <Col md="3">
              <Button type="submit">Schedule Interview</Button>
            </Col>
          </Row>
          </Form>
          <hr />
          <Row>
              <InterviewsTable
                  interviews={this.props.interviews}
                  statusList={this.props.statusList}
                  editInterview={true}
              />
            <Col>
              {this.props.schedules && this.props.schedules.interviews && (
                <Tabs
                  id="controlled-tab-example"
                  activeKey={this.state.key}
                  onSelect={key => this.setState({ key })}
                >
                  {this.props.schedules.interviews.map(interview => (
                    <Tab
                      eventKey={interview.meetingRoom}
                      title={interview.meetingRoom}
                    >
                      <Col md={6}>
                        <Row>
                          <Table striped bordered hover>
                            <tbody>
                              <tr>
                                <td width="120">Interviewer</td>
                                <td>{interview.interviewer}</td>
                              </tr>
                            </tbody>
                          </Table>
                          {interview.schedules.map(schedule => (
                            <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td width="120">Time</td>
                                  <td>{schedule.time}</td>
                                </tr>
                                <tr>
                                  <td width="120">Candidate</td>
                                  <td>{schedule.candidate}</td>
                                </tr>
                              </tbody>
                            </Table>
                          ))}
                        </Row>
                      </Col>
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Col>
          </Row>
        </Col>

      </Container>
    );
  }
}

export default AddProfile;
