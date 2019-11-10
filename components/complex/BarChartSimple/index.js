import React from 'react'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts'

function BarChartSimple(props) {
  return (
    <div style={{ width: '100%', height: 300, textAlign: 'center' }}>
      <ResponsiveContainer>
        <BarChart data={props.data}
              margin={{top: 5, right: 3, left: 2, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" interval={0}  minTickGap={20}/>
          <YAxis/>
          <Tooltip/>
          {props.showLegend &&
            <Legend />
          }
          <Bar dataKey={props.target} fill="#82ca9d">
            <LabelList dataKey={props.target} position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartSimple