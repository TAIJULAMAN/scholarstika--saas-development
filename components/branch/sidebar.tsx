"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    MessageSquare,
    UserCog,
    BookOpen,
    Library,
    Calendar,
    ChevronDown,
    CreditCard,
    Receipt,
    FileText,
    Monitor,
    FileEdit,
    ClipboardList,
    Wallet,
    HelpCircle,
    Award,
    BadgeCheck,
    IdCard,
    Banknote,
    Settings2,
    LogOut,
    Megaphone,
} from "lucide-react"
import { useUser } from "@/context/user-context"
import { useRouter } from "next/navigation"

export const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/branch/dashboard" },
    { icon: Users, label: "Students", href: "/branch/students" },
    { icon: GraduationCap, label: "Teachers", href: "/branch/teachers" },
    { icon: MessageSquare, label: "Messages", href: "/branch/messages" },
    { icon: Megaphone, label: "Announcements", href: "/branch/announcements" },
    { icon: HelpCircle, label: "Support", href: "/branch/support" },
    { icon: UserCog, label: "Staff Management", href: "/branch/staff-management" },
]

export const academicsMenuItems = [
    { icon: BookOpen, label: "Sections & Classes", href: "/branch/academics/sections" },
    { icon: Library, label: "Subjects", href: "/branch/academics/subjects" },
    { icon: Calendar, label: "Class Schedule", href: "/branch/academics/schedule" },
    { icon: Monitor, label: "Online Exams", href: "/branch/exams/online" },
    { icon: FileEdit, label: "Offline Exams", href: "/branch/exams/offline" },
    { icon: ClipboardList, label: "Exam Results", href: "/branch/exams/results" },
]

export const feesMenuItems = [
    { icon: CreditCard, label: "Student Fees", href: "/branch/fees/student-fees" },
    { icon: GraduationCap, label: "Scholarship Management", href: "/branch/fees/scholarships" },
    { icon: Receipt, label: "Transaction Logs", href: "/branch/fees/transactions" },
    { icon: FileText, label: "Optional Fees", href: "/branch/fees/optional-fees" },
]

export const payrollMenuItems = [
    { icon: Banknote, label: "Manage Payroll", href: "/branch/payroll/manage" },
    { icon: Settings2, label: "Payroll Settings", href: "/branch/payroll/settings" },
    { icon: Settings2, label: "Expenses", href: "/branch/payroll/expenses" },
]

export const certificatesMenuItems = [
    { icon: Award, label: "Certificate Template", href: "/branch/certificates/certificate-template" },
    { icon: BadgeCheck, label: "Student ID Card", href: "/branch/certificates/student-id" },
    { icon: IdCard, label: "Staff ID Card", href: "/branch/certificates/staff-id" },
]

export function SidebarContent() {
    const pathname = usePathname()
    const [isAcademicsOpen, setIsAcademicsOpen] = useState(
        pathname.startsWith("/branch/academics") || pathname.startsWith("/branch/exams")
    )
    const [isFeesOpen, setIsFeesOpen] = useState(
        pathname.startsWith("/branch/fees")
    )
    const [isPayrollOpen, setIsPayrollOpen] = useState(
        pathname.startsWith("/branch/payroll")
    )
    const [isCertificatesOpen, setIsCertificatesOpen] = useState(
        pathname.startsWith("/branch/certificates")
    )
    const { logout } = useUser()
    const router = useRouter()

    const handleLogout = () => {
        logout()
        router.push("/auth/signin")
    }

    return (
        <div className="flex h-full flex-col bg-white">
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

                {/* Academics Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/branch/academics") || pathname.startsWith("/branch/exams")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <GraduationCap className="h-5 w-5" />
                            <span>Academics</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isAcademicsOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isAcademicsOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {academicsMenuItems.map((item) => {
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

                {/* Fees Management Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsFeesOpen(!isFeesOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/branch/fees")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Wallet className="h-5 w-5" />
                            <span>Fees Management</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isFeesOpen ? "rotate-180" : ""
                                }`}
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

                {/* Payroll Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsPayrollOpen(!isPayrollOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/branch/payroll")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Wallet className="h-5 w-5" />
                            <span>Payroll</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isPayrollOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isPayrollOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {payrollMenuItems.map((item) => {
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

                {/* Certificates & IDs Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsCertificatesOpen(!isCertificatesOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/branch/certificates")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <Award className="h-5 w-5" />
                            <span>Certificates & IDs</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isCertificatesOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isCertificatesOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {certificatesMenuItems.map((item) => {
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

            <div className="border-t p-4">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </div>
    )
}

export function BranchSidebar() {
    return (
        <aside className="hidden w-64 border-r bg-white md:flex">
            <SidebarContent />
        </aside>
    )
}
