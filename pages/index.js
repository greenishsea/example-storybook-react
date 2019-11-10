
import React from 'react'
import BarChartSimple from '../components/complex/BarChartSimple'

const Parks = () => {
  return (
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
  )
}

export default Parks