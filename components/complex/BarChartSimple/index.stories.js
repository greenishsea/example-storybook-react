
import React from 'react'
import { storiesOf } from '@storybook/react'

// ---------------------------
// Target
// ---------------------------
import Target from './index'

// ---------------------------
// Properties
// ---------------------------
const getPropsWithUpdate = (update) => {
  const overrides = update || {}
  let defaultProps = {
    showLegend: true,
    target: '緑地の面積',
    data: [
      {
        name: 'いろはに市',
        '緑地の面積': 20,
      },
      {
        name: 'ほへと区',
        '緑地の面積': 50,
      },
      {
        name: 'ちりぬる町',
        '緑地の面積': 30,
      },
    ]
  }
  return Object.assign(defaultProps, overrides)
}

// ---------------------------
// Stories
// ---------------------------
storiesOf('Complex', module)
  .add(
    'BarChartSimple',
    () => <Target {...getPropsWithUpdate()} />,
    { notes: 'A simple bar chart' }
  )