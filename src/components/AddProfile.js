import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/es/Card";
import Form from "react-bootstrap/es/Form";
import Col from "react-bootstrap/es/Col";

class AddProfile extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1>Add Profile</h1>
                </Row>
                <Row>
                    <Card style={{width: '100%'}}>
                        <Card.Body>
                            <Card.Title>Enter Profile Details</Card.Title>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="profileName" as={Row}>
                                            <Form.Label column sm="4">Name</Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="text" placeholder="Enter Name"/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="profileEmail" as={Row}>
                                            <Form.Label column sm="4">Email</Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="email" placeholder="Enter email"/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                <Form.Group controlId="profileReferral" as={Row}>
                                    <Form.Label column sm="4">Is Referred</Form.Label>
                                    <Col sm="10">
                                        <Form.Check inline label="Yes" type="radio" id={`inline-radio-1`}/>
                                        <Form.Check inline label="No" type="radio" id={`inline-radio-2`}/>
                                    </Col>
                                </Form.Group>
                                    </Col>
                                    <Col>
                                <Form.Group controlId="profileReferredBy" as={Row}>
                                    <Form.Label column sm="4">Referred By</Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="text" placeholder="Enter Name"/>
                                    </Col>
                                </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                <Form.Group controlId="profileInNetherlands" as={Row}>
                                    <Form.Label column sm="4">Available in NL</Form.Label>
                                    <Col sm="10">
                                        <Form.Check inline label="Yes" type="radio" id={`inline-radio-1`}/>
                                        <Form.Check inline label="No" type="radio" id={`inline-radio-2`}/>
                                    </Col>
                                </Form.Group>
                                    </Col>
                                    <Col>
                                <Form.Group controlId="profileSkill" as={Row}>
                                    <Form.Label column sm="4">Skill set</Form.Label>
                                    <Col sm="10">
                                        <Form.Control as="select">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                <Form.Group controlId="profileStatus" as={Row}>
                                    <Form.Label column sm="4">Status</Form.Label>
                                    <Col sm="10">
                                        <Form.Control as="select">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                    </Col>
                                    <Col/>
                                </Row>

                            </Form>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>
        )
    }
}

export default AddProfile;
