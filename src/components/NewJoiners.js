import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class NewJoiners extends React.Component {
    componentWillMount() {
      this.props.getStatusList();
      this.props.getSkillSetList();
      this.props.getMeetingRoomList();
      this.props.getInterviewerList();
      this.props.getInterviewTypeList();
      this.props.getProfiles();
    }
render() {
    return (
      <Container>
        <Row>
          <h1>Profiles</h1>
          <ProfileTable
            profiles={this.props.paginatedProfiles}
            editUser={false}
            scheduleInterview={false}
            getProfiles={this.props.getProfiles}
            startIndex={this.props.startIndex}
            newJoiner={true}
          />
        </Row>
      </Container>
    );
  }
}


export default NewJoiners;