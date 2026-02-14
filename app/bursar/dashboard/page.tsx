"use client"

import { useState } from "react"
import { BursarDashboardStats } from "@/components/bursar/dashboard/dashboard-stats"
import { FeeCollectionChart } from "@/components/bursar/dashboard/fee-collection-trend"
import { RecentTransactionsTable } from "@/components/bursar/dashboard/recent-transactions"
import { DashboardAnnouncements } from "@/components/common/dashboard-announcements"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CreateAnnouncementDialog } from "@/components/bursar/dashboard/create-announcement-dialog"

export default function BursarDashboard() {
    const [isCreateAnnouncementOpen, setIsCreateAnnouncementOpen] = useState(false)

    return (
        <div className="space-y-5">
            {/* <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Finance Dashboard</h1>
                <Button
                    onClick={() => setIsCreateAnnouncementOpen(true)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Create Announcement
                </Button>
            </div> */}

            <BursarDashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="">
                    <FeeCollectionChart />
                </div>
                <div>
                    <DashboardAnnouncements role="Bursar" />
                </div>
            </div>

            <RecentTransactionsTable />

            <CreateAnnouncementDialog
                open={isCreateAnnouncementOpen}
                onOpenChange={setIsCreateAnnouncementOpen}
            />
        </div>
    )
}
