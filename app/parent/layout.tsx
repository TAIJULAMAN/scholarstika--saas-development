import type { Metadata } from "next"
import { ParentSidebar } from "@/components/parent/sidebar"
import { ParentHeader } from "@/components/parent/header"

export const metadata: Metadata = {
    title: "Parent Portal | Scholarstika",
    description: "Monitor your child's progress and manage fees",
}

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <ParentSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <ParentHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
