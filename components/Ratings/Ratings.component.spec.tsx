import run, { Describe, Render, Expect, To, Have } from 'describe-react'
import React from 'react'
import EmptyStarIcon from '@material-ui/icons/StarBorder'
import FullStarIcon from '@material-ui/icons/Star'
import HalfFullStarIcon from '@material-ui/icons/StarHalf'

import Ratings from './Ratings.component'

describe('Ratings / Component', () => {
  run(() => (
    <Describe label="Ratings 0">
      <Render>
        <Ratings ratings={0} />
      </Render>

      <Expect element="div">
        <To have exactly={5} children={EmptyStarIcon} />
      </Expect>
    </Describe>
  ))

  run(() => (
    <Describe label="Ratings 0.5">
      <Render>
        <Ratings ratings={0.5} />
      </Render>

      <Expect element="div">
        <To have first child={HalfFullStarIcon} />
      </Expect>
    </Describe>
  ))

  run(() => (
    <Describe label="Ratings 1">
      <Render>
        <Ratings ratings={1} />
      </Render>

      <Expect element="div">
        <To have first child={FullStarIcon} />
        <To
          have
          all
          children
          except={0}
          which={<Have type={EmptyStarIcon} />}
        />
      </Expect>
    </Describe>
  ))

  run(() => (
    <Describe label="Ratings 5">
      <Render>
        <Ratings ratings={5} />
      </Render>

      <Expect element="div">
        <To have exactly={5} children={FullStarIcon} />
      </Expect>
    </Describe>
  ))
})
