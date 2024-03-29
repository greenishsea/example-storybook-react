import { configure, addParameters, addDecorator } from '@storybook/react'
// import centered from '@storybook/addon-centered/react'
import { withA11y } from '@storybook/addon-a11y';

addParameters({ options: {
  name: 'Storybook for Next Project',
  hierarchyRootSeparator: /\|/,
  // url: '',
  // selectedAddonPanel: 'storybook/stories/stories-panel' // obsolete property ?
  // selectedPanel: 'storybook/actions/panel' // new one
}})

// ---------------------------
// Decorators
// ---------------------------
addDecorator(withA11y)
// addDecorator(centered) // If add this, Docs tab does not work well

const styles = {
  textAlign: 'center', // For inline element
}
const PositionDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
)
addDecorator(PositionDecorator)

configure(require.context('../components', true, /\.stories\.(js|mdx)$/), module);