import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ViewProfiles extends React.Component {
  componentWillMount() {
    this.props.getStatusList();
    this.props.getMeetingRoomList();
    this.props.getInterviewerList();
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Profiles</h1>
          <ProfileTable
            interviewers={this.props.interviewers}
            meetingRooms={this.props.meetingRooms}
            profiles={this.props.allButRejectedProfiles}
            statusList={this.props.statusList}
            editUser={true}
			paginationList={true}
          />
        </Row>
      </Container>
    );
  }
}

export default ViewProfiles;
