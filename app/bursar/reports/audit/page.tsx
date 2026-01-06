"use client"

import { AuditLogsTable } from "@/components/bursar/reports/audit-logs/audit-table"

export default function AuditReportsPage() {
    return (
        <div className="space-y-6">
            <AuditLogsTable />
        </div>
    )
}
