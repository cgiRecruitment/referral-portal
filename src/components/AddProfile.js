import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/es/Card";
import Form from "react-bootstrap/es/Form";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";

class AddProfile extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    isReferred: false,
    referredBy: "",
    inNL: true,
    skillSet: "",
    status: "",
    comment: ""
  };
  addProfile = () => {
    const formData = new FormData();
    Object.keys(this.state).forEach(key =>
      formData.append(key, this.state[key])
    );
    formData.append("file", this.state.file);
    fetch("/candidate", {
      headers: {
        "content-type": "multipart/form-data"
      },
      method: "POST",
      body: formData
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <h1>Add Profile</h1>
        </Row>
        <Row>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Form>
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
                          onChange={e =>
                            this.setState({ skillSet: e.target.value })
                          }
                        >
                          <option>Choose...</option>
                          <option>...</option>
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
                          inline
                          label="Yes"
                          type="radio"
                          name={`inNL`}
                          onChange={e => this.setState({ inNL: true })}
                        />
                        <Form.Check
                          inline
                          label="No"
                          type="radio"
                          name={`inNL`}
                          onChange={e => this.setState({ inNL: false })}
                        />
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profilePhone" as={Row}>
                      <Form.Label column sm="8" md="12">
                        Upload Resume
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="file"
                          onChange={e => {
                            this.setState({ file: e.target.files[0] });
                          }}
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
                          inline
                          label="Yes"
                          type="radio"
                          name={`isReferral`}
                          onChange={e => this.setState({ isReferred: true })}
                        />
                        <Form.Check
                          inline
                          label="No"
                          type="radio"
                          name={`isReferral`}
                          onChange={e => this.setState({ isReferred: false })}
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
                          type="text"
                          placeholder="Enter Name"
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
                          as="select"
                          onChange={e =>
                            this.setState({ status: e.target.value })
                          }
                        >
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col xs="12" md="4">
                    <Form.Group controlId="profileStatus" as={Row}>
                      <Form.Label column sm="4" md="12">
                        Comment
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        onChange={e =>
                          this.setState({ comment: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="2" md="12" sm="12">
                    <Button type="button" onClick={e => this.addProfile()}>
                      Add Profile
                    </Button>
                  </Col>
                  <Col sm="9" />
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default AddProfile;
