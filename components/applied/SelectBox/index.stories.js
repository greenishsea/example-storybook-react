import React from 'react'
// import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

// ---------------------------
// Target
// ---------------------------
import SelectBox from './index'
import MarkdownText from './index.md'

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
// Stories
// ---------------------------
export default {
  title: 'Applied|SelectBox',
  component: SelectBox,
  includeStories: /^SelectBox/,
  parameters: { notes: { markdown: MarkdownText } },
  // decorators: [withKnobs],
}

export const SelectBoxDefault = () => <SelectBox {...getPropsWithUpdate()} />
