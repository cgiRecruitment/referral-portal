import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = state => ({
  skillSets: state.prefillReducer.skillSet,
  statusList: state.prefillReducer.status
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
