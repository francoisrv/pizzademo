import ReduxState from '../state'
import { loadRestaurants } from '../actions/restaurant.actions'
import { ReduxActionType } from '../types'

type State = ReduxState['restaurants']

type Action = ReturnType<typeof loadRestaurants>

const initialState: State = []

export default function restaurantsReducer(
  state: State = initialState,
  action: Action
): State {
  if (action.type === ReduxActionType.LOAD_RESTAURANTS) {
    return action.payload.restaurants
  }
  return state
}
