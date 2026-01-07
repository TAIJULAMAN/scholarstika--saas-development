"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"


const students = [
    { id: 1, name: "Alice Johnson", currentSection: "Grade 1-A", rollNo: "101", selected: false },
    { id: 2, name: "Bob Smith", currentSection: "Grade 1-A", rollNo: "102", selected: false },
    { id: 3, name: "Charlie Brown", currentSection: "Grade 1-A", rollNo: "103", selected: false },
    { id: 4, name: "Diana Prince", currentSection: "Grade 1-A", rollNo: "104", selected: false },
    { id: 5, name: "Ethan Hunt", currentSection: "Grade 1-A", rollNo: "105", selected: false },
]

const transferHistory = [
    { id: 1, studentName: "John Doe", from: "Hillcrest School", to: "Lakeside Learning Center", date: "2024-12-15", reason: "Parent request - relocation", status: "Completed" },
    { id: 2, studentName: "Jane Smith", from: "Southpark Academy", to: "Greenfield University", date: "2024-12-10", reason: "Academic program preference", status: "Completed" },
    { id: 3, studentName: "Mike Wilson", from: "Oakwood College", to: "Mountainside High School", date: "2024-12-05", reason: "Family relocation", status: "Completed" },
]

const promotionHistory = [
    { id: 1, studentName: "Sarah Williams", fromGrade: "Grade 1", toGrade: "Grade 2", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
    { id: 2, studentName: "Michael Chen", fromGrade: "Grade 2", toGrade: "Grade 3", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
    { id: 3, studentName: "Emma Davis", fromGrade: "Grade 3", toGrade: "Grade 4", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
    { id: 4, studentName: "James Rodriguez", fromGrade: "Grade 4", toGrade: "Grade 5", academicYear: "2023-2024", date: "2024-06-30", status: "Promoted" },
]

export function TransferPromotionContent() {
    const [selectedStudents, setSelectedStudents] = useState<number[]>([])
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [actionType, setActionType] = useState<"transfer" | "promotion">("transfer")

    return (
        <>
            <Tabs defaultValue="transfer" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="transfer">Transfer Students</TabsTrigger>
                    <TabsTrigger value="promotion">Promote Students</TabsTrigger>
                </TabsList>

                <TabsContent value="transfer" className="space-y-6">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">Recent Transfers</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                                    <tr>
                                        <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Student</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">From</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">To</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Date</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[250px]">Reason</th>
                                        <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transferHistory.map((transfer) => (
                                        <tr key={transfer.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                            <td className="whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900">{transfer.studentName}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transfer.from}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transfer.to}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{new Date(transfer.date).toLocaleDateString()}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{transfer.reason}</td>
                                            <td className="whitespace-nowrap py-4 pr-6"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{transfer.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="promotion" className="space-y-6">
                    <div className="rounded-xl bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900">Promotion History</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                                    <tr>
                                        <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Student Name</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">From Grade</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">To Grade</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Academic Year</th>
                                        <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Date</th>
                                        <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promotionHistory.map((promotion) => (
                                        <tr key={promotion.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                            <td className="whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900">{promotion.studentName}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{promotion.fromGrade}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{promotion.toGrade}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{promotion.academicYear}</td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-700">{new Date(promotion.date).toLocaleDateString()}</td>
                                            <td className="whitespace-nowrap py-4 pr-6">
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                                    {promotion.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                <DialogContent>
                    <DialogHeader><DialogTitle>Confirm {actionType === "transfer" ? "Transfer" : "Promotion"}</DialogTitle></DialogHeader>
                    <div className="py-4"><p className="text-sm text-gray-600">{actionType === "transfer" ? `Are you sure you want to transfer ${selectedStudents.length} student${selectedStudents.length !== 1 ? 's' : ''}? This action will update student records immediately.` : "Are you sure you want to promote the selected students to the next grade? This action cannot be easily undone."}</p></div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => { setShowConfirmDialog(false); setSelectedStudents([]) }}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
