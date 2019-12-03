
import React from 'react'

// ---------------------------
// Target
// ---------------------------
import LinkButton from './index'
import MarkdownText from './index.md'

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
// Stories
// ---------------------------
export default {
  title: 'Applied|LinkButton',
  component: LinkButton,
  // includeStories: ['LinkButtonDefault', 'LinkButtonToTop', 'LinkButtonToBack'],
  includeStories: /^LinkButton/,
  parameters: { notes: { markdown: MarkdownText } }
}

export const LinkButtonDefault = () => <LinkButton />
export const LinkButtonToTop = () => <LinkButton {...getPropsWithUpdate()} />
export const LinkButtonToLeft = () => <LinkButton {...getPropsWithUpdate({linkLabel: 'Left'})} />
