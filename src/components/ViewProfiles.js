import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
class ViewProfiles extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Profiles</h1>
          <ProfileTable profiles={this.props.profiles} />
        </Row>
      </Container>
    );
  }
}

export default ViewProfiles;
