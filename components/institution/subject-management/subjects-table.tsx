"use client"

import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Trash2 } from "lucide-react"

const subjects = [
    {
        id: 1,
        name: "Mathematics",
        code: "MATH-101",
        department: "Mathematics",
        grades: "1-5",
        hoursPerWeek: 6,
        teachers: 8,
        status: "Active",
    },
    {
        id: 2,
        name: "English Language",
        code: "ENG-101",
        department: "Languages",
        grades: "1-5",
        hoursPerWeek: 5,
        teachers: 7,
        status: "Active",
    },
    {
        id: 3,
        name: "Science",
        code: "SCI-101",
        department: "Science",
        grades: "1-5",
        hoursPerWeek: 4,
        teachers: 6,
        status: "Active",
    },
    {
        id: 4,
        name: "Social Studies",
        code: "SOC-101",
        department: "Social Sciences",
        grades: "3-5",
        hoursPerWeek: 3,
        teachers: 4,
        status: "Active",
    },
    {
        id: 5,
        name: "Physical Education",
        code: "PE-101",
        department: "Physical Education",
        grades: "1-5",
        hoursPerWeek: 2,
        teachers: 3,
        status: "Active",
    },
    {
        id: 6,
        name: "Art & Craft",
        code: "ART-101",
        department: "Arts",
        grades: "1-5",
        hoursPerWeek: 2,
        teachers: 3,
        status: "Active",
    },
]

export function SubjectsTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedSubject, setSelectedSubject] = useState<typeof subjects[0] | null>(null)

    // Filter subjects based on search query
    const filteredSubjects = useMemo(() => {
        return subjects.filter(subject => {
            const matchesSearch = searchQuery === "" ||
                subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                subject.department.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesSearch
        })
    }, [searchQuery])

    const itemsPerPage = 6
    const totalPages = Math.ceil(filteredSubjects.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentSubjects = filteredSubjects.slice(startIndex, endIndex)

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery])

    return (
        <>
            {/* Subjects Table */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">All Subjects</h2>
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1 min-w-[250px]">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search subjects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>


                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Subject</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Code</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Department</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Grades</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Hours/Week</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Teachers</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentSubjects.map((subject) => (
                                <tr key={subject.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                    <td className="py-4 pl-6">
                                        <p className="font-medium text-gray-900">{subject.name}</p>
                                    </td>
                                    <td className="py-4 text-sm text-gray-700">{subject.code}</td>
                                    <td className="py-4 text-sm text-gray-700">{subject.department}</td>
                                    <td className="py-4 text-sm text-gray-700">{subject.grades}</td>
                                    <td className="py-4 text-sm font-semibold text-gray-900">{subject.hoursPerWeek}</td>
                                    <td className="py-4 text-sm text-gray-700">{subject.teachers}</td>
                                    <td className="py-4">
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                            {subject.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredSubjects.length)} of {filteredSubjects.length} results
                    </p>
                    <div className="flex gap-1">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                            const pageNum = i + 1
                            return (
                                <Button
                                    key={pageNum}
                                    size="sm"
                                    variant={currentPage === pageNum ? "default" : "outline"}
                                    style={currentPage === pageNum ? { backgroundColor: 'rgba(16, 185, 129, 0.8)' } : {}}
                                    className={currentPage === pageNum ? "text-white hover:bg-emerald-700" : ""}
                                    onClick={() => setCurrentPage(pageNum)}
                                >
                                    {pageNum}
                                </Button>
                            )
                        })}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            {/* Edit Subject Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Subject</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label>Subject Name</Label>
                            <Input placeholder="e.g., Mathematics" defaultValue={selectedSubject?.name} />
                        </div>
                        <div>
                            <Label>Subject Code</Label>
                            <Input placeholder="e.g., MATH-101" defaultValue={selectedSubject?.code} />
                        </div>
                        <div>
                            <Label>Department</Label>
                            <Select defaultValue={selectedSubject?.department.toLowerCase().replace(' ', '')}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="mathematics">Mathematics</SelectItem>
                                    <SelectItem value="science">Science</SelectItem>
                                    <SelectItem value="languages">Languages</SelectItem>
                                    <SelectItem value="socialsciences">Social Sciences</SelectItem>
                                    <SelectItem value="arts">Arts</SelectItem>
                                    <SelectItem value="physicaleducation">Physical Education</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Grade Levels</Label>
                            <Input placeholder="e.g., 1-5 or 3,4,5" defaultValue={selectedSubject?.grades} />
                        </div>
                        <div>
                            <Label>Hours Per Week</Label>
                            <Input type="number" placeholder="5" defaultValue={selectedSubject?.hoursPerWeek} />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Textarea placeholder="Subject description..." rows={3} />
                        </div>
                        <Button
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            onClick={() => {
                                // Handle update logic here
                                setIsEditDialogOpen(false)
                                setSelectedSubject(null)
                            }}
                        >
                            Update Subject
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Delete Subject Dialog */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Subject</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                            Are you sure you want to delete this subject? This action cannot be undone and will affect all associated data.
                        </p>
                        <div className="rounded-lg bg-gray-50 p-4 space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Subject:</span>
                                <span className="text-sm text-gray-900">{selectedSubject?.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Code:</span>
                                <span className="text-sm text-gray-900">{selectedSubject?.code}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Department:</span>
                                <span className="text-sm text-gray-900">{selectedSubject?.department}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Grade Levels:</span>
                                <span className="text-sm text-gray-900">{selectedSubject?.grades}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium text-gray-700">Teachers Assigned:</span>
                                <span className="text-sm text-gray-900">{selectedSubject?.teachers}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => {
                                    setIsDeleteDialogOpen(false)
                                    setSelectedSubject(null)
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="flex-1 bg-red-600 hover:bg-red-700"
                                onClick={() => {
                                    // Handle delete logic here
                                    setIsDeleteDialogOpen(false)
                                    setSelectedSubject(null)
                                }}
                            >
                                Delete Subject
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
