import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import { pick } from 'lodash'
import Menu from './Menu.component'

export default connect((state: ReduxState) => ({ pizzas: state.menu }))(Menu)
