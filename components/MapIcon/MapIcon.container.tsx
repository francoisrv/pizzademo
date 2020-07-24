import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import MapIcon from './MapIcon.component'
import { resetSelectRestaurant } from '../../redux/actions/restaurant.actions'

export default connect(
  (state: ReduxState) => ({
    show: state.selectedRestaurant !== null,
  }),
  { onClick: resetSelectRestaurant }
)(MapIcon)
