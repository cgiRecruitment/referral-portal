import React from "react";
import Table from "react-bootstrap/Table";
import Status from "./Status";
import Modal from "react-bootstrap/es/Modal";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/es/Form";
import Button from "react-bootstrap/es/Button";
library.add(faEye);
library.add(faEdit);

class CustomTable extends React.Component {
  state = {
    showProfile: false,
    editProfile: false,
    status: "",
    comment: "",
    validated: false
  };

  updateProfile = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      const { status, comment } = this.state;
      if (status && comment) {
        fetch("/update/candidate", {
          headers: {
            "content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ status, comment })
        });
      }
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
      "View",
      "Edit"
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
                        <td>{this.state.selectedProfile[0]["in_nl"]}</td>
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
                        <td>Is Referral</td>
                        <td>{this.state.selectedProfile[0]["referral"]}</td>
                      </tr>
                      <tr>
                        <td>Referred By</td>
                        <td>{this.state.selectedProfile[0]["referred_by"]}</td>
                      </tr>
                      <tr>
                        <td>Received Date</td>
                        <td>
                          {this.state.selectedProfile[0]["received_date"]}
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
                        <td>Comment</td>
                        <td>{this.state.selectedProfile[0]["comments"]}</td>
                      </tr>
                      <tr>
                        <td>ID from Excel</td>
                        <td>
                          {this.state.selectedProfile[0]["id_from_excel"]}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        )}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {head.map(head => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.profiles &&
              this.props.profiles.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.referred_by}</td>
                  <td>{item.skill}</td>
                  <td>
                    <Status>{item.status}</Status>
                  </td>
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
                      <FontAwesomeIcon icon="eye" />
                    </a>{" "}
                  </td>
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
                  <h5>Status Update</h5>
                  <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.updateProfile(e)}
                  >
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Status</td>
                          <td>
                            <Form.Control
                              as="select"
                              onChange={e =>
                                this.setState({ status: e.target.value })
                              }
                              required
                            >
                              <option>Choose...</option>
                              {this.props.statusList &&
                                this.props.statusList.map(status => (
                                  <option value={status.key}>
                                    {status.value}
                                  </option>
                                ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Comment</td>
                          <td>
                            <Form.Group controlId="profileStatus" as={Row}>
                              <Form.Control
                                as="textarea"
                                rows="3"
                                required
                                onChange={e =>
                                  this.setState({ comment: e.target.value })
                                }
                              />
                            </Form.Group>
                          </td>
                        </tr>
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
      </React.Fragment>
    );
  }
}

export default CustomTable;
