"use client"

import { OnlineExamsTable } from "@/components/branch/online-exam-management/online-exams-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchOnlineExamsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Online Exams"
                description="Manage online examinations for this branch"
            />
            <OnlineExamsTable />
        </div>
    )
}
