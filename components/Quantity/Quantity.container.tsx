import { connect } from 'react-redux'
import Quantity from './Quantity.component'
import { addToCart, removeFromCart } from '../../redux/actions/cart.actions'
import ReduxState from '../../redux/state'

export default connect((state: ReduxState) => ({ cart: state.cart }), {
  addToCart,
  removeFromCart,
})(Quantity)
