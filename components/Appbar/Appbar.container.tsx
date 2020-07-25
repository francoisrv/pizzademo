import { connect } from 'react-redux'
import { openCart } from '../../redux/actions/cart.actions'
import Appbar from './Appbar.component'
import ReduxState from '../../redux/state'
import { resetSelectRestaurant } from '../../redux/actions/restaurant.actions'

export default connect(
  (state: ReduxState) => {
    return {
      restaurant: state.selectedRestaurant,
      isCartModalOpen: state.cartOpen,
      cartSize: state.cart.length,
    }
  },
  {
    open: openCart,
    goBack: resetSelectRestaurant,
  }
)(Appbar)
