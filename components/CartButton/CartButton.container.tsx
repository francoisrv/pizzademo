import CartButton from './CartButton.component'
import { connect } from 'react-redux'
import { openCart, closeCart } from '../../redux/actions/cart.actions'
import ReduxState from '../../redux/state'
import { pick } from 'lodash'

export default connect(
  (state: ReduxState) => ({
    ...pick(state, ['cartOpen']),
    items: state.cart.length,
  }),
  {
    openCart,
    closeCart,
  }
)(CartButton)
