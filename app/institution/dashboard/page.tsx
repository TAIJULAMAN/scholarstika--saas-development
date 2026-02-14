"use client"

import { StudentGrowthChart } from "@/components/institution/institution-dashboard/student-growth-chart"
import { EarningGrowthChart } from "@/components/institution/institution-dashboard/earning-growth-chart"
import { DashboardStats } from "@/components/institution/institution-dashboard/dashboard-stats"
import { TopBranchesTable } from "@/components/institution/institution-dashboard/top-branches-table"

export default function InstitutionDashboard() {
    return (
        <div className="space-y-5">
            <DashboardStats />
            <div className="grid gap-6 lg:grid-cols-2">
                <StudentGrowthChart />
                <EarningGrowthChart />
            </div>
            <div className="">
                <TopBranchesTable />
            </div>
        </div >
    )
}
