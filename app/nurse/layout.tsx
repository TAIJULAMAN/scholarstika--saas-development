import type { Metadata } from "next"
import { NurseSidebar } from "@/components/nurse/sidebar"
import { NurseHeader } from "@/components/nurse/header"

export const metadata: Metadata = {
    title: "Nurse Dashboard | Scholarstika",
    description: "Manage student health and school clinic operations",
}

export default function NurseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <NurseSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <NurseHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
