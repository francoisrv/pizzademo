import Fab from '@material-ui/core/Fab'
import GithubIcon from '@material-ui/icons/GitHub'
import React, { SyntheticEvent } from 'react'

export default function NavIcon() {
  return (
    <Fab
      color="secondary"
      size="large"
      onClick={() =>
        window.open('https://github.com/francoisrv/pizzademo', '_blank')
      }
      aria-label="Navigation"
    >
      <GithubIcon />
    </Fab>
  )
}
