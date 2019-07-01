import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddProfile from "../components/AddProfile";
import { getSkillSetList, getStatusList } from "../actions/prefillActions";
import {createProfile, updateProfile} from "../actions/profileActions";
import {setNotification} from "../actions/notificiationActions";

const mapStateToProps = state => ({
  skillSets: state.prefillReducer.skillSet,
  statusList: state.prefillReducer.status,
  notification: state.notificationReducer.notification
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSkillSetList, getStatusList, createProfile, updateProfile, setNotification }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProfile);
