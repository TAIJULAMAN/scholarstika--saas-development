"use client"

import { ExamResultsTable } from "@/components/branch/exam-results-management/exam-results-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchExamResultsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Exam Results"
                description="View and manage exam results for this branch"
            />
            <ExamResultsTable />
        </div>
    )
}
