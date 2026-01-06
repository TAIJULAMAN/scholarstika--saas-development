import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const logs = [
    {
        id: "LOG-001",
        action: "Fee Payment Recorded",
        details: "Tuition fee collected from Alice Johnson (Grade 10)",
        user: "Robert Chen",
        role: "Bursar",
        ip: "192.168.1.42",
        date: "Jan 06, 2026 10:45 AM",
        status: "Success"
    },
    {
        id: "LOG-002",
        action: "Invoice Generated",
        details: "Term 2 invoices generated for Grade 12",
        user: "System",
        role: "Automated",
        ip: "127.0.0.1",
        date: "Jan 06, 2026 09:00 AM",
        status: "Success"
    },
    {
        id: "LOG-003",
        action: "Refund Processed",
        details: "Transport fee refund for Michael Brown",
        user: "Robert Chen",
        role: "Bursar",
        ip: "192.168.1.42",
        date: "Jan 05, 2026 03:30 PM",
        status: "Success"
    },
    {
        id: "LOG-004",
        action: "Expense Approved",
        details: "Library book purchase request #REQ-882",
        user: "Sarah Smith",
        role: "Admin",
        ip: "192.168.1.15",
        date: "Jan 05, 2026 01:15 PM",
        status: "Success"
    },
    {
        id: "LOG-005",
        action: "Fee Structure Updated",
        details: "Updated laboratory fees for Grade 11 Science",
        user: "Robert Chen",
        role: "Bursar",
        ip: "192.168.1.42",
        date: "Jan 04, 2026 11:20 AM",
        status: "Warning"
    },
]

export function AuditLogsTable() {
    return (
        <div className="rounded-xl bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">System Audit Logs</h3>
                    <p className="text-sm text-gray-500">Track all financial activities and changes</p>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        Export CSV
                    </button>
                    <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                        Filter
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Log ID</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Action</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">User</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Details</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">IP Address</th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 text-xs font-mono text-gray-500">{log.id}</td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-gray-900 block">{log.action}</span>
                                    <Badge variant="outline" className={`mt-1 text-[10px] ${log.status === 'Success' ? 'border-green-200 text-green-700 bg-green-50' :
                                            'border-yellow-200 text-yellow-700 bg-yellow-50'
                                        }`}>
                                        {log.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6">
                                            <AvatarFallback className="text-[10px] bg-indigo-100 text-indigo-700">
                                                {log.user.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{log.user}</p>
                                            <p className="text-xs text-gray-500">{log.role}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate" title={log.details}>
                                    {log.details}
                                </td>
                                <td className="px-6 py-4 text-xs font-mono text-gray-500">{log.ip}</td>
                                <td className="px-6 py-4 text-right text-sm text-gray-500">{log.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="border-t border-gray-100 p-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">Showing 5 of 128 logs</span>
                <div className="flex gap-1">
                    <button className="px-3 py-1 border rounded text-xs hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 border rounded text-xs hover:bg-gray-50">Next</button>
                </div>
            </div>
        </div>
    )
}
