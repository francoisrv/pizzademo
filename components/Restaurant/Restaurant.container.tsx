import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import { resetSelectRestaurant } from '../../redux/actions/restaurant.actions'
import { goToAction } from '../../redux/actions/router.actions'
import RestaurantView from './Restaurant.component'

export default connect(
  (state: ReduxState) => ({ restaurant: state.selectedRestaurant }),
  {
    goToAction,
    resetSelectRestaurantAction: resetSelectRestaurant,
  }
)(RestaurantView)
