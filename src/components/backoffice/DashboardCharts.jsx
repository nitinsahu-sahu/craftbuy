"use client";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  PieChartData,
  tabs,
  LineChartOptions,
  LineChartData,
} from "../datafile/ObjData";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);
const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeelklySalesBar />
      <BestSalesProductBar />
    </div>
  );
};

const WeelklySalesBar = () => {
  const [chartToDisplay, setChartToDisplay] = useState("sales");

  return (
    <div className="bg-slate-800 p-8 rounded-lg">
      <h2 className="text-xl font-bold">Weekly Sales</h2>
      {/* tabs button */}
      <div className="text-sm font-medium text-center text-orange-500 border-b border-orange-200 dark:text-orange-400 dark:border-orange-700">
        <div className="flex flex-wrap">
          {tabs.map((tabs, index) => {
            return (
              <div className=" me-2" kay={index}>
                <button
                  onClick={() => setChartToDisplay(tabs.type)}
                  className={
                    chartToDisplay == tabs.type
                      ? "inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-orange-300 dark:hover:text-gray-300"
                  }
                >
                  {tabs.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* tabs content display  */}
      {tabs.map((tab, index) => {
        if (chartToDisplay == tab.type) {
          return (
            <div key={index}>
              <Line options={LineChartOptions} data={LineChartData} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

const BestSalesProductBar = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg">
      <h2 className="text-xl font-bold">Best Sales Product</h2>
      <Pie data={PieChartData} />
    </div>
  );
};
export default DashboardCharts;
