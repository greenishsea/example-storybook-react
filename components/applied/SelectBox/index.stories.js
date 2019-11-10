
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
    activeValue: 1,
    needsEmptyOption: false,
    onChange: () => {},
    data: [
      {
        id: 0,
        name: '日本語',  
      },
      {
        id: 1,
        name: 'English',  
      },
    ],
  }
  return Object.assign(defaultProps, overrides)
}

// ---------------------------
// Decorators
// ---------------------------
const styles = {
  textAlign: 'center',
}
const PositionDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
)

// ---------------------------
// Stories
// ---------------------------
storiesOf('Applied', module)
  .addDecorator(PositionDecorator)
  .add(
    'SelectBox',
    () => <Target {...getPropsWithUpdate()} />,
    { notes: 'A very simple drop down box' }
  )
