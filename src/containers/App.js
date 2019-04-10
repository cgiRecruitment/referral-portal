import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../App'
import { setProfiles } from '../actions/profileActions'
import { storeAvailabilityOverview } from '../actions/calenderActions'

const mapStateToProps = state => ({
    profiles: state.profileReducer.profiles
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setProfiles,
            storeAvailabilityOverview
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(App)
