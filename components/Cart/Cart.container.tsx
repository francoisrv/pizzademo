import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import { pick } from 'lodash'
import { closeCart } from '../../redux/actions/cart.actions'
import Cart from './Cart.modal.component'

export default connect(
  (state: ReduxState) => pick(state, ['cartOpen', 'cart']),
  { closeCartAction: closeCart }
)(Cart)
