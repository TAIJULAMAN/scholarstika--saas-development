"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Salaries", "Maintenance", "Utilities", "Supplies", "Events", "Others"],
    datasets: [
        {
            label: 'Amount ($)',
            data: [450000, 120000, 85000, 55000, 45000, 30000],
            backgroundColor: [
                "#3B82F6", // Salaries - Blue
                "#10B981", // Maintenance - Emerald
                "#F59E0B", // Utilities - Amber
                "#EF4444", // Supplies - Red
                "#8B5CF6", // Events - Violet
                "#6B7280", // Others - Gray
            ],
            hoverOffset: 4,
            borderWidth: 0,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right' as const,
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
            }
        },
        tooltip: {
            backgroundColor: '#fff',
            titleColor: '#111',
            bodyColor: '#111',
            borderColor: '#eee',
            borderWidth: 1,
            padding: 10,
            cornerRadius: 8,
            boxPadding: 4,
            callbacks: {
                label: function (context: any) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed !== null) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
                    }
                    return label;
                }
            }
        }
    },
    cutout: '60%', // Makes it a doughnut
};

export function ExpenseBreakdownChart() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-900">Expense Breakdown</h3>
            </div>

            <div className="h-[300px] w-full flex items-center justify-center">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}
