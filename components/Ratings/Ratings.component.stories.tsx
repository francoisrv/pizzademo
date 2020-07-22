import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import '../../css/map.css'
import Ratings from './Ratings.component'

export default {
  title: 'Ratings / Component',
  decorators: [withKnobs],
}

const counts = {}

for (let i = 0; i <= 5; i += 0.5) {
  counts[i.toString()] = () => <Ratings ratings={i} size={3} />

  counts[i.toString()].story = {
    name: `With ${i} stars`,
  }
}

const ZeroStars = counts['0']
export { ZeroStars }

const ZeroFiveStars = counts['0.5']
export { ZeroFiveStars }

const OneStart = counts['1']
export { OneStart }

const OneDotFive = counts['1.5']
export { OneDotFive }

const TwoStars = counts['2']
export { TwoStars }

const TwoDotFiveStars = counts['2.5']
export { TwoDotFiveStars }

const ThreeStars = counts['3']
export { ThreeStars }

const ThreeDotFive = counts['3.5']
export { ThreeDotFive }

const FourStars = counts['4']
export { FourStars }

const FourDotFiveStars = counts['4.5']
export { FourDotFiveStars }

const FiveStars = counts['5']
export { FiveStars }

export const WithSize = () => <Ratings ratings={3.5} size={6} />

WithSize.story = { name: 'With size' }

export const WithColor = () => <Ratings ratings={3.5} color="red" size={3} />

WithColor.story = { name: 'With color' }

export const WithKnobs = () => (
  <Ratings
    ratings={number('Rating', 0)}
    color={text('Color', 'orange')}
    size={number('Size', 3)}
  />
)

WithKnobs.story = { name: 'With knobs' }
