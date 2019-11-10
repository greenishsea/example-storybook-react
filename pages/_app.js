import App from 'next/app'
import React from 'react'
import Head from 'next/head'

export default class MyApp extends App {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Storybook example</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}