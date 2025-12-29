"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { month: "Jan", amount: 38500 },
    { month: "Feb", amount: 40200 },
    { month: "Mar", amount: 42100 },
    { month: "Apr", amount: 41800 },
    { month: "May", amount: 43500 },
    { month: "Jun", amount: 45230 },
]

export function FeeCollectionChart() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Fee Collection Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={12} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                        }}
                        formatter={(value: number) => `$${value.toLocaleString()}`}
                    />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="rgba(16, 185, 129, 0.8)"
                        strokeWidth={3}
                        dot={{ fill: "rgba(16, 185, 129, 0.8)", r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
