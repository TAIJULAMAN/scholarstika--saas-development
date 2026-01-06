"use client"

import { BursarDashboardStats } from "@/components/bursar/dashboard/dashboard-stats"
import { FeeCollectionChart } from "@/components/bursar/dashboard/fee-collection-trend"
import { RecentTransactionsTable } from "@/components/bursar/dashboard/recent-transactions"

export default function BursarDashboard() {
    return (
        <div className="space-y-6">
            <BursarDashboardStats />
            <div className="lg:col-span-2">
                <FeeCollectionChart />
            </div>

            <RecentTransactionsTable />
        </div>
    )
}
