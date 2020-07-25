import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import MenuList from './MenuList.component'
import { addToCart } from '../../redux/actions/cart.actions'

export default connect((state: ReduxState) => ({ pizzas: state.menu }), {
  addToCart,
})(MenuList)
