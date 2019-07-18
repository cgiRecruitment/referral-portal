import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddProfile from "../components/AddProfile";
import { getSkillSetList, getStatusList } from "../actions/prefillActions";
import { createProfile, updateProfile } from "../actions/profileActions";
import { setNotification, closeNotification } from "../actions/notificiationActions";

const mapStateToProps = state => ({
  skillSets: state.prefillReducer.skillSet,
  statusList: state.prefillReducer.status,
  notification: state.notificationReducer.notification,
  showNotification: state.notificationReducer.showNotification,
  showSpinner: state.loadingSpinnerReducer.serviceCallStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSkillSetList,
      getStatusList,
      createProfile,
      updateProfile,
      setNotification,
      closeNotification
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProfile);
