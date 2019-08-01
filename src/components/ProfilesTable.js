import React from "react";
import Table from "react-bootstrap/Table";
import Status from "./Status";
import Modal from "react-bootstrap/es/Modal";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faEdit,
  faCalendarPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/es/Form";
import Button from "react-bootstrap/es/Button";
import { getProfiles } from "../actions/profileActions";
import { constants } from "../utility/constants";
import FilterComponent from "./SelectFilter";
import RichEditor from "./RichEditor";
import RichTextDisplay from "./RichTextDisplay";
import { getEditorState } from "../utility/RichTextHelper";
library.add(faEye);
library.add(faEdit);
library.add(faCalendarPlus);

class CustomTable extends React.Component {
  state = {
    showProfile: false,
    editProfile: false,
    status: "",
    validated: false,
    meetingRoom: "",
    interviewer: "",
    date: "",
    candidateId: "",
    downloadFile: "",
    memberId: sessionStorage.getItem("memberId")
  };

  componentWillMount() {
    getProfiles();
  }

  update = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      this.props.updateProfile(this.state).then(() => {
        this.setState({ editProfile: false });
      });
    }

    this.setState({ validated: true });
  };

  addInterview = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      this.props.createInterview(this.state).then(() => {
        this.setState({ makeAppointment: false });
      });
    }
    this.setState({ validated: true });
  };

  addCandidateComment = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      this.props.createComment(this.state).then(() => {
        this.setState({ addComment: false });
      });
    }
    this.setState({ validated: true });
  };

  setComment = comment => {
    this.setState({ comment: comment });
  };

  downloadFiles = (files) => {
    this.props.getFileDownloadLink(files)
  };

  render() {
    const {
      name,
      inNL,
      email,
      skill,
      referred,
      referredBy,
      receivedDate,
      status,
      statusLastUpdated,
      comments,
      interviews,
      phone,
      filesInformation
    } =
      this.state && this.state.selectedProfile
        ? this.state.selectedProfile[0]
        : {};

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
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Profile Information</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <td>In Netherlands</td>
                        <td>{inNL ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <td>Skills</td>
                        <td>{skill}</td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>{status}</td>
                      </tr>
                      <tr>
                        <td>Last update</td>
                        <td>{statusLastUpdated}</td>
                      </tr> 
                      <tr>
                        <td>Documents</td>
                        <td>
                      {filesInformation &&
                        filesInformation.map(files => (
                          <tr>
                            <td> <a
                      href="javascript:void(0)"
                      onClick={() => this.downloadFiles(files)}>{files.fileName}</a></td>
                          </tr>
                        ))}  
                                                            
                  </td>
                      </tr> 
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Referral Information</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Has been referred</td>
                        <td>{referred ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>Referred by</td>
                        <td>{referredBy}</td>
                      </tr>
                      <tr>
                        <td>Received Date</td>
                        <td>{receivedDate}</td>
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
                      {comments &&
                        comments.map(details => (
                          <tr>
                            <td>
                              <RichTextDisplay
                                editorState={getEditorState(details.comment)}
                              />
                            </td>
                            <td>{details.memberName}</td>
                            <td>{details.date}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Interview Information</h5>
                  <Table striped bordered hover>
                    <tbody>
                      {interviews &&
                        interviews.map(interview => (
                          <tr>
                            <td>{interview.date}</td>
                            <td>{interview.type}</td>
                            <td>{interview.interviewer}</td>
                          </tr>
                        ))}
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
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Earlier Comments</h5>
                  <Table striped bordered hover>
                    <tbody>
                      {comments &&
                        comments.map(details => (
                          <tr>
                            <td>
                              <RichTextDisplay
                                editorState={getEditorState(details.comment)}
                              />
                            </td>
                            <td>{details.memberName}</td>
                            <td>{details.date}</td>
                          </tr>
                        ))}
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
                    <h5>Comment:</h5>
                    <tr>
                      <td>
                        <Form.Group controlId="profileStatus" as={Row}>
                          <RichEditor
                            editorState={this.state.editorState}
                            setContent={this.setComment}
                            placeholder="Comments..."
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
              <th key={"#"}>{"#"}</th>
              <th key={"Name"}>{"Name"}</th>
              <th key={"Skills"}>{"Skills"}</th>
              <th key={"Received Date"}>{"Received Date"}</th>

              {this.props.scheduleInterview && (
                <th>
                  <FilterComponent
                    statusSelected={this.props.statusList.filter(
                      status => constants.REJECTED !== status
                    )}
                    filterProfiles={this.props.filterProfiles}
                  />
                </th>
              )}
              {!this.props.scheduleInterview && (
                <th key={"Status"}>{"Status"}</th>
              )}

              <th key={"Excel ID"}>{"Excel ID"}</th>
              {this.props.scheduleInterview && (
                <th key={"Add Interview"}>
                  {this.props.scheduleInterview ? ["Add Interview"] : []}
                </th>
              )}
              {this.props.editUser && (
                <th>{this.props.editUser ? ["Edit"] : []}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.props.profiles &&
              this.props.profiles.map((item, i) => (
                <tr key={item.id}>
                  <td>{this.props.startIndex * constants.pageSize + i + 1}</td>
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
                    >
                      {" "}
                      {item.name}
                    </a>{" "}
                  </td>
                  <td>{item.skill}</td>
                  <td>
                    {item.receivedDate && item.receivedDate.substring(0, 10)}
                  </td>

                  <td>
                    <Status>{item.status}</Status>
                  </td>
                  <td>{item.idFromExcel}</td>
                  {this.props.scheduleInterview && (
                    <td>
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
                    </td>
                  )}
                  {this.props.editUser && (
                    <td>
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
                    </td>
                  )}
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
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col sm="9">
                  <h5>Edit Candidate</h5></Col>
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
              <Row>
                <Col>
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
                                defaultValue={name}
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
                                defaultValue={email}
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
                                defaultValue={phone}
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
                              defaultValue={skill}
                              onChange={e =>
                                this.setState({ skill: e.target.value })
                              }
                              required
                            >
                              <option />
                              {this.props.skillSets &&
                                this.props.skillSets.map(skill => (
                                  <option value={skill}>{skill}</option>
                                ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Status</td>
                          <td>
                            <Form.Control
                              as="select"
                              defaultValue={status}
                              onChange={e =>
                                this.setState({ status: e.target.value })
                              }
                              required
                            >
                              <option />
                              {this.props.statusList &&
                                this.props.statusList.map(status => (
                                  <option
                                    selected={
                                      this.state.selectedProfile[0]["status"]
                                    }
                                    value={status}
                                  >
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
                              defaultChecked={inNL}
                              name={`inNL`}
                              onChange={e => this.setState({ inNL: true })}
                            />
                            <Form.Check
                              inline
                              label="No"
                              type="radio"
                              defaultChecked={!inNL}
                              name={`inNL`}
                              onChange={e => this.setState({ inNL: false })}
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
                              defaultChecked={referred}
                              name={`isReferral`}
                              onChange={e => this.setState({ referred: true })}
                            />
                            <Form.Check
                              inline
                              label="No"
                              type="radio"
                              defaultChecked={!referred}
                              name={`isReferral`}
                              onChange={e => this.setState({ referred: false })}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Referred by</td>
                          <td>
                          <Form.Group controlId="referredBy" as={Row}>
                              <Form.Control
                                required = {(this.state.disabledRefferedBy)? true : false}
                                type="text"
                                defaultValue={referredBy}
                                disabled = {(this.state.disabledRefferedBy)? "disabled" : ""}
                                onChange={e =>
                                  this.setState({ referredBy: e.target.value })
                                }
                              />
                            </Form.Group>
                          </td>
                        </tr>

                        {this.state.status === "scheduled" && (
                          <React.Fragment>
                            <tr>
                              <td>Meeting Rooms</td>
                              <td>
                                <Form.Control
                                  as="select"
                                  onChange={e =>
                                    this.setState({
                                      meetingRoom: e.target.value
                                    })
                                  }
                                  required
                                >
                                  <option />
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
                                    this.setState({
                                      interviewer: e.target.value
                                    })
                                  }
                                  required
                                >
                                  <option />
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
                          </React.Fragment>
                        )}
                      </tbody>
                    </Table>

                    <Row>
                      <Col sm="9" />
                      <Col sm="3">
                        <Button type="submit">Update Profile</Button>
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
                  <h5>{name}</h5>
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
                                  this.setState({ date: e.target.value })
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
                                  this.setState({ time: e.target.value })
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
                              this.setState({ interviewer: e.target.value })
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
                              <option />
                              {this.props.interviewTypes &&
                                this.props.interviewTypes.map(type => (
                                  <option value={type}>{type}</option>
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
                              <option />
                              {this.props.meetingRooms &&
                                this.props.meetingRooms.map(room => (
                                  <option value={room}>{room}</option>
                                ))}
                            </Form.Control>
                          </td>
                        </tr>
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
