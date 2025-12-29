"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Calendar,
    Award,
    Clock,
    FolderOpen,
    HelpCircle,
} from "lucide-react"

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
    { icon: BookOpen, label: "My Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/assignments" },
    { icon: Calendar, label: "Schedule", href: "/student/schedule" },
    { icon: Award, label: "Grades & Exams", href: "/student/grades" },
    { icon: Clock, label: "Attendance", href: "/student/attendance" },
    { icon: FolderOpen, label: "Materials", href: "/student/resources" },
    { icon: HelpCircle, label: "Support", href: "/student/support" },
]

export function StudentSidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden w-64 flex-col border-r bg-white md:flex">
            {/* Logo */}
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Scholastika Logo"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                ? "bg-emerald-50 text-emerald-600"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            <Icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
