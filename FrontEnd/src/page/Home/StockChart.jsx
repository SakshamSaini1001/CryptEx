import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getMarketChart } from "../State/Coin/Action";
const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    label: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    label: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    label: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Yearly Time Series",
    label: "1 Year",
    value: 365,
  },
];

const StockChart = ({ coinId }) => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);

  const [activeLabel, setActiveLabel] = useState(timeSeries[0]);
  const series = [
    {
      data: Array.isArray(coin.marketChart.data) ? coin.marketChart.data : [], // Ensure the data is an array
    },
  ];

  const options = {
    Chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };

  useEffect(() => {
    dispatch(
      getMarketChart({
        coinId,
        days: activeLabel.value,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, [dispatch, coinId, activeLabel]);

  if (coin.loading) return <p>Loading chart...</p>;
  if (coin.error) return <p>Error: {coin.error}</p>;
  if (!coin.marketChart.data || coin.marketChart.data.length === 0)
    return <p>No data available</p>;

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLabel.label == item.label ? "" : "outlined"}
            onClick={() => handleActiveLabel(item)}
            key={item.label}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
