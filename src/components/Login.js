import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/es/Card";
import Form from "react-bootstrap/es/Form";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={4} />
          <Col sm={6} lg={4}>
            <Card>
              <img
                alt={"logo"}
                src="../assets/imgs/GCI.png"
                style={{ width: "60%", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form.Group controlId="username" as={Row}>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ex: user@cgi.com"
                    required
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="username" as={Row}>
                  <Form.Label column sm="4" md="12">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Form.Group>
                <Button type="submit" variant="danger" block>
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
