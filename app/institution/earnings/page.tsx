import { EarningsStats } from "@/components/institution/earnings/earnings-stats"
import { EarningsTable } from "@/components/institution/earnings/earnings-table"

export default function EarningsPage() {
    return (
        <div className="space-y-5">
            <EarningsStats />
            <EarningsTable />
        </div>
    )
}
