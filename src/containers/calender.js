import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calender from "../components/Calender";
import {
  getAvailabilityOverview,
  getScheduleByDate
} from "../actions/calenderActions";
import {
  getInterviews,
  createInterview,
  updateInterview
} from "../actions/interviewActions";
import { getProfiles } from "../actions/profileActions";
import {
  getInterviewTypeList,
  getMeetingRoomList
} from "../actions/prefillActions";

const mapStateToProps = state => ({
  availabilityOverview: state.calenderReducer.availabilityOverview,
  schedules: state.calenderReducer.schedule,
  interviews: state.interviewReducer.interviews,
  activeProfiles: state.profileReducer.activeProfiles,
  interviewTypes: state.prefillReducer.interviewTypes,
  meetingRooms: state.prefillReducer.meetingRooms
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAvailabilityOverview,
      getScheduleByDate,
      getInterviews,
      getInterviewTypeList,
      getMeetingRoomList,
      createInterview,
      getProfiles,
      updateInterview
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calender);
