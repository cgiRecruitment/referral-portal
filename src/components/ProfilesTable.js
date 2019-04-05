import React from 'react'
import Table from 'react-bootstrap/Table'
import Status from './Status'
import Modal from "react-bootstrap/es/Modal";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";

class CustomTable extends React.Component {
    state = {
        showProfile:false
    }

    render() {
        const head = ["#","Name", "Email", "ReferredBy", "Skills","status","View"]
        return (
            <React.Fragment>
                {this.state.selectedProfile &&
                    <Modal
                        size="lg"
                        show={this.state.showProfile}
                        onHide={() => this.setState({showProfile: false})}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                {this.state.selectedProfile[0]['name']}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <h5>Personal Info</h5>
                                    <Table striped bordered hover>
                                        <tbody>
                                        <tr>
                                            <td>
                                                Name
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['name']}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                In Netherlands
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['in_nl']}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Skills
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['skill']}
                                            </td>
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
                                            <td>
                                                Is Referral
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['referral']}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                               Referred By
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['referred_by']}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                               Received Date
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['received_date']}
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
                                            <td>
                                                Status
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['status']}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Comment
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['comments']}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ID from Excel
                                            </td>
                                            <td>
                                                {this.state.selectedProfile[0]['id_from_excel']}
                                            </td>
                                        </tr>
                                        </tbody>

                                    </Table>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                }
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    {
                        head.map(head => (<th>{head}</th>))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.props.profiles && this.props.profiles.map((item,i) => (
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.referred_by}</td>
                            <td>{item.skill}</td>
                            <td><Status>{item.status}</Status></td>
                            <td><a href="javascript:void(0)" onClick={() => this.setState({showProfile:true, selectedProfile:this.props.profiles.filter(profile => profile.id === item.id )})}> View Profile</a></td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
            </React.Fragment>
        );
    }
}

export default CustomTable
