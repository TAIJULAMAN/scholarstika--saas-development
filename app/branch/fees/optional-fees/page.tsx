"use client"

import { OptionalFeesStats } from "@/components/institution/optional-fees-management/optional-fees-stats"
import { OptionalFeesTable } from "@/components/institution/optional-fees-management/optional-fees-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchOptionalFeesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Optional Fees Management"
                description="Manage extracurricular activities, transport, and other optional services"
            />
            <OptionalFeesStats branchId="current" />
            <OptionalFeesTable />
        </div>
    )
}
