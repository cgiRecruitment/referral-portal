import React from "react";
import Table from "react-bootstrap/Table";

class CustomTable extends React.Component {
  state = {
    tableData: {head: {}},
      interviews: {body: {}},
      profiles: {body: {}}
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ profiles: nextProps.tableData, interviews: nextProps.tableData });
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {this.state.tableData.head.map(head => <th>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.state.profiles.body.map(item => (
              <tr>
                {item.map(data => (
                  <td>{data}</td>
                ))}
              </tr>
            ))}
        </tbody>
          <tbody>
          {this.state.interviews.body.map(item => (
              <tr>
                  {item.map(data => (
                      <td>{data}</td>
                  ))}
              </tr>
          ))}
          </tbody>
      </Table>
    );
  }
}

export default CustomTable;
