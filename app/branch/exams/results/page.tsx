"use client"

import { ExamResultsStats } from "@/components/institution/exam-results-management/exam-results-stats"
import { ExamResultsTable } from "@/components/institution/exam-results-management/exam-results-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchExamResultsPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Exam Results Management"
                description="View and manage exam results and student performance"
            /> */}
            <ExamResultsStats branchId="current" />
            <ExamResultsTable />
        </div>
    )
}
