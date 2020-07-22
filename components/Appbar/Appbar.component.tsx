import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { openCart } from '../../redux/actions/cart.actions'
import { Restaurant } from '../../types'

export interface AppbarProps {
  isOpen: boolean
  cartSize: number
  open: typeof openCart
  restaurant: Restaurant
}

const Appbar: React.FC<AppbarProps> = (props) => {
  const { isOpen, cartSize, open, restaurant } = props

  function openCartAction() {
    if (!isOpen) {
      if (cartSize) {
        open()
      }
    }
  }

  return (
    <AppBar>
      <Toolbar>
        <div style={{ flex: 1 }}>
          <Typography>{restaurant.name}</Typography>
        </div>
        <div>
          <IconButton onClick={openCartAction}>
            <Badge badgeContent={cartSize} color="secondary">
              <AddShoppingCartIcon style={{ color: 'white' }} />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
