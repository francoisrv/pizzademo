// import run, {
//   Describe,
//   Render,
//   Expect,
//   To,
//   Has,
//   Is,
//   Trigger,
// } from 'describe-react'
// import React from 'react'
// import Quantity, { QuantityProps } from './Quantity.component'
// import { Fab, Chip } from '@material-ui/core'

// interface TestProps extends QuantityProps {
//   label: string
// }

// function Test(props: React.PropsWithChildren<TestProps>) {
//   return (
//     <Describe label={props.label}>
//       <Render>
//         <Quantity
//           cart={props.cart}
//           pizza={props.pizza}
//           addToCart={props.addToCart}
//           removeFromCart={props.removeFromCart}
//         />
//       </Render>

//       {props.children}
//     </Describe>
//   )
// }

// function IsEmpty() {
//   return (
//     <Expect root element>
//       <To
//         have
//         only
//         child="div"
//         which={[<Has no properties />, <Has no text />]}
//       />
//     </Expect>
//   )
// }

// function Increment() {
//   return <Trigger event="click" to last element={Chip} />
// }

// function Decrement() {
//   return <Trigger event="click" to first element={Chip} />
// }

// function HasQuantity(props: { qty: number }) {
//   return (
//     <Expect element={Fab}>
//       <To have text={props.qty.toString()} />
//     </Expect>
//   )
// }

// describe('Quantity component', () => {
//   run(() => (
//     <Test label="Empty cart" cart={[]}>
//       <IsEmpty />
//     </Test>
//   ))

//   run(() => (
//     <Test label="No pizza in cart" cart={[]}>
//       <IsEmpty />
//     </Test>
//   ))

//   run(() => (
//     <Test label="Pizza in cart" cart={[]}>
//       <Expect element="span">
//         <To have property="className" which={<Is exactly="quantity-chip" />} />
//       </Expect>

//       <Expect element={Fab}>
//         <To have exact properties={{ size: 'small', color: 'primary' }} />
//       </Expect>

//       <HasQuantity qty={1} />

//       <Increment />

//       <HasQuantity qty={2} />

//       <Decrement />

//       <HasQuantity qty={1} />

//       <Decrement />

//       <IsEmpty />
//     </Test>
//   ))
// })
