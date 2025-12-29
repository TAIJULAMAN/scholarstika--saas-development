"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    BookOpen,
    Users,
    ClipboardCheck,
    Award,
    FileText,
    Calendar,
    MessageSquare,
    FolderOpen,
    Settings,
} from "lucide-react"

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/teacher/dashboard" },
    { icon: BookOpen, label: "My Classes", href: "/teacher/classes" },
    { icon: Users, label: "Students", href: "/teacher/students" },
    { icon: ClipboardCheck, label: "Attendance", href: "/teacher/attendance" },
    { icon: Award, label: "Grades & Assessments", href: "/teacher/grades" },
    { icon: FileText, label: "Assignments", href: "/teacher/assignments" },
    { icon: Calendar, label: "Class Schedule", href: "/teacher/schedule" },
    { icon: MessageSquare, label: "Messages", href: "/teacher/messages" },
    { icon: FolderOpen, label: "Resources", href: "/teacher/resources" },
    { icon: Settings, label: "Settings", href: "/teacher/settings" },
]

export function TeacherSidebar() {
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
