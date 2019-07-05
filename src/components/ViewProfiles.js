import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PaginationComponent from "./PaginationComponent";

class ViewProfiles extends React.Component {
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
            interviewers={this.props.interviewers}
            meetingRooms={this.props.meetingRooms}
            profiles={this.props.paginatedProfiles}
            statusList={this.props.statusList}
            skillSets={this.props.skillSets}
            editUser={true}
            scheduleInterview={true}
            createInterview={this.props.createInterview}
            updateProfile={this.props.updateProfile}
            interviewTypes={this.props.interviewTypes}
            createComment={this.props.createComment}
            getProfiles={this.props.getProfiles}
            startIndex={this.props.startIndex}
            filterProfiles={this.props.filterProfiles}
            filteredProfiles={this.props.filteredProfiles}
          />
          <PaginationComponent
            applyPagination={this.props.applyPagination}
            activePage={this.props.startIndex + 1}
            totalItemsCount={
              this.props.filteredProfiles && this.props.filteredProfiles.length
            }
          />
        </Row>
      </Container>
    );
  }
}

export default ViewProfiles;
