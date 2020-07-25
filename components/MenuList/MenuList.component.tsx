import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Chip from '@material-ui/core/Chip'

import { Pizza } from '../../types'
import { addToCart } from '../../redux/actions/cart.actions'
import PizzaCard from '../PizzaCard'

export interface MenuListProps {
  pizzas: Pizza[]
  addToCart: typeof addToCart
}

export default function MenuList(props: MenuListProps) {
  return (
    <div className="menu-cards">
      <Typography variant="h4" className="menu-title">
        Pizzas
      </Typography>
      <Grid container spacing={3} justify="center">
        {props.pizzas.map((pizza) => (
          <Grid item xs={12} md={6} lg={4} key={pizza.name}>
            <PizzaCard pizza={pizza} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
