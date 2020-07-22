import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import {
  selectRestaurant,
  resetPreviewRestaurant,
} from '../../redux/actions/restaurant.actions'
import { Marker } from 'react-map-gl'

export default connect(
  (state: ReduxState) => ({ restaurant: state.previewedRestaurant }),
  {
    selectRestaurantAction: selectRestaurant,
    resetPreviewRestaurantAction: resetPreviewRestaurant,
  }
)(Marker)
