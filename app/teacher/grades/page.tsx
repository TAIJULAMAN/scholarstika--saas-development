"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/common/page-header"
import { Save } from "lucide-react"

const students = [
    { id: 1, name: "John Smith", grade: "" },
    { id: 2, name: "Emma Johnson", grade: "" },
    { id: 3, name: "Michael Brown", grade: "" },
    { id: 4, name: "Sophia Davis", grade: "" },
    { id: 5, name: "William Wilson", grade: "" },
    { id: 6, name: "Olivia Martinez", grade: "" },
    { id: 7, name: "James Anderson", grade: "" },
    { id: 8, name: "Ava Taylor", grade: "" },
]

export default function TeacherGradesPage() {
    const [selectedClass, setSelectedClass] = useState("Grade 10-A")
    const [assessmentType, setAssessmentType] = useState("Quiz")
    const [grades, setGrades] = useState<{ [key: number]: string }>(
        Object.fromEntries(students.map(s => [s.id, s.grade]))
    )

    const handleGradeChange = (studentId: number, grade: string) => {
        setGrades(prev => ({ ...prev, [studentId]: grade }))
    }

    const handleSave = () => {
        console.log("Saving grades:", { class: selectedClass, type: assessmentType, grades })
        alert("Grades saved successfully!")
    }

    return (
        <div className="space-y-6">
            <PageHeader
                title="Grades & Assessments"
                description="Enter and manage student grades"
            />

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-6 shadow-sm">
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Select Class</label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Grade 10-A">Mathematics - Grade 10-A</SelectItem>
                            <SelectItem value="Grade 10-B">Mathematics - Grade 10-B</SelectItem>
                            <SelectItem value="Grade 11-A">Algebra - Grade 11-A</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex-1">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Assessment Type</label>
                    <Select value={assessmentType} onValueChange={setAssessmentType}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Quiz">Quiz</SelectItem>
                            <SelectItem value="Midterm">Midterm Exam</SelectItem>
                            <SelectItem value="Final">Final Exam</SelectItem>
                            <SelectItem value="Assignment">Assignment</SelectItem>
                            <SelectItem value="Project">Project</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Grade Entry */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Enter Grades</h2>
                    <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Grades
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}>
                            <tr>
                                <th className="rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white">Student Name</th>
                                <th className="pb-3 pt-3 text-left text-sm font-semibold text-white">Grade (Out of 100)</th>
                                <th className="rounded-tr-lg pb-3 pr-6 pt-3 text-left text-sm font-semibold text-white">Letter Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => {
                                const numericGrade = parseInt(grades[student.id]) || 0
                                const letterGrade = numericGrade >= 90 ? "A" : numericGrade >= 80 ? "B" : numericGrade >= 70 ? "C" : numericGrade >= 60 ? "D" : "F"

                                return (
                                    <tr key={student.id} className="border-b border-gray-100">
                                        <td className="py-4 pl-6 font-medium text-gray-900">{student.name}</td>
                                        <td className="py-4">
                                            <Input
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={grades[student.id]}
                                                onChange={(e) => handleGradeChange(student.id, e.target.value)}
                                                className="w-32"
                                                placeholder="Enter grade"
                                            />
                                        </td>
                                        <td className="py-4 pr-6">
                                            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${letterGrade === "A" ? "bg-green-100 text-green-700" :
                                                    letterGrade === "B" ? "bg-blue-100 text-blue-700" :
                                                        letterGrade === "C" ? "bg-yellow-100 text-yellow-700" :
                                                            letterGrade === "D" ? "bg-orange-100 text-orange-700" :
                                                                "bg-red-100 text-red-700"
                                                }`}>
                                                {numericGrade > 0 ? letterGrade : "-"}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
