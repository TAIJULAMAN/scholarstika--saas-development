"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
    LayoutDashboard,
    CreditCard,
    Receipt,
    FileText,
    Banknote,
    Settings2,
    ChevronDown,
    Wallet,
    PieChart,
    GraduationCap,
} from "lucide-react"

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/bursar/dashboard" },
]

const feesMenuItems = [
    { icon: CreditCard, label: "Student Fees", href: "/bursar/fees/student-fees" },
    { icon: Receipt, label: "Transaction Logs", href: "/bursar/fees/transactions" },
    { icon: FileText, label: "Optional Fees", href: "/bursar/fees/optional-fees" },
    { icon: GraduationCap, label: "Scholarship Management", href: "/bursar/fees/scholarships" },
]

const payrollMenuItems = [
    { icon: Banknote, label: "Process Payroll", href: "/bursar/payroll/process" },
    { icon: Settings2, label: "Salary Settings", href: "/bursar/payroll/settings" },
]

const reportsMenuItems = [
    { icon: PieChart, label: "Financial Reports", href: "/bursar/reports/financial" },
]

export function BursarSidebar() {
    const pathname = usePathname()
    const [isFeesOpen, setIsFeesOpen] = useState(true)
    const [isReportsOpen, setIsReportsOpen] = useState(true)

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

                {/* Fees Management Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsFeesOpen(!isFeesOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100`}
                    >
                        <div className="flex items-center gap-3">
                            <Wallet className="h-5 w-5" />
                            <span>Fees Management</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isFeesOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {isFeesOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {feesMenuItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
                                            ? "bg-emerald-50 text-emerald-600"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    )}
                </div>

                {/* Reports Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsReportsOpen(!isReportsOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100`}
                    >
                        <div className="flex items-center gap-3">
                            <PieChart className="h-5 w-5" />
                            <span>Reports</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isReportsOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {isReportsOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {reportsMenuItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
                                            ? "bg-emerald-50 text-emerald-600"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    )}
                </div>
            </nav>
        </aside>
    )
}
