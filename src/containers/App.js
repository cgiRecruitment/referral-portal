import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "../App";
import { logout } from "../actions/userActions";
import { checkStatus } from "../utility/checkLoginStatus";

checkStatus();

const mapStateToProps = state => ({
  generalError: state.errorReducer.generalError,
  loginStatus: state.userReducer.loginStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {     
      logout
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
