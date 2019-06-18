import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ViewProfiles extends React.Component {
  componentWillMount() {
    this.props.getStatusList();
    this.props.getSkillSetList();
    this.props.getMeetingRoomList();
    this.props.getInterviewerList();
    this.props.updateProfile();
    this.props.createInterview();
    this.props.getInterviewTypeList();
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
            skillSets={this.props.skillSets}
            editUser={true}
            scheduleInterview={true}
            createInterview={this.props.createInterview}
            updateProfile={this.props.updateProfile}
            interviewTypes={this.props.interviewTypes}
          />
        </Row>
      </Container>
    );
  }
}

export default ViewProfiles;
