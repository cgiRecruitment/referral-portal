import React from "react";
import Table from "react-bootstrap/Table";
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
        validated: false,
        meetingRoom: "",
        interviewer: "",
        date: ""
    };

    updateInterview = e => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            e.stopPropagation();
            let formData = JSON.stringify(this.state);
            fetch( {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: formData
            });
        }

        this.setState({ validated: true });
    };

    render() {
        const head = [
            "#",
            "Candidate",
            "Interviewer",
            "Date",
            "Time",
            "Location",
            "CV",
            ...(this.props.editInterview ? ["Edit"] : [])
        ];


        const {candidate, candidateId, inNL, receivedDate, skill, referred, referredBy,
            status, statusLastUpdated, name, interviewer, location} =
            this.state && this.state.selectedInterview ? this.state.Interview[0] : {}

        return (
            <React.Fragment>
                {this.state.selectedInterview && (
                    <Modal
                        size="lg"
                        show={this.state.showInterview}
                        onHide={() => this.setState({ showInterview: false })}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                {candidate}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <h5>Candidate Info</h5>
                                    <Table striped bordered hover>
                                        <tbody>
                                        <tr>
                                            <td>Candidate</td>
                                            <td>{candidateId}</td>
                                        </tr>
                                        <tr>
                                            <td>In Netherlands</td>
                                            <td>{inNL ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td>Skills</td>
                                            <td>{skill}</td>
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
                                            <td>{referred ? 'Yes' : 'No'}</td>
                                        </tr>
                                        <tr>
                                            <td>Referred by</td>
                                            <td>{referredBy}</td>
                                        </tr>
                                        <tr>
                                            <td>Received Date</td>
                                            <td>
                                                {receivedDate}
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
                                            <td>{status}</td>
                                        </tr>
                                        <tr>
                                            <td>Last update</td>
                                            <td>
                                                {statusLastUpdated}
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
                            <th key={head}>{head}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.interviews &&
                    this.props.interviews.map((item, i) => (
                        <tr key={item.id}>
                            <td>{i + 1}</td>
                            <td>{item.candidateName}</td>
                            <td>{item.interviewer}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.location}</td>
                            <td>{item.cv}</td>
                            { this.props.editInterview && <td>
                                <a
                                    href="javascript:void(0)"
                                    onClick={() =>
                                        this.setState({
                                            editInterview: true,
                                            selectedInterview: this.props.interviews.filter(
                                                interview => interview.id === item.id
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
                {this.state.selectedInterview && (
                    <Modal
                        size="lg"
                        show={this.state.editInterview}
                        onHide={() => this.setState({ editInterview: false })}
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
                                    <h5>Edit Interview</h5>
                                    <Form
                                        noValidate
                                        validated={this.state.validated}
                                        onSubmit={e => this.updateInterview(e)}
                                    >
                                        <Table striped bordered hover>
                                            <tbody>
                                            <tr>
                                                <td>Candidate</td>
                                                <td>
                                                    <Form.Control
                                                        as="textarea"
                                                        onChange={e =>
                                                            this.setState({ candidate: e.target.value })
                                                        }
                                                        required
                                                    >
                                                    </Form.Control>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Interviewers</td>
                                                <td>
                                                    <Form.Group controlId="profileStatus" as={Row}>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows="2"
                                                            placeholder={interviewer}
                                                            onChange={e =>
                                                                this.setState({ interviewer: e.target.value })
                                                            }
                                                        />
                                                    </Form.Group>
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
                                                            >
                                                            </Form.Control>
                                                        </td>
                                                    </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td>
                                                    <Form.Group>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows="2"
                                                            placeholder={location}
                                                            onChange={e =>
                                                                this.setState({ location: e.target.value })
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
                                                    <td>Interviewers</td>
                                                    <td>
                                                        <Form.Control
                                                            as="select"
                                                            onChange={e =>
                                                                this.setState({ interviewer: e.target.value })
                                                            }
                                                            required
                                                        >
                                                            <option/>
                                                            {this.props.interviewer &&
                                                            this.props.interviewer.map(interviewer => (
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
                                                <Button type="submit">Update Interview</Button>
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
