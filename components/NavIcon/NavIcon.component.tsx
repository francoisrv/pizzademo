import React, { SyntheticEvent } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'

export interface NavIconProps {
  onClick: (e: React.MouseEvent) => any
}

export default function NavIcon(props: NavIconProps) {
  const { onClick } = props

  return (
    <Fab color="secondary" size="large" onClick={onClick}>
      <MenuIcon />
    </Fab>
  )
}
