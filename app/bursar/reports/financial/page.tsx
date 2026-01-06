"use client"

import { FinancialStats } from "@/components/bursar/reports/financial-overview/financial-stats"
import { RevenueExpenseChart } from "@/components/bursar/reports/financial-overview/revenue-expense-chart"
import { ExpenseBreakdownChart } from "@/components/bursar/reports/financial-overview/expense-breakdown-chart"

export default function FinancialReportsPage() {
    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            <FinancialStats />

            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <RevenueExpenseChart />
                </div>
                <div>
                    <ExpenseBreakdownChart />
                </div>
            </div>
        </div>
    )
}
