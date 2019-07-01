import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Login from "../components/Login";
import {login, logout} from "../actions/userActions";
import {setGeneralError} from "../actions/errorActions";

const mapStateToProps = state => ({
    skillSets: state.prefillReducer.skillSet,
    statusList: state.prefillReducer.status,
    generalError: state.errorReducer.generalError
});

const mapDispatchToProps = dispatch => bindActionCreators({login, setGeneralError}, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
