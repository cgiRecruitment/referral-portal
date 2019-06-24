import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ViewProfiles from "../components/ViewProfiles";
import {
    getStatusList,
    getMeetingRoomList,
    getInterviewerList,
    getSkillSetList,
    getInterviewTypeList
} from "../actions/prefillActions";
import {updateProfile, createComment} from "../actions/profileActions";
import {createInterview} from "../actions/interviewActions";

const mapStateToProps = state => ({
    profiles: state.profileReducer.profiles,
    allButRejectedProfiles: state.profileReducer.allButRejectedProfiles,
    statusList: state.prefillReducer.status,
    meetingRooms: state.prefillReducer.meetingRooms,
    interviewers: state.prefillReducer.interviewers,
    skillSets: state.prefillReducer.skillSet,
    interviewTypes: state.prefillReducer.interviewTypes
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({createComment, getInterviewTypeList, createInterview, getSkillSetList, getStatusList, getMeetingRoomList, getInterviewerList, updateProfile}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewProfiles);
