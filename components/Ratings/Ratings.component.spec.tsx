import run, { Describe, Render, Expect, To, Have, Has } from 'describe-react'
import React from 'react'
import EmptyStarIcon from '@material-ui/icons/StarBorder'
import FullStarIcon from '@material-ui/icons/Star'
import HalfFullStarIcon from '@material-ui/icons/StarHalf'

import Ratings from './Ratings.component'
import { map, range } from 'lodash'

type ComponentsList = [
  React.ComponentType<any>,
  React.ComponentType<any>,
  React.ComponentType<any>,
  React.ComponentType<any>,
  React.ComponentType<any>
]

interface TestProps {
  ratings: number
  components: ComponentsList
}

function Test(props: React.PropsWithChildren<TestProps>) {
  return (
    <Describe label={`${props.ratings}`}>
      <Render>
        <Ratings ratings={props.ratings} />
      </Render>

      <Expect element="div">
        {map(range(0, 5), (i) => (
          <To
            have
            child
            number={i + 1}
            which={<Has type={props.components[i]} />}
            key={i}
          />
        ))}
      </Expect>
    </Describe>
  )
}

describe('Ratings / Component', () => {
  for (let i = 0; i <= 5; i += 0.5) {
    const components = []
    for (let j = 0; j < i; j++) {
      components.push(FullStarIcon)
    }
    if (Math.abs(i) !== i) {
      components.push(HalfFullStarIcon)
    }
    for (let j = i; j < 5; j++) {
      components.push(EmptyStarIcon)
    }
    run(() => <Test ratings={i} components={components as ComponentsList} />)
  }
})
