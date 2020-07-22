import React from 'react'
import { linkTo } from '@storybook/addon-links'
import Layout from './Layout.component'
import '../../css/map.css'

export default {
  title: 'Layout / Layout',
  component: Layout,
}

export const BareLayout = () => (
  <div style={{}}>
    <Layout map={<div></div>} />
  </div>
)

BareLayout.story = {
  name: 'Bare Layout',
}
