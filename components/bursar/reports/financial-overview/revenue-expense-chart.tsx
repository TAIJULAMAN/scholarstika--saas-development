"use client"

import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = {
    labels,
    datasets: [
        {
            label: 'Revenue',
            data: [65000, 58000, 85000, 72000, 68000, 55000, 45000, 75000, 98000, 82000, 78000, 88000],
            backgroundColor: '#10B981',
            borderRadius: 4,
        },
        {
            label: 'Expenses',
            data: [45000, 42000, 55000, 48000, 40000, 35000, 30000, 50000, 60000, 52000, 48000, 58000],
            backgroundColor: '#F97316',
            borderRadius: 4,
        },
    ],
};

export function RevenueExpenseChart() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: (isMobile ? 'bottom' : 'top') as 'bottom' | 'top',
                align: (isMobile ? 'center' : 'end') as 'center' | 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: isMobile ? 8 : 10,
                    font: {
                        size: isMobile ? 11 : 12,
                    }
                }
            },
            tooltip: {
                backgroundColor: '#fff',
                titleColor: '#111',
                bodyColor: '#111',
                borderColor: '#eee',
                borderWidth: 1,
                padding: isMobile ? 8 : 12,
                cornerRadius: 8,
                displayColors: true,
                boxPadding: 4,
                titleFont: {
                    size: isMobile ? 11 : 12,
                },
                bodyFont: {
                    size: isMobile ? 10 : 12,
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
                ticks: {
                    font: {
                        size: isMobile ? 10 : 12,
                    }
                }
            },
            y: {
                grid: {
                    color: '#f0f0f0',
                    drawBorder: false,
                },
                border: {
                    display: false,
                    dash: [10, 10]
                },
                ticks: {
                    font: {
                        size: isMobile ? 10 : 12,
                    },
                    callback: function (value: any) {
                        return '$' + value / 1000 + 'k';
                    }
                }
            }
        },
        barThickness: isMobile ? 12 : 20,
        maxBarThickness: isMobile ? 12 : 20,
    };

    return (
        <div className="rounded-xl bg-white p-4 md:p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-4 md:mb-5 flex items-center justify-between">
                <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">Revenue vs Expenses</h3>
                </div>
            </div>
            <div className="h-[200px] md:h-[250px] w-full">
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}
