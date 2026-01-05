"use client"

import { SectionsTable } from "@/components/branch/section-management/sections-table"
import { SectionStats } from "@/components/branch/section-management/section-stats"
import { PageHeader } from "@/components/common/page-header"

export default function BranchSectionsPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Sections & Classes"
                description="Manage class sections in this branch"
            /> */}
            <SectionStats branchId="1" />
            <SectionsTable />
        </div>
    )
}
