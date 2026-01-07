import { HealthStats } from "@/components/nurse/dashboard/health-stats"
import { TodaysVisits } from "@/components/nurse/dashboard/todays-visits"
import { MedicationAlerts } from "@/components/nurse/dashboard/medication-alerts"

export default function NurseDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Nurse Dashboard</h2>
                    <p className="text-gray-500">
                        Welcome back, Sarah. Here's what's happening at the clinic today.
                    </p>
                </div>
            </div>

            <HealthStats />

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                <TodaysVisits />
                <MedicationAlerts />
            </div>
        </div>
    )
}
