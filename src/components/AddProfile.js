import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/es/Card";
import Form from "react-bootstrap/es/Form";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";

class AddProfile extends React.Component {
    state = {
            name:"",
            email:"",
            phone:"",
            isReferred:false,
            referredBy:"",
            inNL:true,
            skillSet:"",
            status:"",
            comment:""
    }
    addProfile = () => {
        fetch('/candidate',{
            method:'POST',
            body:JSON.stringify({receivedDate:new Date(), name:this.state.name, inNetherlands:this.state.inNl, referral:this.state.isReferred, referredBy:this.state.referredBy,status:this.state.status,skill:this.state.skillSet,comments:this.state.comment,phone:this.state.phone,emailAddress:this.state.email }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Add Profile</h1>
                </Row>
                <Row>
                    <Card style={{width: '100%'}}>
                        <Card.Body>
                            <Form>
                                <h5>Personal Info</h5>
                                <hr />
                                <Row>

                                    <Col>
                                        <Form.Group controlId="profileName" as={Row}>
                                            <Form.Label column sm="4">Name</Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => this.setState({name:e.target.value})}/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="profileEmail" as={Row}>
                                            <Form.Label column sm="4">Email</Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.setState({email:e.target.value})}/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="profilePhone" as={Row}>
                                            <Form.Label column sm="8">Phone Number</Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="text" placeholder="Enter Phone number" onChange={(e) => this.setState({phone:e.target.value})}/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="profileSkill" as={Row}>
                                            <Form.Label column sm="4">Skill set</Form.Label>
                                            <Col sm="10">
                                                <Form.Control as="select" onChange={(e) => this.setState({skillSet:e.target.value})}>
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="profileInNetherlands" as={Row}>
                                            <Form.Label column sm="8">Available in NL</Form.Label>
                                            <Col sm="10">
                                                <Form.Check inline label="Yes" type="radio" name={`inNL`} onChange={(e) => this.setState({inNL:true})}/>
                                                <Form.Check inline label="No" type="radio" name={`inNL`}  onChange={(e) => this.setState({inNL:false})}/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h5>Referral Info</h5>
                                <hr />
                                <Row>
                                    <Col>
                                        <Form.Group controlId="profileReferral" as={Row}>
                                            <Form.Label column sm="8">Is Referred</Form.Label>
                                            <Col sm="10">
                                                <Form.Check inline label="Yes" type="radio" name={`isReferral`} onChange={(e) => this.setState({isReferred:true})}/>
                                                <Form.Check inline label="No" type="radio" name={`isReferral`} onChange={(e) => this.setState({isReferred:false})}/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="profileReferredBy" as={Row}>
                                            <Form.Label column sm="8">Referred By</Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => this.setState({referredBy:e.target.value})}/>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col/><Col/>
                                </Row>
                                <Row>
                                </Row>
                                <h5>Status Info</h5>
                                <hr />
                                <Row>
                                    <Col>
                                        <Form.Group controlId="profileStatus" as={Row}>
                                            <Form.Label column sm="4">Status</Form.Label>
                                            <Col sm="10">
                                                <Form.Control as="select" onChange={(e) => this.setState({status:e.target.value})}>
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="profileStatus" as={Row}>
                                            <Form.Label column sm="4">Comment</Form.Label>
                                            <Form.Control as="textarea" rows="3" onChange={(e) => this.setState({comment:e.target.value})}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col sm="2">
                                <Button type="button" onClick={(e) => this.addProfile()}>Add Profile</Button>
                                    </Col>
                                    <Col sm="9"/>

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
