"use client"

import { OptionalFeesStats } from "@/components/institution/optional-fees-management/optional-fees-stats"
import { OptionalFeesTable } from "@/components/institution/optional-fees-management/optional-fees-table"

export default function BursarOptionalFeesPage() {
    return (
        <div className="space-y-6">
            <OptionalFeesStats branchId="current" />
            <OptionalFeesTable />
        </div>
    )
}
