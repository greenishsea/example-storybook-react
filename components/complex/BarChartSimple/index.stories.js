import React from 'react'

// ---------------------------
// Target
// ---------------------------
import BarChartSimple from './index'
import MarkdownText from './index.md'

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
export default {
  title: 'Complex|BarChartSimple',
  component: BarChartSimple,
  includeStories: /^BarChartSimple/,
  parameters: { notes: { markdown: MarkdownText } },
}

export const BarChartSimpleDefault = () => <BarChartSimple {...getPropsWithUpdate()} />
  