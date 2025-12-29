"use client"

import { useState } from "react"
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function EarningGrowthChart() {
    const [selectedYear, setSelectedYear] = useState("2024")

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Revenue",
                data: [38500, 39200, 40200, 41100, 41800, 42500, 43100, 43800, 44200, 44600, 45000, 45230],
                backgroundColor: "rgba(16, 185, 129, 0.8)",
                borderColor: "rgba(16, 185, 129, 1)",
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    }

    const options: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: 12,
                borderRadius: 8,
                titleFont: {
                    size: 14,
                    weight: 'bold' as const,
                },
                bodyFont: {
                    size: 13,
                },
                callbacks: {
                    label: function (context: any) {
                        return `Revenue: $${context.parsed.y.toLocaleString()}`
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 11,
                    },
                    color: "#6b7280",
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "rgba(229, 231, 235, 0.5)",
                },
                ticks: {
                    font: {
                        size: 11,
                    },
                    color: "#6b7280",
                    callback: function (value: any) {
                        return `$${(value / 1000).toFixed(0)}k`
                    },
                },
            },
        },
    }

    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Earning Growth</h3>
                </div>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-32">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}
