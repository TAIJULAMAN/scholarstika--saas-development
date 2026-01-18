import { ScholarshipTable } from "@/components/bursar/fees/scholarships/scholarship-table"
import { ScholarshipStats } from "@/components/bursar/fees/scholarships/scholarship-stats"

export default function ScholarshipManagementPage() {
    return (
        <div className="space-y-5">
            <ScholarshipStats />
            <ScholarshipTable />
        </div>
    )
}
