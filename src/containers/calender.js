import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Calender from "../components/Calender";
import {
    getAvailabilityOverview,
    getScheduleByDate
} from "../actions/calenderActions";
import {getInterviews, createInterview} from "../actions/interviewActions";
import {getProfiles} from "../actions/profileActions";

const mapStateToProps = state => ({
    availabilityOverview: state.calenderReducer.availabilityOverview,
    schedules: state.calenderReducer.schedule,
    interviews: state.interviewReducer.interviews,
    activeProfiles: state.profileReducer.activeProfiles,
    interviewTypes: state.prefillReducer.interviewTypes
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getAvailabilityOverview,
            getScheduleByDate,
            getInterviews,
            createInterview,
            getProfiles,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calender);
