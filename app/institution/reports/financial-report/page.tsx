"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, CreditCard, AlertCircle, Download, BarChart3 } from "lucide-react"

const summaryStats = [
    {
        icon: DollarSign,
        label: "Total Revenue",
        value: "$1,524,300",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: CreditCard,
        label: "Total Expenses",
        value: "$847,200",
        color: "text-red-600",
        bgColor: "bg-red-50",
    },
    {
        icon: TrendingUp,
        label: "Net Profit",
        value: "$677,100",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: AlertCircle,
        label: "Pending Payments",
        value: "$142,300",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
    },
]

const revenueBreakdown = [
    { source: "Tuition Fees", amount: 1247500, percentage: 81.8, growth: 12.5 },
    { source: "Optional Fees", amount: 124500, percentage: 8.2, growth: 8.3 },
    { source: "Exam Fees", amount: 89300, percentage: 5.9, growth: 5.2 },
    { source: "Late Fees", amount: 34500, percentage: 2.3, growth: -3.1 },
    { source: "Other Income", amount: 28500, percentage: 1.9, growth: 15.7 },
]

const expenseBreakdown = [
    { category: "Salaries & Wages", amount: 524300, percentage: 61.9, budget: 550000 },
    { category: "Infrastructure", amount: 142800, percentage: 16.9, budget: 150000 },
    { category: "Utilities", amount: 89200, percentage: 10.5, budget: 95000 },
    { category: "Supplies & Materials", amount: 54700, percentage: 6.5, budget: 60000 },
    { category: "Miscellaneous", amount: 36200, percentage: 4.3, budget: 40000 },
]

const monthlyFinancials = [
    { month: "January", revenue: 234500, expenses: 142300, profit: 92200 },
    { month: "February", revenue: 245800, expenses: 138900, profit: 106900 },
    { month: "March", revenue: 256300, expenses: 145200, profit: 111100 },
    { month: "April", revenue: 268900, expenses: 148700, profit: 120200 },
    { month: "May", revenue: 242100, expenses: 136500, profit: 105600 },
    { month: "June", revenue: 276700, expenses: 135600, profit: 141100 },
]

export default function FinancialReportPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Financial Report & Analytics</h1>
                    <p className="text-sm text-gray-600">Revenue, expenses, and profitability analysis</p>
                </div>
                <div className="flex gap-2">
                    <Select defaultValue="2024">
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">Fiscal Year 2024</SelectItem>
                            <SelectItem value="2023">Fiscal Year 2023</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export Report
                    </Button>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {summaryStats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                    <Icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Financial Trend Chart Placeholder */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Revenue vs Expenses Trend</h2>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center text-gray-500">
                        <BarChart3 className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                        <p>Financial trend chart will be displayed here</p>
                        <p className="text-sm mt-1">Monthly revenue and expense comparison</p>
                    </div>
                </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Revenue Breakdown</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Revenue Source</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Percentage</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">YoY Growth</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Contribution</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {revenueBreakdown.map((revenue) => (
                                <tr key={revenue.source} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{revenue.source}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">${revenue.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-blue-600">{revenue.percentage}%</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-sm font-semibold ${revenue.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {revenue.growth >= 0 ? '+' : ''}{revenue.growth}%
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-emerald-600 h-2 rounded-full"
                                                style={{ width: `${revenue.percentage}%` }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Expense Breakdown */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Expense Breakdown</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Expense Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Budget</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Percentage</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Budget Utilization</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {expenseBreakdown.map((expense) => {
                                const utilization = (expense.amount / expense.budget) * 100
                                return (
                                    <tr key={expense.category} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-gray-900">{expense.category}</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">${expense.amount.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">${expense.budget.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-purple-600">{expense.percentage}%</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${utilization > 95 ? 'bg-red-600' : utilization > 85 ? 'bg-orange-500' : 'bg-green-600'}`}
                                                        style={{ width: `${utilization}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700">{utilization.toFixed(1)}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Monthly Financials */}
            <div className="rounded-xl border bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold text-gray-900">Monthly Financial Summary</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Month</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Revenue</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Expenses</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Net Profit</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Profit Margin</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {monthlyFinancials.map((month) => {
                                const margin = ((month.profit / month.revenue) * 100).toFixed(1)
                                return (
                                    <tr key={month.month} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-gray-900">{month.month}</p>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-green-600">${month.revenue.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-red-600">${month.expenses.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-blue-600">${month.profit.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-purple-600">{margin}%</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
