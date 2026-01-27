"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EditTeacherDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    teacher: {
        id: number
        name: string
        email: string
        branch: string
        subject: string
        phone: string
        address: string
        assignedClass?: string
        avatar?: string
    }
}

export function EditTeacherDialog({ open, onOpenChange, teacher }: EditTeacherDialogProps) {
    const [formData, setFormData] = useState({
        name: teacher.name,
        email: teacher.email,
        branch: teacher.branch,
        subject: teacher.subject,
        assignedClass: teacher.assignedClass || "",
        phone: teacher.phone,
        address: teacher.address,
        avatar: teacher.avatar || "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Updating teacher:", teacher.id, formData)
        onOpenChange(false)
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Edit Teacher</h2>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Teacher Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Branch <span className="text-red-500">*</span>
                        </label>
                        <select
                            required
                            value={formData.branch}
                            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        >
                            <option value="Main Campus">Main Campus</option>
                            <option value="North Branch">North Branch</option>
                            <option value="South Branch">South Branch</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <Select
                                value={formData.subject}
                                onValueChange={(value) => setFormData({ ...formData, subject: value })}
                            >
                                <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select Subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                                    <SelectItem value="Science">Science</SelectItem>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="History">History</SelectItem>
                                    <SelectItem value="Physics">Physics</SelectItem>
                                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                                    <SelectItem value="Biology">Biology</SelectItem>
                                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Assigned Class</label>
                            <Select
                                value={formData.assignedClass}
                                onValueChange={(value) => setFormData({ ...formData, assignedClass: value })}
                            >
                                <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select Class" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Grade 1-A">Grade 1-A</SelectItem>
                                    <SelectItem value="Grade 1-B">Grade 1-B</SelectItem>
                                    <SelectItem value="Grade 2-A">Grade 2-A</SelectItem>
                                    <SelectItem value="Grade 2-B">Grade 2-B</SelectItem>
                                    <SelectItem value="Grade 3-A">Grade 3-A</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="123-456-7890"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="123 Main St, City, Country"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => onOpenChange(false)}
                            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                            className="flex-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
                        >
                            Update Teacher
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
