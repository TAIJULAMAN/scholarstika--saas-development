"use client"

import { StudentGrowthChart } from "@/components/branch/branch-dashboard/student-growth-chart"
import { EarningGrowthChart } from "@/components/branch/branch-dashboard/earning-growth-chart"
import { BranchDashboardStats } from "@/components/branch/branch-dashboard/dashboard-stats"
import { TopClassesTable } from "@/components/branch/branch-dashboard/top-classes-table"

export default function BranchDashboard() {
    return (
        <div className="space-y-6">
            <BranchDashboardStats />
            <div className="grid gap-6 lg:grid-cols-2">
                <StudentGrowthChart />
                <EarningGrowthChart />
            </div>
            <TopClassesTable />
        </div>
    )
}
