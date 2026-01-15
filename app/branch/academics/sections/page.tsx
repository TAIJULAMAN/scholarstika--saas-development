"use client"

import { SectionsTable } from "@/components/branch/section-management/sections-table"
import { SectionStats } from "@/components/branch/section-management/section-stats"

export default function BranchSectionsPage() {
    return (
        <div className="space-y-6">
            <SectionStats branchId="1" />
            <SectionsTable />
        </div>
    )
}
