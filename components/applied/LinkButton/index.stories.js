
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
    linkLabel: 'ホーム',
    linkPath: ''
  }
  return Object.assign(defaultProps, overrides)
}

// ---------------------------
// Decorators
// ---------------------------
const styles = {
  textAlign: 'center', // For inline element
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
  .add('LinkButton', () => <Target />)
  .add('LinkButton to Top', () => <Target {...getPropsWithUpdate()} />)
