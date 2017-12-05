import { connect } from 'react-redux';

import { ActionCreators } from '../../Actions/Actions'
import App from './App';

const mapStateToProps = state => ({
  locations: state.locations,
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  updateWeather: () => { dispatch(ActionCreators.fetchWeather()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
