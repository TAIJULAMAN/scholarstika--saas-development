"use client"

import { OfflineExamsTable } from "@/components/branch/offline-exam-management/offline-exams-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchOfflineExamsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Offline Exams"
                description="Manage offline examinations for this branch"
            />
            <OfflineExamsTable />
        </div>
    )
}
