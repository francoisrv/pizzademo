import Menu from './Menu.component'
import pizzas from '../../menu.json'
import React from 'react'
import { WithRedux } from '../../utils/storybook.utils'

export default {
  title: 'Restaurant / Menu',
  component: Menu,
}

export const Example = () => (
  <WithRedux persist={false}>
    <Menu pizzas={pizzas} />
  </WithRedux>
)

Example.story = {
  name: 'Example',
}
