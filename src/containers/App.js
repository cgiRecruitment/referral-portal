import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "../App";
import {
  setProfiles,
  getProfiles,
  updateProfile
} from "../actions/profileActions";
import {
  setInterviews,
  getInterviews,
  createInterview
} from "../actions/interviewActions";
import { getStatusList, getSkillSetList } from "../actions/prefillActions";
import { createProfile } from "../actions/profileActions";
import { logout } from "../actions/userActions";
import { checkStatus } from "../utility/checkLoginStatus";
import { stat } from "fs";
import { createComment } from "../actions/profileActions";

checkStatus();

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  activeProfiles: state.profileReducer.activeProfiles,
  statusList: state.prefillReducer.status,
  loginStatus: state.userReducer.loginStatus,
  generalError: state.errorReducer.generalError,
  interviews: state.interviewReducer.interviews,
  stats: state.profileReducer.stats,
  skillSets: state.prefillReducer.skillSet
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProfiles,
      setProfiles,
      getInterviews,
      setInterviews,
      createInterview,
      updateProfile,
      getStatusList,
      createProfile,
      logout,
      createComment,
      getSkillSetList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
