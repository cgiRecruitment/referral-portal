import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import App from '../App'
import {setProfiles, getProfiles} from '../actions/profileActions'
import {getAvailabilityOverview} from '../actions/calenderActions'

const mapStateToProps = state => ({
    profiles: state.profileReducer.profiles
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getProfiles,
            setProfiles,
            getAvailabilityOverview
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(App)
