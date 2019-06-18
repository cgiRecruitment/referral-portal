import React from "react";
import Table from "react-bootstrap/Table";
import Status from "./Status";
import Modal from "react-bootstrap/es/Modal";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEdit, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/es/Form";
import Button from "react-bootstrap/es/Button";
import {constants} from "../utility/constants";
library.add(faEye);
library.add(faEdit);
library.add(faCalendarPlus)


class CustomTable extends React.Component {
  state = {
    showProfile: false,
    editProfile: false,
    status: "",
    validated: false,
    meetingRoom: "",
    interviewer: "",
    date: "",
    candidateId:""
  };

  componentWillMount() {

  }

  update = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      let formData = JSON.stringify(this.state);
    // this.props.updateProfile(formData)
        fetch(constants.host+"/candidates/candidate/"+this.state.selectedProfile[0]["id"]+"/status", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: formData
        })
       .then(() => {
           this.setState({ editProfile: false })
       });
      }
    this.setState({ validated: true });
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
      {this.setState({candidateId: this.state.selectedProfile[0]["id"]})};
      console.log(this.state.candidateId)
      this.props.createInterview(JSON.stringify(this.state));
    }
    this.setState({validated: true,
      scheduleInterview: false});
  };

  addCandidateComment = e => {
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      let formData = JSON.stringify(this.state);
      // this.props.updateProfile(formData)
      fetch(constants.host+"/candidates/candidate/"+this.state.selectedProfile[0]["id"]+"/comments", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: formData
      })
          .then(() => {
            this.setState({ addComment: false })
          });
    }
    this.setState({ validated: true });
  };

  render() {
    const head = [
      "#",
      "Name",
      "Email",
      "ReferredBy",
      "Skills",
      "Status",
     // "View",
        ...(this.props.scheduleInterview ? ["Schedule Interview"] :[]),
        ...(this.props.editUser ? ["Edit"] : [])
    ];
    return (
      <React.Fragment>
        {this.state.selectedProfile && (
          <Modal
            size="lg"
            show={this.state.showProfile}
            onHide={() => this.setState({ showProfile: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {this.state.selectedProfile[0]["name"]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Personal Info</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{this.state.selectedProfile[0]["name"]}</td>
                      </tr>
                      <tr>
                        <td>In Netherlands</td>
                        <td>{this.state.selectedProfile[0]["inNL"] ? 'Yes' : 'No'}</td>
                      </tr>
                      <tr>
                        <td>Skills</td>
                        <td>{this.state.selectedProfile[0]["skill"]}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Referral Info</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Has been referred</td>
                        <td>{this.state.selectedProfile[0]["referred"] ? 'Yes' : 'No'}</td>
                      </tr>
                      <tr>
                        <td>Referred by</td>
                        <td>{this.state.selectedProfile[0]["referredBy"]}</td>
                      </tr>
                      <tr>
                        <td>Received Date</td>
                        <td>
                          {this.state.selectedProfile[0]["receivedDate"]}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Status Info</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td>{this.state.selectedProfile[0]["status"]}</td>
                      </tr>
                      <tr>
                        <td>Last update</td>
                        <td>
                          {this.state.selectedProfile[0]["statusLastUpdated"]}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Comments</h5>
                  <Table striped bordered hover>
                    <tbody>
                    {this.state.selectedProfile[0].comments &&
                    this.state.selectedProfile[0].comments.map(details =>
                        <tr>
                          <td>{details.comment}</td>
                          <td>{details.memberName}</td>
                          <td>{details.date}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
                <Row>
                    <Col>
                        <h5>Interview Info</h5>
                        <Table striped bordered hover>
                            <tbody>
                            {this.state.selectedProfile[0].interviews &&
                            this.state.selectedProfile[0].interviews.map(interview =>
                                <tr>
                                    <td>{interview.date}</td>
                                    <td>{interview.type}</td>
                                    <td>{interview.interviewer}</td>
                                    {/*<td>{interview.comments}</td>*/}
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
              <Row>
                <Col sm="9" />
                <Col sm="3">
                  <a
                      href="javascript:void(0)"
                      onClick={() =>
                        this.setState({
                          showProfile: false,
                          addComment: true
                      })
                      }
                    >
                  <Button>Add comment</Button>
                  </a>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        )}
        {this.state.selectedProfile && (
            <Modal
                size="lg"
                show={this.state.addComment}
                onHide={() => this.setState({ addComment: false })}
                aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {this.state.selectedProfile[0]["name"]}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                <Col>
                  <h5>Earlier Comments</h5>
                  <Table striped bordered hover>
                    <tbody>
                    {this.state.selectedProfile[0].comments &&
                    this.state.selectedProfile[0].comments.map(details =>
                        <tr>
                          <td>{details.comment}</td>
                          <td>{details.memberName}</td>
                          <td>{details.date}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </Col>
                </Row>
                <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.addCandidateComment(e)}
                >
                <Row>
                  <Col>
                    <h4>Comment:</h4>
                <tr>
                  <td>
                    <Form.Group controlId="profileStatus" as={Row}>
                      <Form.Control
                          as="textarea"
                          rows="2"
                          cols="250"
                          required
                          onChange={e =>
                              this.setState({ comment: e.target.value })
                          }
                      />
                    </Form.Group>
                  </td>
                </tr>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>From:</h4>
                    <tr>
                      <td>
                        <Form.Group controlId="profileStatus" as={Row}>
                          <Form.Control
                              as="textarea"
                              rows="2"
                              cols="250"
                              required
                              onChange={e =>
                                  this.setState({ memberName: e.target.value })
                              }
                          />
                        </Form.Group>
                      </td>
                    </tr>
                  </Col>
                </Row>
                <Row>
                  <Col sm="9" />
                  <Col sm="3">
                    <Button type="submit">Add comment</Button>
                  </Col>
                </Row>
                </Form>
              </Modal.Body>
            </Modal>
        )}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {head.map(head => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.profiles &&
              this.props.profiles.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>
                    <a
                        href="javascript:void(0)"
                        onClick={() =>
                            this.setState({
                              showProfile: true,
                              selectedProfile: this.props.profiles.filter(
                                  profile => profile.id === item.id
                              )
                            })
                        }
                    >{" "}
                      {item.name}
                </a>{" "}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.referredBy}</td>
                  <td>{item.skill}</td>
                  <td>
                    <Status>{item.status}</Status>
                  </td>
                  {/*<td>*/}
                  {/*  <a*/}
                  {/*    href="javascript:void(0)"*/}
                  {/*    onClick={() =>*/}
                  {/*      this.setState({*/}
                  {/*        showProfile: true,*/}
                  {/*        selectedProfile: this.props.profiles.filter(*/}
                  {/*          profile => profile.id === item.id*/}
                  {/*        )*/}
                  {/*      })*/}
                  {/*    }*/}
                  {/*  >*/}
                  {/*    {" "}*/}
                  {/*    <FontAwesomeIcon icon="eye" />*/}
                  {/*  </a>{" "}*/}
                  {/*</td>*/}
                    {this.props.scheduleInterview && <td>
                      <a
                          href="javascript:void(0)"
                          onClick={() =>
                              this.setState({
                                makeAppointment: true,
                                selectedProfile: this.props.profiles.filter(
                                    profile => profile.id === item.id
                                )
                              })
                          }
                          >
                        {" "}
                    <FontAwesomeIcon icon="calendar-plus" />
                      </a>
                  </td> }
                  { this.props.editUser && <td>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        this.setState({
                          editProfile: true,
                          selectedProfile: this.props.profiles.filter(
                            profile => profile.id === item.id
                          )
                        })
                      }
                    >
                      {" "}
                      <FontAwesomeIcon icon="edit" />
                    </a>
                  </td> }
                </tr>
              ))}
          </tbody>
        </Table>
        {this.state.selectedProfile && (
          <Modal
            size="lg"
            show={this.state.editProfile}
            onHide={() => this.setState({ editProfile: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {this.state.selectedProfile[0]["name"]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Edit Candidate</h5>
                  <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.update(e)}
                  >
                    <Table striped bordered hover>
                      <tbody>
                      <tr>
                        <td>Name</td>
                        <td>
                          <Form.Group controlId="profileStatus" as={Row}>
                            <Form.Control
                                as="textarea"
                                rows="1"
                                defaultValue={this.state.selectedProfile[0]["name"]}
                                required
                                onChange={e =>
                                    this.setState({ name: e.target.value })
                                }
                            />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <Form.Group controlId="profileStatus" as={Row}>
                            <Form.Control
                                as="textarea"
                                rows="1"
                                defaultValue={this.state.selectedProfile[0]["email"]}
                                required
                                onChange={e =>
                                    this.setState({ email: e.target.value })
                                }
                            />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>
                          <Form.Group controlId="profileStatus" as={Row}>
                            <Form.Control
                                as="textarea"
                                rows="1"
                                defaultValue={this.state.selectedProfile[0]["phone"]}
                                required
                                onChange={e =>
                                    this.setState({ phone: e.target.value })
                                }
                            />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td>Skill</td>
                        <td>
                          <Form.Control
                              as="select"
                              defaultValue={this.state.selectedProfile[0]["skill"]}
                              onChange={e =>
                                  this.setState({ skill: e.target.value })
                              }
                              required
                          >
                            <option/>
                            {this.props.skillSets &&
                            this.props.skillSets.map(skill => (
                                <option value={skill}>
                                  {skill}
                                </option>
                            ))}
                          </Form.Control>
                        </td>
                      </tr>
                        <tr>
                          <td>Status</td>
                          <td>
                            <Form.Control
                              as="select"
                              defaultValue={this.state.selectedProfile[0]["status"]}
                              onChange={e =>
                                this.setState({ status: e.target.value })
                              }
                              required
                            >
                              <option/>
                              {this.props.statusList &&
                                this.props.statusList.map(status => (
                                  <option selected={this.state.selectedProfile[0]["status"]}
                                          value={status}>
                                    {status}
                                  </option>
                                ))}
                            </Form.Control>

                          </td>
                        </tr>
                      <tr>
                        <td>In NL</td>
                        <td>
                          <Form.Check
                              inline
                              label="Yes"
                              type="radio"
                              name={`isReferral`}
                              onChange={e => this.setState({referred: true})}
                          />
                          <Form.Check
                              inline
                              label="No"
                              type="radio"
                              name={`isReferral`}
                              onChange={e => this.setState({referred: false})}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Referred</td>
                        <td>
                      <Form.Check
                          inline
                          label="Yes"
                          type="radio"
                          name={`isReferral`}
                          onChange={e => this.setState({referred: true})}
                      />
                      <Form.Check
                          inline
                          label="No"
                          type="radio"
                          name={`isReferral`}
                          onChange={e => this.setState({referred: false})}
                      />
                        </td>
                      </tr>
                      <tr>
                        <td>Referred by</td>
                        <td>
                          <Form.Group controlId="profileStatus" as={Row}>
                            <Form.Control
                                required
                                type="text"
                                defaultValue={this.state.selectedProfile[0]["referredBy"]}
                                onChange={e =>
                                    this.setState({referredBy: e.target.value})
                                }
                            />
                          </Form.Group>
                        </td>
                      </tr>


                        { this.state.status === "scheduled" &&
                        <React.Fragment>
                        <tr>
                          <td>Meeting Rooms</td>
                          <td>
                            <Form.Control
                                as="select"
                                onChange={e =>
                                    this.setState({ meetingRoom: e.target.value })
                                }
                                required
                            >
                              <option/>
                              {this.props.meetingRooms &&
                              this.props.meetingRooms.map(room => (
                                  <option value={room.key}>
                                    {room.value}
                                  </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Interviewer</td>
                          <td>
                            <Form.Control
                                as="select"
                                onChange={e =>
                                    this.setState({ interviewer: e.target.value })
                                }
                                required
                            >
                              <option/>
                              {this.props.interviewers &&
                              this.props.interviewers.map(interviewer => (
                                  <option value={interviewer.key}>
                                    {interviewer.value}
                                  </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td>
                            <Form.Control
                                type="date"
                                onChange={e =>
                                    this.setState({ date: e.target.value })
                                }
                                required
                            />
                          </td>
                        </tr>
                        </React.Fragment>}
                      </tbody>
                    </Table>

                    <Row>
                      <Col sm="9" />
                      <Col sm="3">
                        <Button type="submit">Update Profile</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="9" />
                      <Col sm="3">
                        <a
                            href="javascript:void(0)"
                            onClick={() =>
                                this.setState({
                                  editProfile: false,
                                  addComment: true
                                })
                            }
                        >
                          <Button>Add comment</Button>
                        </a>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        )}
        {this.state.selectedProfile && (
            <Modal
                size="lg"
                show={this.state.makeAppointment}
                onHide={() => this.setState({ makeAppointment: false })}
                aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Schedule Interview
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col>
                    <h5>{this.state.selectedProfile[0]["name"]}</h5>
                    <Form
                        noValidate
                        validated={this.state.validated}
                        onSubmit={e => this.addInterview(e)}
                    >
                      <Table striped bordered hover>
                        <tbody>
                        <tr>
                          <td>Date</td>
                          <td>
                            <Form.Group controlId="profileStatus" as={Row}>
                              <Form.Control
                                  type="date"
                                  onChange={e =>
                                      this.setState({date: e.target.value})
                                  }
                              />
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td>Time</td>
                          <td>
                            <Form.Group controlId="profileStatus" as={Row}>
                              <Form.Control
                                  type="time"
                                  onChange={e =>
                                      this.setState({time: e.target.value})
                                  }
                              />
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td>Interviewers</td>
                            <Form.Control
                                type="text"
                                onChange={e =>
                                    this.setState({interviewer: e.target.value})
                                }
                            />
                        </tr>
                        <tr>
                          <td>Interview type</td>
                          <td>
                            <Form.Control
                                as="select"
                                onChange={e =>
                                    this.setState({ type: e.target.value })
                                }
                                required
                            >
                              <option/>
                              {this.props.interviewTypes &&
                              this.props.interviewTypes.map(type => (
                                  <option value={type}>
                                    {type}
                                  </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>

                        <tr>
                          <td>Location</td>
                          <td>
                            <Form.Control
                                as="select"
                                onChange={e =>
                                    this.setState({ location: e.target.value })
                                }
                                required
                            >
                              <option/>
                              {this.props.meetingRooms &&
                              this.props.meetingRooms.map(room => (
                                  <option value={room}>
                                    {room}
                                  </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        {/*<tr>*/}
                        {/*  <td>Comments</td>*/}
                        {/*  <td>*/}
                        {/*    <Form.Control*/}
                        {/*        type="text"*/}
                        {/*        onChange={e =>*/}
                        {/*            this.setState({comment: e.target.value})*/}
                        {/*        }*/}
                        {/*    />*/}
                        {/*  </td>*/}
                        {/*</tr>*/}
                        </tbody>
                      </Table>

                      <Row>
                        <Col sm="9" />
                        <Col sm="3">
                          <Button type="submit">Schedule Interview</Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default CustomTable;
