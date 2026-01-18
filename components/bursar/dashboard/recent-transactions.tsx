import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const transactions = [
    {
        id: "TRX-9821",
        student: "Alice Johnson",
        grade: "Grade 10-A",
        amount: "$1,200",
        type: "Tuition Fee",
        status: "Completed",
        date: "Jan 06, 2026",
        avatar: "AJ"
    },
    {
        id: "TRX-9822",
        student: "Michael Brown",
        grade: "Grade 12-B",
        amount: "$450",
        type: "Transport Fee",
        status: "Pending",
        date: "Jan 06, 2026",
        avatar: "MB"
    },
    {
        id: "TRX-9823",
        student: "Emma Wilson",
        grade: "Grade 9-C",
        amount: "$2,400",
        type: "Annual Fee",
        status: "Completed",
        date: "Jan 05, 2026",
        avatar: "EW"
    },
    {
        id: "TRX-9824",
        student: "James Davis",
        grade: "Grade 11-A",
        amount: "$150",
        type: "Library Fine",
        status: "Failed",
        date: "Jan 05, 2026",
        avatar: "JD"
    },
    {
        id: "TRX-9825",
        student: "Sophia Miller",
        grade: "Grade 8-B",
        amount: "$850",
        type: "Term Fee",
        status: "Completed",
        date: "Jan 12, 2024",
        avatar: "SM"
    },
]

export function RecentTransactionsTable() {
    return (
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
                </div>
                <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
                    View All
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                        <tr>
                            <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Transaction ID</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Student</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Type</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Amount</th>
                            <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {transactions.map((trx) => (
                            <tr key={trx.id} className="group transition-colors hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{trx.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{trx.student}</p>
                                            <p className="text-xs text-gray-500">{trx.grade}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{trx.type}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{trx.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${trx.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                        trx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        {trx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-sm text-gray-500">{trx.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
