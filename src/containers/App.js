import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../App'
import { setProfiles } from '../actions/profileActions'

const mapStateToProps = state => ({
    profiles: state.profileReducer.profiles
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setProfiles
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(App)
