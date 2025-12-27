import { PageHeader } from "@/components/common/page-header"
import { EarningsStats } from "@/components/institution/earnings/earnings-stats"
import { EarningsTable } from "@/components/institution/earnings/earnings-table"

export default function EarningsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Earnings Summary"
                description="Overview of fees collection and financial management across all branches"
            />
            <EarningsStats />
            <EarningsTable />
        </div>
    )
}
