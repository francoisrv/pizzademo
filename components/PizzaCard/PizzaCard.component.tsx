import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Chip from '@material-ui/core/Chip'
import { Pizza } from '../../types'
import { addToCart } from '../../redux/actions/cart.actions'
import ReduxState from '../../redux/state'
import Quantity from '../Quantity'

export interface PizzaCardProps {
  pizza: Pizza
  addToCart: typeof addToCart
  cart: ReduxState['cart']
}

export default function PizzaCard(props: PizzaCardProps) {
  const { pizza } = props
  return (
    <Card>
      <CardMedia
        image={pizza.image}
        title={pizza.name}
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
          <Chip key={ingredient} label={ingredient} className="menu-chip" />
        ))}
      </CardContent>

      <CardActions>
        <div style={{ flex: 1 }}>
          <Button
            color="primary"
            style={{ borderRadius: 0 }}
            onClick={() => props.addToCart(pizza)}
          >
            <AddShoppingCartIcon fontSize="large" />
            Add to cart
          </Button>
        </div>

        <Quantity pizza={pizza} />
      </CardActions>
    </Card>
  )
}
