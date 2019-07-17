import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/es/Card";
import Form from "react-bootstrap/es/Form";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";
import { Redirect } from "react-router-dom";
import Modal from "react-bootstrap/es/Modal";
import RichEditor from "./RichEditor";

class AddProfile extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    referred: false,
    referredBy: "",
    inNL: true,
    status: "",
    redirect: false,
    displayNotification: false,
    memberId: sessionStorage.getItem("memberId"),
    disabledRefferedBy: false
  };

  componentDidMount() {
    this.props.getSkillSetList();
    this.props.getStatusList();
  }

  addProfile = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      const profile = JSON.stringify(this.state);
      this.props.createProfile(profile);
    }

    this.setState({ validated: true });
    this.setState({ displayNotification: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  setComment = comment => {
    this.setState({ comment: comment });
  };

  render() {
    return (
      <Container>
        {this.renderRedirect()}
        <Row>
          <h1>Add Profile</h1>
        </Row>
        <Row>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={e => this.addProfile(e)}
              >
                <h5>Personal Info</h5>
                <hr />
                <Row>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileName" as={Row}>
                      <Form.Label column sm="4" md="12">
                        Name
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          required
                          onChange={e =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileEmail" as={Row}>
                      <Form.Label column sm="4" md="12">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="email"
                          required
                          placeholder="Enter email"
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profilePhone" as={Row}>
                      <Form.Label column sm="8" md="12">
                        Phone Number
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          required
                          placeholder="Enter Phone number"
                          onChange={e =>
                            this.setState({ phone: e.target.value })
                          }
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileSkill" as={Row}>
                      <Form.Label column sm="4" md="12">
                        Skill set
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          as="select"
                          required
                          onChange={e =>
                            this.setState({ skill: e.target.value })
                          }
                        >
                          <option />
                          {this.props.skillSets.map(skill => (
                            <option value={skill}>{skill}</option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileInNetherlands" as={Row}>
                      <Form.Label column sm="8" md="12">
                        Available in NL
                      </Form.Label>
                      <Col sm="10">
                        <Form.Check
                          required
                          inline
                          label="Yes"
                          type="radio"
                          name={`inNL`}
                          onChange={e => this.setState({ inNL: true })}
                        />
                        <Form.Check
                          required
                          inline
                          label="No"
                          type="radio"
                          name={`inNL`}
                          onChange={e => this.setState({ inNL: false })}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <h5>Referral Info</h5>
                <hr />
                <Row>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileReferral" as={Row}>
                      <Form.Label column sm="8" md="12">
                        Is Referred
                      </Form.Label>
                      <Col sm="10">
                        <Form.Check
                          required
                          inline
                          label="Yes"
                          type="radio"
                          name={`isReferral`}
                          onChange={e => {this.setState({referred: true});
                            this.setState({disabledRefferedBy:false});
                          }}
                        />
                        <Form.Check
                          inline
                          required
                          label="No"
                          type="radio"
                          name={`isReferral`}
                          onChange={e => {this.setState({referred: false});
                            this.setState({referredBy:null});        
                            this.setState({disabledRefferedBy:true});
                          }}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileReferredBy" as={Row}>
                      <Form.Label column sm="8" md="12">
                        Referred By
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required = {(this.state.disabledRefferedBy)? "true" : "false"}
                          type="text"
                          placeholder="Enter Name"
                          disabled = {(this.state.disabledRefferedBy)? "disabled" : ""}
                          onChange={e =>
                            this.setState({ referredBy: e.target.value })
                          }
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col />
                  <Col />
                </Row>
                <Row />
                <h5>Status Info</h5>
                <hr />
                <Row>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileStatus" as={Row}>
                      <Form.Label column sm="4" md="12">
                        Status
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          required
                          as="select"
                          onChange={e =>
                            this.setState({ status: e.target.value })
                          }
                        >
                          <option />
                          {this.props.statusList.map(status => (
                            <option value={status}>{status}</option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="8">
                    <Form.Group controlId="profileStatus" as={Row}>
                      <Form.Label column sm="4" md="12">
                        Comment
                      </Form.Label>
                      <RichEditor
                        editorState={this.state.editorState}
                        setContent={this.setComment}
                        placeholder="Comments..."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="2" md="12">
                    <Button type="submit">Add Profile</Button>
                  </Col>
                  <Col sm="9" />
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Row>
        <Modal
          size="lg"
          show={this.state.displayNotification}
          onHide={() =>
            this.setState({ displayNotification: false, redirect: true })
          }
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Candidate added
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <h5>
                  {this.props.notification["name"]} has been added as a
                  candidate with status "{this.props.notification["status"]}"
                </h5>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default AddProfile;
