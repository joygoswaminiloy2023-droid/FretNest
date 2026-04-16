'use client';

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';

const COLORS = [
  '#00E5FF', // cyan
  '#FF6B6B', // red
  '#FFD93D', // yellow
  '#6BCB77', // green
  '#4D96FF', // blue
  '#B983FF', // purple
];

const Salesgraph = ({ a }) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={a} margin={80}>
        
        {/* Grid */}
        <CartesianGrid stroke="#00FFFF" strokeDasharray="3 3" />

        {/* X Axis */}
        <XAxis
          dataKey="name"
          stroke="#ccc"
          tick={{ fill: '#ccc', fontSize: 12 }}
          angle={-20}
          textAnchor="end"
          interval={0}
            height={100}
        />

        {/* Y Axis */}
        <YAxis
          stroke="#ccc"
          tick={{ fill: '#ccc' }}
        />

        {/* Tooltip */}
        <Tooltip
          contentStyle={{
            backgroundColor: '#222',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
          }}
        />

        {/* Bars */}
        <Bar dataKey="totalSales" barSize={80}>
          {a.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
};

export default Salesgraph;