import { connect } from 'react-redux'

import { addToCart } from '../../redux/actions/cart.actions'
import Ingredients from './Ingredients.component'

export default connect(null, { addToCart })(Ingredients)
