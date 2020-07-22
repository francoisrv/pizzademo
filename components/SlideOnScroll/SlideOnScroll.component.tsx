import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

export interface SlideOnScrollProps {
  target: HTMLElement
  children: React.ReactElement
}

export default function SlideOnScroll(props: SlideOnScrollProps) {
  const { children, target } = props
  const trigger = useScrollTrigger({ target })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
