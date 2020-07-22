import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import {
  selectRestaurant,
  resetPreviewRestaurant,
} from '../../redux/actions/restaurant.actions'
import Marker from './Marker.component'

export default connect(
  (state: ReduxState) => ({ restaurant: state.previewedRestaurant }),
  {
    selectRestaurant,
    onClose: resetPreviewRestaurant,
  }
)(Marker)
