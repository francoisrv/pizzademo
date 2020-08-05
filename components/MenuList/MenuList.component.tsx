import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import './MenuList.css'

import { Pizza } from '../../types'
import { addToCart } from '../../redux/actions/cart.actions'
import PizzaCard from '../PizzaCard'
import PizzaIcon from '../PizzaIcon'

export interface MenuListProps {
  pizzas: Pizza[]
  addToCart: typeof addToCart
}

export default function MenuList(props: MenuListProps) {
  return (
    <div id="menu-cards">
      <div className="menu-title">
        <div className="menu-icon">
          <PizzaIcon alt="Pizza" />
        </div>
        <Typography variant="h4">Pizzas</Typography>
      </div>
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
