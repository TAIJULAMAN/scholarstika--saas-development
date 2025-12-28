import { ClipboardList, TrendingUp, Award, AlertCircle } from "lucide-react"

interface ExamResultsStatsProps {
    branchId?: string
}

const getExamResultsStats = (branchId?: string) => {
    if (branchId === "all") {
        return [
            { icon: ClipboardList, label: "Total Results", value: "42", color: "text-blue-600", bgColor: "bg-blue-50" },
            { icon: TrendingUp, label: "Average Score", value: "78.5%", color: "text-green-600", bgColor: "bg-green-50" },
            { icon: Award, label: "Pass Rate", value: "92.3%", color: "text-purple-600", bgColor: "bg-purple-50" },
            { icon: AlertCircle, label: "Pending Results", value: "8", color: "text-orange-600", bgColor: "bg-orange-50" },
        ]
    }
    return [
        { icon: ClipboardList, label: "Results", value: "10", color: "text-blue-600", bgColor: "bg-blue-50" },
        { icon: TrendingUp, label: "Avg Score", value: "75.2%", color: "text-green-600", bgColor: "bg-green-50" },
        { icon: Award, label: "Pass Rate", value: "89.1%", color: "text-purple-600", bgColor: "bg-purple-50" },
        { icon: AlertCircle, label: "Pending", value: "2", color: "text-orange-600", bgColor: "bg-orange-50" },
    ]
}

export function ExamResultsStats({ branchId }: ExamResultsStatsProps) {
    const stats = getExamResultsStats(branchId)
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <div key={stat.label} className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="mt-2 text-4xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            <div className={`rounded-lg ${stat.bgColor} p-3`}>
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
