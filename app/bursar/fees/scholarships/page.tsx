import { ScholarshipTable } from "@/components/bursar/fees/scholarships/scholarship-table"
import { ScholarshipStats } from "@/components/bursar/fees/scholarships/scholarship-stats"

export default function ScholarshipManagementPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Scholarship Management</h2>
                    <p className="text-gray-500 mt-1">
                        Monitor scholarship programs and manage student discounts.
                    </p>
                </div>
            </div>

            <ScholarshipStats />

            <ScholarshipTable />
        </div>
    )
}
