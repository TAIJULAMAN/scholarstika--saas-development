"use client"

import { SubjectsTable } from "@/components/branch/subject-management/subjects-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchSubjectsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Subjects"
                description="Manage subjects taught in this branch"
            />
            <SubjectsTable />
        </div>
    )
}
