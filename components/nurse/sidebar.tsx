"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    Calendar,
    MessageSquare,
    Stethoscope,
    Pill,
    Activity
} from "lucide-react"

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/nurse" },
    { icon: Users, label: "Patients", href: "/nurse/patients" },
    { icon: Calendar, label: "Appointments", href: "/nurse/appointments" },
    { icon: Pill, label: "Medications", href: "/nurse/medications" },
    { icon: Activity, label: "Vitals", href: "/nurse/vitals" },
    { icon: MessageSquare, label: "Messages", href: "/nurse/messages" },
]

export function SidebarContent() {
    const pathname = usePathname()

    return (
        <div className="flex h-full flex-col">
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
                    const isActive = pathname === item.href || (item.href !== "/nurse" && pathname.startsWith(item.href))

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
        </div>
    )
}

export function NurseSidebar() {
    return (
        <aside className="hidden w-64 border-r bg-white md:flex flex-col">
            <SidebarContent />
        </aside>
    )
}
