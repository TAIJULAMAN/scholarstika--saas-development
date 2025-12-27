"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
    BookOpen,
    Library,
    Calendar,
    Users2,
    ArrowRightLeft,
    ChevronDown,
    CreditCard,
    Receipt,
    FileText,
    ClipboardList,
    Monitor,
    FileEdit,
    BarChart2,
    FileBarChart,
    TrendingUp,
    Banknote,
    Settings2,
    Award,
    BadgeCheck,
    IdCard,
    Shield,
    UserCheck,
    Upload,
    HelpCircle,
    Building2,
} from "lucide-react"

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/institution/dashboard" },
    { icon: Building2, label: "Branch Management", href: "/institution/branch-management" },
    { icon: Megaphone, label: "Announcements", href: "/institution/announcements" },
    { icon: DollarSign, label: "Earnings", href: "/institution/earnings" },
    { icon: Users, label: "Students", href: "/institution/students" },
    { icon: GraduationCap, label: "Teachers", href: "/institution/teachers" },
    { icon: MessageSquare, label: "Messages", href: "/institution/messages" },
    { icon: HelpCircle, label: "Support", href: "/institution/support" },
    // { icon: Settings, label: "Branch Settings", href: "/institution/settings" },
]

const academicsMenuItems = [
    { icon: BookOpen, label: "Sections & Classes", href: "/institution/academics/sections" },
    { icon: Library, label: "Subjects", href: "/institution/academics/subjects" },
    { icon: Calendar, label: "Class Schedule", href: "/institution/academics/schedule" },
    { icon: Users2, label: "Staff Management", href: "/institution/academics/staff" },
    { icon: ArrowRightLeft, label: "Transfer/Promotion", href: "/institution/academics/transfer-promotion" },
]

const feesMenuItems = [
    { icon: CreditCard, label: "Student Fees", href: "/institution/fees/student-fees" },
    { icon: Receipt, label: "Transaction Logs", href: "/institution/fees/transactions" },
    { icon: FileText, label: "Optional Fees", href: "/institution/fees/optional-fees" },
]

const examsMenuItems = [
    { icon: Monitor, label: "Online Exams", href: "/institution/exams/online" },
    { icon: FileEdit, label: "Offline Exams", href: "/institution/exams/offline" },
    { icon: ClipboardList, label: "Exam Results", href: "/institution/exams/results" },
]

const reportsMenuItems = [
    { icon: FileBarChart, label: "Exam Reports", href: "/institution/reports/exam-reports" },
    { icon: Users2, label: "Students Report", href: "/institution/reports/students-report" },
    { icon: TrendingUp, label: "Financial Report", href: "/institution/reports/financial-report" },
]

const payrollMenuItems = [
    { icon: Banknote, label: "Manage Payroll", href: "/institution/payroll/manage" },
    { icon: Settings2, label: "Payroll Settings", href: "/institution/payroll/settings" },
]

const certificatesMenuItems = [
    { icon: Award, label: "Certificate Template", href: "/institution/certificates/certificate-template" },
    { icon: BadgeCheck, label: "Student ID Card", href: "/institution/certificates/student-id" },
    { icon: IdCard, label: "Staff ID Card", href: "/institution/certificates/staff-id" },
]

const staffManagementMenuItems = [
    { icon: Shield, label: "Roles & Permission", href: "/institution/staff-management/roles" },
    { icon: UserCheck, label: "Staff", href: "/institution/staff-management/staff" },
    { icon: Upload, label: "Bulk Upload", href: "/institution/staff-management/bulk-upload" },
]

export function InstitutionSidebar() {
    const pathname = usePathname()
    const [isAcademicsOpen, setIsAcademicsOpen] = useState(
        pathname.startsWith("/institution/academics")
    )
    const [isFeesOpen, setIsFeesOpen] = useState(
        pathname.startsWith("/institution/fees")
    )
    const [isExamsOpen, setIsExamsOpen] = useState(
        pathname.startsWith("/institution/exams")
    )
    const [isReportsOpen, setIsReportsOpen] = useState(
        pathname.startsWith("/institution/reports")
    )
    const [isPayrollOpen, setIsPayrollOpen] = useState(
        pathname.startsWith("/institution/payroll")
    )
    const [isCertificatesOpen, setIsCertificatesOpen] = useState(
        pathname.startsWith("/institution/certificates")
    )
    const [isStaffManagementOpen, setIsStaffManagementOpen] = useState(
        pathname.startsWith("/institution/staff-management")
    )

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

                {/* Academics Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/academics")
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
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/fees")
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

                {/* Exams Management Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsExamsOpen(!isExamsOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/exams")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <ClipboardList className="h-5 w-5" />
                            <span>Exams</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isExamsOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isExamsOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {examsMenuItems.map((item) => {
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
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/reports")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <BarChart2 className="h-5 w-5" />
                            <span>Reports</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isReportsOpen ? "rotate-180" : ""
                                }`}
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

                {/* Payroll Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsPayrollOpen(!isPayrollOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/payroll")
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

                {/* Certificates & ID Cards Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsCertificatesOpen(!isCertificatesOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/certificates")
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

                {/* Staff Management Collapsible Menu */}
                <div className="space-y-1">
                    <button
                        onClick={() => setIsStaffManagementOpen(!isStaffManagementOpen)}
                        className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith("/institution/staff-management")
                            ? "bg-emerald-50 text-emerald-600"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <UserCog className="h-5 w-5" />
                            <span>Staff Management</span>
                        </div>
                        <ChevronDown
                            className={`h-4 w-4 transition-transform ${isStaffManagementOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isStaffManagementOpen && (
                        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-2">
                            {staffManagementMenuItems.map((item) => {
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
