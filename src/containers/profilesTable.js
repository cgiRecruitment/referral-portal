import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ProfilesTable from "../components/ProfilesTable";
import {getStatusList, getMeetingRoomList, getInterviewerList} from "../actions/prefillActions";
import {updateProfile} from "../actions/profileActions";
import {createInterview} from "../actions/interviewActions";

const mapStateToProps = state => ({
    profiles: state.profileReducer.profiles,
    allButRejectedProfiles: state.profileReducer.allButRejectedProfiles,
    statusList: state.prefillReducer.status,
    meetingRooms: state.prefillReducer.meetingRooms,
    interviewers: state.prefillReducer.interviewers
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({createInterview, getStatusList, getMeetingRoomList, getInterviewerList, updateProfile}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilesTable);
