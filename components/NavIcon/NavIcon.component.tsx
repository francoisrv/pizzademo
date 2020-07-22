import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'

export default function NavIcon() {
  // return <MenuIcon className="nav-icon" />
  return (
    <div className="nav-icon">
      <Fab color="secondary" size="large">
        <MenuIcon />
      </Fab>
    </div>
  )
}
