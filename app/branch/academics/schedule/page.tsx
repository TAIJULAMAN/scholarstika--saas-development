"use client"

import { PageHeader } from "@/components/common/page-header"
import { Calendar, Clock } from "lucide-react"

export default function BranchSchedulePage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Class Schedule"
                description="View and manage class schedules"
            />

            <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">Weekly Schedule</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Time</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Monday</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Tuesday</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Wednesday</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Thursday</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 pl-6 font-medium text-gray-900">8:00 - 9:00</td>
                                <td className="py-4 text-sm text-gray-600">Mathematics</td>
                                <td className="py-4 text-sm text-gray-600">English</td>
                                <td className="py-4 text-sm text-gray-600">Science</td>
                                <td className="py-4 text-sm text-gray-600">History</td>
                                <td className="py-4 pr-6 text-sm text-gray-600">Geography</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
