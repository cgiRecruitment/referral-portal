import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getStatusList } from "../actions/prefillActions";
class ViewProfiles extends React.Component {
  componentWillMount() {
    this.props.getStatusList();
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Profiles</h1>
          <ProfileTable
            profiles={this.props.profiles}
            statusList={this.props.statusList}
          />
        </Row>
      </Container>
    );
  }
}

export default ViewProfiles;
