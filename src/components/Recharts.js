import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
} from "recharts";
import { useAssets } from "../hooks/useAssets";

function Rechart() {
  const { assets, loadingAssets, error } = useAssets();

  if (loadingAssets) {
    return <h2>Loading</h2>;
  }
  if (error) {
    console.log("error fetching data");
  }
  return (
    <div style={{ marginLeft: "50px" }}>
      <ComposedChart
        width={730}
        height={250}
        data={assets}>
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke='#f5f5f5' />
        <Area
          type='monotone'
          dataKey='value'
          fill='#8884d8'
          stroke='#8884d8'
        />
        <Bar
          dataKey='profit'
          barSize={20}
          fill='#413ea0'
        />
        <Line
          type='monotone'
          dataKey='loss'
          stroke='#ff7300'
        />
      </ComposedChart>
    </div>
  );
}

export default Rechart;
