"use client"

import { CreditCard } from "lucide-react"

export default function FeesPage() {
    const invoices = [
        { id: "INV-2024-001", title: "Tuition Fee", student: "Alex Thompson", amount: 450.00, dueDate: "Dec 30, 2024", status: "Pending" },
        { id: "INV-2024-002", title: "Library Fine", student: "Sarah Thompson", amount: 15.00, dueDate: "Dec 25, 2024", status: "Overdue" },
        { id: "INV-2023-098", title: "Tuition Fee", student: "Alex Thompson", amount: 450.00, dueDate: "Sep 01, 2024", status: "Paid" },
        { id: "INV-2023-099", title: "Tuition Fee", student: "Sarah Thompson", amount: 450.00, dueDate: "Sep 01, 2024", status: "Paid" },
    ]

    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Fees & Payments</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Manage tuition fees and view payment history</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-400/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <CreditCard className="h-4 w-4" />
                        Total Due: $465.00
                    </div>
                </div>
            </div>

            {/* Invoices List */}
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                <div className="border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-lg font-bold text-gray-900">Invoice History</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Invoice Details</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Student</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Amount</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Due Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {invoices.map((inv) => (
                                <tr key={inv.id} className="hover:bg-gray-50/50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <p className="font-medium text-gray-900">{inv.title}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{inv.student}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-900">${inv.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{inv.dueDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                            inv.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                                                'bg-orange-100 text-orange-700'
                                            }`}>
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {inv.status !== 'Paid' ? (
                                            <button className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700">
                                                Pay Now
                                            </button>
                                        ) : (
                                            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
                                                Receipt
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
