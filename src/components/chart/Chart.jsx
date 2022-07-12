import React from "react"
import "./Chart.css"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts"

export default function Chart({ title, data, datakey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' stroke='#5550bd' />
          <YAxis tick={{ fill: "#5550bd" }} />
          <Line
            type='monotone'
            dataKey={datakey}
            stroke='#5550bd'
            className='line'
          />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
