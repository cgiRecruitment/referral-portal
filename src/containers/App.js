import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import App from "../App";
import {setProfiles, getProfiles, updateProfile} from "../actions/profileActions";
import {setInterviews, getInterviews, createInterview} from "../actions/interviewActions";
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
    generalError: state.errorReducer.generalError,
    interviews: state.interviewReducer.interviews,
    activeProfilesCount: state.profileReducer.activeProfilesCount
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
            logout
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
