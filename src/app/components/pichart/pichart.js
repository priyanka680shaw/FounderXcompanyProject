'use client'

// components/MarketDashboard.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", value: 10050 },
  { time: "11:00", value: 10120 },
  { time: "12:00", value: 10200 },
  { time: "13:00", value: 10230 },
  { time: "14:00", value: 10244 },
];

const indices = [
  { name: "Nifty", price: "10244.40", change: "+152.75", percent: "+1.51%" },
  { name: "BSE Scnsex", price: "10244.40", change: "+152.75", percent: "+1.51%" },
  { name: "Nifty Bank", price: "10244.40", change: "+152.75", percent: "+1.51%" },
  { name: "Nasdaq", price: "10244.40", change: "+721", percent: "+1.51%" },
  { name: "S&P", price: "10244.40", change: "+721", percent: "+1.51%" },
];

export default function MarketDashboard() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <h1 className="text-lg font-bold mb-4 text-center ">Market Action</h1>

      {/* Chart Section */}
      <div className="mb-6">
        <h2 className="text-md font-semibold text-center md:text-left">NIFT 50</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
          <span className="text-green-600 font-bold text-lg md:text-xl">10,244.40</span>
          <span className="text-green-600 text-sm md:text-base">+152.75 (+1.51%)</span>
        </div>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Indices Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-sm md:text-base">
              <th className="border border-gray-300 p-2">Index</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Change</th>
              <th className="border border-gray-300 p-2">%Chg</th>
            </tr>
          </thead>
          <tbody>
            {indices.map((index, idx) => (
              <tr key={idx} className="text-center text-sm md:text-base">
                <td className="border border-gray-300 p-2">{index.name}</td>
                <td className="border border-gray-300 p-2">{index.price}</td>
                <td className="border border-gray-300 p-2">{index.change}</td>
                <td className="border border-gray-300 p-2">{index.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
