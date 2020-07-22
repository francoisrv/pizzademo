import { connect } from 'react-redux'

import ReduxState from '../../redux/state'
import { closeCart } from '../../redux/actions/cart.actions'
import Cart from './Cart.modal.component'
import { groupPizzas, calculatePrice } from '../../utils'

export default connect(
  (state: ReduxState) => {
    return {
      pizzas: groupPizzas(state.cart),
      open: state.cartOpen,
      price: calculatePrice(state.cart),
      length: state.cart.length,
    }
  },
  { close: closeCart }
)(Cart)
