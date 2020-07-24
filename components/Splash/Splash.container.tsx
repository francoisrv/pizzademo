import { connect } from 'react-redux'
import Splash from './Splash.component'
import { selectRestaurantBySlug } from '../../redux/actions/restaurant.actions'

export default connect(null, { selectRestaurantBySlug })(Splash)
