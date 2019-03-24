import React from 'react'
import Table from 'react-bootstrap/Table'

class CustomTable extends React.Component {

    render() {
        const head = ["Name", "Email", "ReferredBy", "Skills","status","View"]
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    {
                        head.map(head => (<th>{head}</th>))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.props.profiles && this.props.profiles.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.referred_by}</td>
                            <td>{item.skill}</td>
                            <td>{item.status}</td>
                            <td><a href={`/view/${item.id}`}> View Profile</a></td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
        );
    }
}

export default CustomTable
