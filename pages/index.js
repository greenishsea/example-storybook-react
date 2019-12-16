
import React from 'react'
import BarChartSimple from '../components/complex/BarChartSimple'
import LinkButton from '../components/applied/LinkButton'

const Parks = () => {
  return (
    <>
      <BarChartSimple
          showLegend={true}
          target={'緑地の面積'}
          data={[
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
          ]}
      />
      <LinkButton />
    </>
  )
}

export default Parks