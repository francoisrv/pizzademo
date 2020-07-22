import { connect } from 'react-redux'
import { openCart } from '../../redux/actions/cart.actions'
import Appbar from './Appbar.component'
import ReduxState from '../../redux/state'

export default connect(
  (state: ReduxState) => ({ restaurant: state.selectedRestaurant }),
  {
    open: openCart,
  }
)(Appbar)
