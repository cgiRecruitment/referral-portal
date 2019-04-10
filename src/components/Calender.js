import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/es/Col";
import "./calenderStyle.css"
import Table from "react-bootstrap/Table";

class AddProfile extends React.Component {

    state = {}

    render() {
        return (
            <Container fluid={true} className="availabilityContainer">
                    <Col md={3} sm={3} className="availabilityPanel">
                        <h5 className={"availabilityPanelHeader"}>Availability Overview</h5>
                        {this.props.availabilityOverview.map((item => <Table striped bordered hover responsive>
                            <thead>
                            <tr>
                                <th>{`Beschibaar ${item.name}`}</th>
                                <th>
                                    Van
                                </th>
                                <th>
                                    Tot
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {item.schedule.map(schedule => <tr>
                                <td>{schedule.date}</td>
                                <td>{schedule.from}</td>
                                <td>{schedule.to}</td>
                            </tr>)}
                            </tbody>

                        </Table>))}

                    </Col>
            </Container>
        )
    }
}

export default AddProfile;
