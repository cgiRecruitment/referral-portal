import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ViewProfiles from "../components/ViewProfiles";
import {getStatusList} from "../actions/prefillActions";

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles,
  statusList: state.prefillReducer.status
});

const mapDispatchToProps = dispatch => bindActionCreators({ getStatusList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfiles);
