import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { omit } from 'lodash'

import { Pizza, PizzaCart } from '../types'
import { addToCart, removeFromCart } from '../redux/actions/cart.actions'

interface CartItemActions {
  addToCartAction: typeof addToCart
  removeFromCartAction: typeof removeFromCart
}

type CartItemProps = PizzaCart & CartItemActions

const actions: CartItemActions = {
  addToCartAction: addToCart,
  removeFromCartAction: removeFromCart,
}

const withStore = connect(null, actions)

const CartItem: React.FC<CartItemProps> = (props) => {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  let price = `€${props.price}`
  if (props.quantity > 1) {
    price += ` x ${props.quantity} = €${(props.price * props.quantity).toFixed(
      2
    )}`
  }
  const onChangeQuality = (qty: number) => {
    const pizza = omit(props, ['addToCartActions']) as Pizza
    if (qty > props.quantity) {
      props.addToCartAction(pizza)
    } else {
      props.removeFromCartAction(pizza)
    }
  }

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={props.name} secondary={price} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List>
          {props.ingredients.map((ingredient) => (
            <ListItem key={ingredient}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>
        <div>
          <TextField
            variant="outlined"
            value={props.quantity}
            type="number"
            onChange={(e) => onChangeQuality(Number(e.target.value))}
            label="Quantity"
          />
        </div>
      </Collapse>
      <Divider />
    </>
  )
}

export default withStore(CartItem)
