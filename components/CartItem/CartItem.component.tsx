import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import TextField from '@material-ui/core/TextField'

import { PizzaCart } from '../../types'
import { addToCart, removeFromCart } from '../../redux/actions/cart.actions'
import Quantity from '../Quantity'

interface CartItemProps {
  pizza: PizzaCart
  add: typeof addToCart
  remove: typeof removeFromCart
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const { pizza } = props
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  let price = `€${pizza.price}`
  if (pizza.quantity > 1) {
    price += ` x ${pizza.quantity} = €${(pizza.price * pizza.quantity).toFixed(
      2
    )}`
  }

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={pizza.name} secondary={price} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List>
          {pizza.ingredients.map((ingredient) => (
            <ListItem key={ingredient}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 12,
          }}
        >
          <Quantity pizza={pizza} />
        </div>
      </Collapse>
      <Divider />
    </>
  )
}

export default CartItem
