import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddProfile from "../components/AddProfile";

const mapStateToProps = state => ({
  profiles: state.profileReducer.profiles
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProfile);
