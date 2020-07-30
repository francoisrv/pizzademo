import { Restaurant, Pizza } from '../types'

export default interface ReduxState {
  coords: [number, number]
  previewedRestaurant: Restaurant | null
  restaurants: Restaurant[]
  selectedRestaurant: Restaurant | null
  menu: Pizza[]
  cart: Pizza[]
  cartOpen: boolean
  router: any
  loaded: boolean
}
