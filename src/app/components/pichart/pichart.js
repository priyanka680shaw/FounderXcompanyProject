'use client'
// import { chart as chartJs } from "chart.js/auto";
// import { Bar, Doughnut, Line } from "react-chartjs-2";

// export default function Pichart() {
//   return (
//     <>
//       <div style={{width : "100%" , height :"auto" , border : "2px solid black" , display  : "flex" , gap : "20px" , justifyContent :"space-around"}}>
//         <div
//           className="barChart"
//           style={{ width: "400px", height: "500c", border: "2px solid red" }}
//         >
//             <Line
//                 data = {
//                     {
//                         labels : ["A" , "B" , "C" , "D"] , 
//                         datasets : [
//                             {
//                                 label : "Reveneau" ,
//                                 data : ["200" , "300" ,"600"]
//                             }
//                         ]
//                     }
//                 } 
//             />
//         </div> 
//         <div
//           className="donought"
//           style={{ width: "400px", height: "500px", border: "2px solid green" }}
//         ></div>
//         <div
//           className="lineChart"
//           style={{ width: "400px", height: "500px", border: "2px solid blue" }}
//         ></div>
//       </div>
//     </>
//   );
// }


// components/MarketDashboard.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
    <div className="container mx-auto w-[100%]">
      <h1 className="text-lg font-bold mb-4">Market Action</h1>

      {/* Chart Section */}
      <div className="mb-6">
        <h2 className="text-md font-semibold">NIFT 50</h2>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-600 font-bold">10,244.40</span>
          <span className="text-green-600">+152.75 (+1.51%)</span>
        </div>
        <LineChart width={400} height={200} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Indices Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-1">Index</th>
            <th className="border border-gray-300 p-1">Price</th>
            <th className="border border-gray-300 p-1">Change</th>
            <th className="border border-gray-300 p-1">%Chg</th>
          </tr>
        </thead>
        <tbody>
          {indices.map((index, idx) => (
            <tr key={idx} className="text-center">
              <td className="border border-gray-300 p-1">{index.name}</td>
              <td className="border border-gray-300 p-1">{index.price}</td>
              <td className="border border-gray-300 p-1">{index.change}</td>
              <td className="border border-gray-300 p-1">{index.percent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

