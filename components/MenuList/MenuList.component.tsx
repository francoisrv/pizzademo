import React from 'react'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Pizza } from '../../types'

export interface MenuListProps {
  pizzas: Pizza[]
}

export default function MenuList(props: MenuListProps) {
  return (
    <div className="menu">
      <Typography variant="h4">Pizzas</Typography>
      <Grid container spacing={3}>
        {props.pizzas.map((pizza) => (
          <Grid item xs={6}>
            <Paper>
              <Typography variant="h5">{pizza.name}</Typography>
              <img src={pizza.image} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
