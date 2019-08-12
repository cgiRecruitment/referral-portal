import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    const form = e.currentTarget;
    let hash = require("object-hash");
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      this.props.login({
        username: this.state.username,
        password: hash(this.state.password)
      });
    }
    this.setState({ validated: true });
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
                <Form
                  noValidate
                  validated={this.state.validated}
                  onSubmit={e => this.login(e)}
                >
                  <Form.Group controlId="username" as={Row}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ex: user@cgi.com"
                      required
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
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
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Button type="submit" variant="danger" block>
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
