"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit2, Trash2, GraduationCap, Plus } from "lucide-react"
import { AddScholarshipDialog } from "./add-scholarship-dialog"

export function ScholarshipTable() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedScholarship, setSelectedScholarship] = useState<any>(null)

    const [scholarships, setScholarships] = useState([
        {
            id: 1,
            name: "Alice Johnson",
            value: "25",
            startDate: "2024-01-01",
            status: "active",
            description: "Merit Excellence"
        },
        {
            id: 2,
            name: "Bob Smith",
            value: "50",
            startDate: "2024-02-15",
            status: "active",
            description: "Sports Quota"
        },
        {
            id: 3,
            name: "Charlie Brown",
            value: "10",
            startDate: "2024-01-10",
            status: "active",
            description: "Sibling Discount"
        },
        {
            id: 4,
            name: "Diana Prince",
            value: "5",
            startDate: "2024-03-01",
            status: "pending",
            description: "Early Bird"
        }
    ])

    const handleAdd = () => {
        setSelectedScholarship(null)
        setIsDialogOpen(true)
    }

    const handleEdit = (scholarship: any) => {
        setSelectedScholarship(scholarship)
        setIsDialogOpen(true)
    }

    const handleSave = (data: any) => {
        if (selectedScholarship) {
            setScholarships(scholarships.map(s => s.id === selectedScholarship.id ? { ...data, id: s.id } : s))
        } else {
            setScholarships([...scholarships, { ...data, id: Date.now() }])
        }
    }

    const handleDelete = (id: number) => {
        setScholarships(scholarships.filter(s => s.id !== id))
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <Button onClick={handleAdd} className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Scholarship
                </Button>
            </div>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader className="bg-emerald-600">
                        <TableRow className="hover:bg-emerald-600/100">
                            <TableHead className="text-white">Student Name</TableHead>
                            <TableHead className="text-white">Value (%)</TableHead>
                            <TableHead className="text-white">Start Date</TableHead>
                            <TableHead className="text-white">Status</TableHead>
                            <TableHead className="text-right text-white">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {scholarships.map((scholarship) => (
                            <TableRow key={scholarship.id} className="hover:bg-emerald-50/50">
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                                            <GraduationCap className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-emerald-950">{scholarship.name}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="font-mono font-medium">
                                    {scholarship.value}%
                                </TableCell>
                                <TableCell>
                                    {scholarship.startDate}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant={scholarship.status === "active" ? "default" : "secondary"}
                                        className={
                                            scholarship.status === "active"
                                                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                                : scholarship.status === "pending"
                                                    ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                                                    : "bg-gray-100 text-gray-700"
                                        }
                                    >
                                        {scholarship.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-gray-500 hover:text-emerald-600"
                                            onClick={() => handleEdit(scholarship)}
                                        >
                                            <Edit2 className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-gray-500 hover:text-red-600"
                                            onClick={() => handleDelete(scholarship.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <AddScholarshipDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSave={handleSave}
                initialData={selectedScholarship}
            />
        </div>
    )
}
