import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Calender from "../components/Calender";
import { getAvailabilityOverview } from "../actions/calenderActions";

const mapStateToProps = state => ({
  availabilityOverview: state.calenderReducer.availabilityOverview
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAvailabilityOverview
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calender);
