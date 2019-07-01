import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ViewProfiles from "../components/ViewProfiles";
import { getStatusList, getMeetingRoomList, getInterviewerList } from "../actions/prefillActions";
import {applyPagination} from "../actions/paginationActions";

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  allButRejectedProfiles: state.profileReducer.allButRejectedProfiles,
  statusList: state.prefillReducer.status,
  meetingRooms: state.prefillReducer.meetingRooms,
  interviewers: state.prefillReducer.interviewers,
  paginatedProfiles: state.profileReducer.paginatedProfiles,
  startIndex: state.profileReducer.startIndex
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getStatusList, getMeetingRoomList, getInterviewerList, applyPagination }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfiles);
