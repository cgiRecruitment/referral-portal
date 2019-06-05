import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import App from "../App";
import {setProfiles, getProfiles} from "../actions/profileActions";
import {getStatusList} from "../actions/prefillActions";
import {createProfile} from "../actions/profileActions";
import {logout} from "../actions/userActions";
import {checkStatus} from "../utility/checkLoginStatus";

checkStatus();

const mapStateToProps = state => ({
    profiles: state.profileReducer.profiles,
    activeProfiles: state.profileReducer.activeProfiles,
    statusList: state.prefillReducer.status,
    loginStatus: state.userReducer.loginStatus,
    generalError: state.errorReducer.generalError
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getProfiles,
            setProfiles,
            getStatusList,
            createProfile,
            logout
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
