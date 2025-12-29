import type { Metadata } from "next"
import { TeacherSidebar } from "@/components/teacher/sidebar"
import { TeacherHeader } from "@/components/teacher/header"

export const metadata: Metadata = {
    title: "Teacher Dashboard | Scholarstika",
    description: "Manage your classes, students, and teaching activities",
}

export default function TeacherLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <TeacherSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <TeacherHeader />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
