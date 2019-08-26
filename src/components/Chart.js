import React from 'react';
import Highcharts from 'highcharts';
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, LineSeries } from 'react-jsx-highcharts';

const CustomChart = ({data}) => (
  <div>
    <HighchartsChart>
      <Chart />

      <XAxis type="datetime">
        <XAxis.Title>Time</XAxis.Title>
      </XAxis>

      <YAxis>
        <YAxis.Title>Price</YAxis.Title>
        <LineSeries name="Price" data={data} />
      </YAxis>
    </HighchartsChart>
  </div>
);

export default withHighcharts(CustomChart, Highcharts);