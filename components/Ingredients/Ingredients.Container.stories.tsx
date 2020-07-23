import Ingredients from '.'
import React from 'react'
import pizzas from '../../menu.json'
import { first } from 'lodash'

export default { title: 'Ingredients / Container' }

export const Example = () => (
  <Ingredients open onClose={() => {}} pizza={first(pizzas)} />
)
