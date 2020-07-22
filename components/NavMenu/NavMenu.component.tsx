import React from 'react'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import GithubIcon from '@material-ui/icons/GitHub'
import StorybookIcon from '@material-ui/icons/LibraryBooks'

export interface NavMenuProps {
  // open: boolean
}

export default function NavMenu() {
  return (
    <Menu
      open
      elevation={0}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'center',
      }}
      keepMounted
    >
      <MenuItem>
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
    </Menu>
  )
}
