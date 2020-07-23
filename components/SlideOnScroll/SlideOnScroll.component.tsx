import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide, { SlideProps } from '@material-ui/core/Slide'

export interface SlideOnScrollProps {
  target: HTMLElement | Window | Element
  children: React.ReactElement
}

export default function SlideOnScroll(props: SlideOnScrollProps) {
  const { children, target } = props
  const trigger = useScrollTrigger({ target, threshold: 220 })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
