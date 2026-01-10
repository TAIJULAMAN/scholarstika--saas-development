"use client"

import { OnlineExamStats } from "@/components/institution/online-exam-management/online-exam-stats"
import { OnlineExamsTable } from "@/components/institution/online-exam-management/online-exams-table"

export default function BranchOnlineExamsPage() {
    return (
        <div className="space-y-6">
            <OnlineExamStats branchId="current" />
            <OnlineExamsTable />
        </div>
    )
}
