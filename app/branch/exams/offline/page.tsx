"use client"

import { OfflineExamStats } from "@/components/institution/offline-exam-management/offline-exam-stats"
import { OfflineExamsTable } from "@/components/institution/offline-exam-management/offline-exams-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchOfflineExamsPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Offline Exams Management"
                description="Schedule and manage traditional pen-and-paper examinations"
            /> */}
            <OfflineExamStats branchId="current" />
            <OfflineExamsTable />
        </div>
    )
}
