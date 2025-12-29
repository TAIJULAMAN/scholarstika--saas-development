import type { Metadata } from "next"
import { BranchSidebar } from "@/components/branch/sidebar"
import { BranchHeader } from "@/components/branch/header"

export const metadata: Metadata = {
    title: "Branch Dashboard | Scholarstika",
    description: "Manage your branch operations and activities",
}

export default function BranchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <BranchSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <BranchHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
