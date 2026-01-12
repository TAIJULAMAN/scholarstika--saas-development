import type { Metadata } from "next"
import { BursarSidebar } from "@/components/bursar/sidebar"
import { BursarHeader } from "@/components/bursar/header"

export const metadata: Metadata = {
    title: "Bursar Dashboard | Scholarstika",
    description: "Manage financial operations and fees",
}

export default function BursarLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <BursarSidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <BursarHeader />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
