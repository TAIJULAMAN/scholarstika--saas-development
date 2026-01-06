"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
    { name: "Jan", total: 45000 },
    { name: "Feb", total: 38000 },
    { name: "Mar", total: 65000 },
    { name: "Apr", total: 42000 },
    { name: "May", total: 48000 },
    { name: "Jun", total: 35000 },
    { name: "Jul", total: 25000 },
    { name: "Aug", total: 55000 },
    { name: "Sep", total: 68000 },
    { name: "Oct", total: 52000 },
    { name: "Nov", total: 48000 },
    { name: "Dec", total: 58000 },
]

export function FeeCollectionChart() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Fee Collection Trend</h3>
                </div>
                <select className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Year 2024</option>
                    <option>Year 2023</option>
                </select>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip
                            cursor={{ fill: '#F3F4F6' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar
                            dataKey="total"
                            fill="#10B981"
                            radius={[4, 4, 0, 0]}
                            barSize={30}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
