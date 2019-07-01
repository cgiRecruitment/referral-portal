import React from "react";
import ProfileTable from "./ProfilesTable";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PaginationComponent from "./PaginationComponent";

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
            profiles={this.props.paginatedProfiles}
            statusList={this.props.statusList}
            editUser={true}
            startIndex={this.props.startIndex}
          />
          <PaginationComponent
            applyPagination={this.props.applyPagination}
            activePage={this.props.startIndex + 1}
            totalItemsCount={
              this.props.allButRejectedProfiles &&
              this.props.allButRejectedProfiles.length
            }
          />
        </Row>
      </Container>
    );
  }
}

export default ViewProfiles;
