import React from 'react'
import '../../css/map.css'
import Ingredients from './Ingredients.component'
import pizzas from '../../menu.json'
import { first } from 'lodash'
import { addToCart } from '../../redux/actions/cart.actions'

export default {
  title: 'Ingredients',
  component: Ingredients,
}

export const IngredientsExample = () => (
  <div style={{}}>
    <Ingredients
      open
      onClose={() => {}}
      pizza={first(pizzas)}
      addToCart={addToCart}
    />
  </div>
)

IngredientsExample.story = {
  name: 'Example',
}
