import React from 'react'
import '../../css/map.css'
import SlideOnScroll from './SlideOnScroll.component'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default {
  title: 'Layout / Slide On Scroll / Component',
  component: SlideOnScroll,
}

export const SlideUpOnScrollDown = () => (
  <div style={{ height: 1000 }}>
    <SlideOnScroll target={window}>
      <AppBar>
        <Toolbar>
          <Typography>Slide up on scroll down</Typography>
        </Toolbar>
      </AppBar>
    </SlideOnScroll>
  </div>
)

SlideUpOnScrollDown.story = {
  name: 'Slide up on scroll down',
}
