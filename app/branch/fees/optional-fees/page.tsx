"use client"

import { OptionalFeesTable } from "@/components/branch/optional-fees-management/optional-fees-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchOptionalFeesPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Optional Fees"
                description="Manage optional fees for this branch"
            />
            <OptionalFeesTable />
        </div>
    )
}
