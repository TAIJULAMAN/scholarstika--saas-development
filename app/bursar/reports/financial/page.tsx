"use client"

import { FinancialStats } from "@/components/bursar/reports/financial-overview/financial-stats"
import { RevenueExpenseChart } from "@/components/bursar/reports/financial-overview/revenue-expense-chart"
import { ExpenseBreakdownChart } from "@/components/bursar/reports/financial-overview/expense-breakdown-chart"

export default function FinancialReportsPage() {
    return (
        <div className="space-y-5">
            <FinancialStats />
            <div className="grid gap-5 md:grid-cols-3">
                <div className="md:col-span-2">
                    <RevenueExpenseChart />
                </div>
                <div>
                    <ExpenseBreakdownChart />
                </div>
            </div>
        </div>
    )
}
