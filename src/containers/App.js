import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "../App";
import { setProfiles, getProfiles } from "../actions/profileActions";
import { getStatusList } from "../actions/prefillActions";

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  statusList: state.prefillReducer.status,
  loginStatus: true
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProfiles,
      setProfiles,
      getStatusList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
