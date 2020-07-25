import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Collapse'
import { get } from 'lodash'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Chip from '@material-ui/core/Chip'

import { Pizza } from '../../types'

export interface MenuListProps {
  pizzas: Pizza[]
}

export default function MenuList(props: MenuListProps) {
  return (
    <div className="menu-cards">
      <Typography variant="h4">Pizzas</Typography>
      <Grid container spacing={3} justify="center">
        {props.pizzas.map((pizza) => (
          <Grid item xs={12} md={6} lg={4} key={pizza.name}>
            <Card>
              <CardMedia
                image={pizza.image}
                title="Paella dish"
                className="menu-pizza-image"
              />

              <CardContent>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h5">{pizza.name}</Typography>
                  <Typography variant="h6">€{pizza.price}</Typography>
                </div>
                <div style={{ height: 16 }} />
                {pizza.ingredients.map((ingredient) => (
                  <Chip
                    key={ingredient}
                    label={ingredient}
                    className="menu-chip"
                  />
                ))}
              </CardContent>

              <CardActions>
                <Button color="primary" style={{ borderRadius: 0 }}>
                  <AddShoppingCartIcon fontSize="large" />
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
