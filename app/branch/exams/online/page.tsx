"use client"

import { OnlineExamStats } from "@/components/institution/online-exam-management/online-exam-stats"
import { OnlineExamsTable } from "@/components/institution/online-exam-management/online-exams-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchOnlineExamsPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Online Exams Management"
                description="Create and manage online assessments and examinations"
            /> */}
            <OnlineExamStats branchId="current" />
            <OnlineExamsTable />
        </div>
    )
}
