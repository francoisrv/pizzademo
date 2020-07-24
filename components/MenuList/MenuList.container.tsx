import { connect } from 'react-redux'
import ReduxState from '../../redux/state'
import MenuList from './MenuList.component'

export default connect((state: ReduxState) => ({ pizzas: state.menu }))(
  MenuList
)
