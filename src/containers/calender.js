import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calender from '../components/Calender'

const mapStateToProps = state => ({
    availabilityOverview: state.calenderReducer.availabilityOverview
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(Calender)
