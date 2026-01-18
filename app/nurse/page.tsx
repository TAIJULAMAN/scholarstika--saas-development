import { HealthStats } from "@/components/nurse/dashboard/health-stats"
import { TodaysVisits } from "@/components/nurse/dashboard/todays-visits"
import { MedicationAlerts } from "@/components/nurse/dashboard/medication-alerts"

export default function NurseDashboard() {
    return (
        <div className="space-y-5">
            <HealthStats />

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                <TodaysVisits />
                <MedicationAlerts />
            </div>
        </div>
    )
}
