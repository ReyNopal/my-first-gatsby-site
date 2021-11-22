import './layout.module.css';
import * as React from 'react'

import { Chart, Bars} from "rumble-charts";

export default function App() {
  return (
    <Chart
      layerWidth={1000}
      layerHeight={500}
      minY={0}
      series={[
        { data: [5, 4, 4] },
        { data: [2, 2, 1] },
        { data: [4, 4, 5] }
      ]}
    >
      <Bars colors="set1" innerPadding="1%" groupPadding="2%" />
    </Chart>
  );
}
