import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

export default function ShowOnScroll(props: {
  window?: () => Window
  children: React.ReactElement
}) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: document.querySelector('.restaurant-wrapper'),
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
