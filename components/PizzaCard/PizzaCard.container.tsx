import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cart.actions'
import PizzaCard from './PizzaCard.component'
import ReduxState from '../../redux/state'

export default connect((state: ReduxState) => ({ cart: state.cart }), {
  addToCart,
})(PizzaCard)
