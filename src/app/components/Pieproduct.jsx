'use client';

import { Pie, PieChart, Tooltip, Cell } from 'recharts';

const COLORS = ['#00E5FF', '#FF6B6B', '#FFD93D', '#6BCB77'];

const Pieproduct = ({ isAnimationActive = true,a }) => {

console.log(a)
  return (
    <PieChart width={400} height={400}>
      
      <Pie
        data={a}
        dataKey="stock"
        nameKey="name"
        isAnimationActive={isAnimationActive}
        outerRadius={120}
        label
      >
        {a.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />

    </PieChart>
  );
};

export default Pieproduct;