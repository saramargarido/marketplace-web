'use client'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { data } from '../(home)/data.mock'
import { Users } from './icons'

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
}) {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col bg-white p-3 rounded-lg shadow-shape gap-2">
        <p className="text-[0,625rem] text-gray-400 uppercase">
          {label
            ? new Date(label).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
              })
            : 'Invalid date'}
        </p>
        <div className="flex gap-2 text-gray-300">
          <Users size={16} />
          <p className="text-xs">{payload[0].value} visitantes</p>
        </div>
      </div>
    )
  }

  return null
}
export default function Chart() {
  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        style={{ fontSize: 10, maxHeight: 266 }}
        margin={{ left: -24, bottom: 10, right: 10 }}
      >
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          dy={16}
          tickFormatter={(date: string) => new Date(date).getDate().toString()}
        />
        <YAxis
          stroke="#888"
          axisLine={false}
          tickLine={false}
          tickCount={4}
          allowDecimals={false}
          tickFormatter={(value: number) => value.toString()}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="visitors"
          stroke={'#5EC5FD'}
        />
        <CartesianGrid
          vertical={false}
          strokeDasharray={'8 12'}
          strokeOpacity={0.4}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
