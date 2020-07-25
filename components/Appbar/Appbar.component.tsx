import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { openCart } from '../../redux/actions/cart.actions'
import { Restaurant } from '../../types'
import Ratings from '../Ratings'
import { resetSelectRestaurant } from '../../redux/actions/restaurant.actions'

export interface AppbarProps {
  isCartModalOpen: boolean
  cartSize: number
  open: typeof openCart
  restaurant?: Restaurant
  goBack: typeof resetSelectRestaurant
}

const Appbar: React.FC<AppbarProps> = (props) => {
  const { isCartModalOpen, cartSize, open, restaurant, goBack } = props

  function openCartAction() {
    if (!isCartModalOpen) {
      if (cartSize) {
        open()
      }
    }
  }

  return (
    <AppBar>
      <Toolbar>
        {restaurant && (
          <IconButton onClick={goBack}>
            <ArrowBackIosIcon style={{ color: '#999' }} />
          </IconButton>
        )}
        <div className="app-bar--header">
          {restaurant && (
            <>
              <Typography>{restaurant.name}</Typography>
              <Ratings ratings={restaurant.ratings} />
            </>
          )}
          {!restaurant && <Typography>pizzas</Typography>}
        </div>
        {cartSize > 0 && (
          <div>
            <IconButton onClick={openCartAction}>
              <Badge badgeContent={cartSize} color="secondary">
                <AddShoppingCartIcon style={{ color: 'white' }} />
              </Badge>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
