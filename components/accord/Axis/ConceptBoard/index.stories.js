import React from 'react'

// ---------------------------
// Target
// ---------------------------
import ConceptBoard from './index'
import MarkdownText from './index.md'

// // ---------------------------
// // Properties
// // ---------------------------
// const getPropsWithUpdate = (update) => {
//   const overrides = update || {}
//   let defaultProps = {
//   }
//   return Object.assign(defaultProps, overrides)
// }

// ---------------------------
// Stories
// ---------------------------
export default {
  title: 'accord|ConceptBoard',
  component: ConceptBoard,
  includeStories: /^ConceptBoard/,
  parameters: { notes: { markdown: MarkdownText } }
}

export const ConceptBoardDefault = () => <ConceptBoard />
