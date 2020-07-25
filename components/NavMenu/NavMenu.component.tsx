import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import GithubIcon from '@material-ui/icons/GitHub'
import StorybookIcon from '@material-ui/icons/LibraryBooks'
import LighthouseIcon from '@material-ui/icons/Flight'
import { Anchor } from '../Nav/Nav.component'

export interface NavMenuProps {
  open: boolean
  anchorEl: Anchor
  onClose: () => any
}

export default function NavMenu(props: NavMenuProps) {
  const { open, anchorEl, onClose } = props
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      elevation={2}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'top',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      keepMounted
      onClose={onClose}
    >
      <MenuItem
        onClick={() =>
          window.open('https://github.com/francoisrv/pizzademo', '_blank')
        }
      >
        <ListItemIcon>
          <GithubIcon />
        </ListItemIcon>
        <ListItemText primary="GitHub" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <StorybookIcon />
        </ListItemIcon>
        <ListItemText primary="Storybook" />
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <LighthouseIcon />
        </ListItemIcon>
        <ListItemText primary="Lighthouse" />
      </MenuItem>
    </Menu>
  )
}
