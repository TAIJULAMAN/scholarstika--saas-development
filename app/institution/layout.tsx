import type { Metadata } from "next"
import { InstitutionSidebar } from "@/components/institution/sidebar"
import { InstitutionHeader } from "@/components/institution/header"

export const metadata: Metadata = {
    title: "Institution Dashboard | Scholarstika",
    description: "Manage your institution branches and operations",
}

export default function InstitutionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <InstitutionSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <InstitutionHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
