"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Megaphone,
    DollarSign,
    Users,
    GraduationCap,
    MessageSquare,
    Wallet,
    UserCog,
    Settings,
} from "lucide-react"

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/institution/dashboard" },
    { icon: Megaphone, label: "Announcements", href: "/institution/announcements" },
    { icon: DollarSign, label: "Earnings", href: "/institution/earnings" },
    { icon: Users, label: "Students", href: "/institution/students" },
    { icon: GraduationCap, label: "Teachers", href: "/institution/teachers" },
    { icon: MessageSquare, label: "Messages", href: "/institution/messages" },
    { icon: Wallet, label: "Payroll", href: "/institution/payroll" },
    { icon: UserCog, label: "Staff Management", href: "/institution/staff" },
    { icon: Settings, label: "Branch Settings", href: "/institution/settings" },
]

export function InstitutionSidebar() {
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
