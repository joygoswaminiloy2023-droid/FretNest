"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Linechart = ({ a }) => {
  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <LineChart
          data={a}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

          <XAxis dataKey="name" stroke="#9CA3AF" />

          <YAxis stroke="#9CA3AF" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="totalSales"
            stroke="#00E5FF"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;