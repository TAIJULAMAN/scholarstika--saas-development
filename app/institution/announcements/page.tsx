"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Bold, Italic, Underline, List, ListOrdered, Link2, Upload, Eye, Pencil, Trash2 } from "lucide-react"

const pastAnnouncements = [
    {
        id: 1,
        title: "Winter Break Schedule Update",
        description: "Important information regarding...",
        date: "Dec 5, 2024",
        branches: "All Branches",
        status: "Active",
    },
    {
        id: 2,
        title: "Annual Sports Day Event",
        description: "Join us for our annual sports...",
        date: "Dec 3, 2024",
        branches: "Downtown Campus",
        status: "Active",
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting Notice",
        description: "Scheduled meetings for all grades...",
        date: "Nov 28, 2024",
        branches: "North Side, Westfield",
        status: "Active",
    },
    {
        id: 4,
        title: "Exam Schedule Released",
        description: "Final examination timetable...",
        date: "Nov 25, 2024",
        branches: "All Branches",
        status: "Archived",
    },
    {
        id: 5,
        title: "New Cafeteria Menu",
        description: "Updated menu for the month...",
        date: "Nov 20, 2024",
        branches: "Riverside School",
        status: "Active",
    },
    {
        id: 6,
        title: "Library Hours Extended",
        description: "New extended hours for students...",
        date: "Nov 18, 2024",
        branches: "All Branches",
        status: "Archived",
    },
]

export default function AnnouncementsPage() {
    const [selectedBranch, setSelectedBranch] = useState("all")
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [notifyTeachers, setNotifyTeachers] = useState(false)
    const [notifyStudents, setNotifyStudents] = useState(false)
    const [notifyParents, setNotifyParents] = useState(false)
    const [statusFilter, setStatusFilter] = useState("all")
    const [branchFilter, setBranchFilter] = useState("all")

    const handleSendAnnouncement = () => {
        // Handle announcement submission
        console.log({ selectedBranch, title, message, notifyTeachers, notifyStudents, notifyParents })
    }

    return (
        <div className="space-y-6">
            {/* Create Announcement Form */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Manage Announcements Across All Branches</h2>
                    <p className="text-sm text-gray-600">Create and broadcast messages across all branches.</p>
                </div>

                <div className="space-y-4">
                    {/* Select Branch */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Select Branch</label>
                        <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Branches</SelectItem>
                                <SelectItem value="downtown">Downtown Campus</SelectItem>
                                <SelectItem value="westside">Westside Branch</SelectItem>
                                <SelectItem value="northgate">Northgate Academy</SelectItem>
                                <SelectItem value="riverside">Riverside School</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Announcement Title */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Announcement Title</label>
                        <Input
                            placeholder="Enter announcement title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
                        <div className="rounded-lg border">
                            {/* Toolbar */}
                            <div className="flex items-center gap-1 border-b bg-gray-50 p-2">
                                <button className="rounded p-1.5 hover:bg-gray-200">
                                    <Bold className="h-4 w-4" />
                                </button>
                                <button className="rounded p-1.5 hover:bg-gray-200">
                                    <Italic className="h-4 w-4" />
                                </button>
                                <button className="rounded p-1.5 hover:bg-gray-200">
                                    <Underline className="h-4 w-4" />
                                </button>
                                <div className="mx-1 h-6 w-px bg-gray-300"></div>
                                <button className="rounded p-1.5 hover:bg-gray-200">
                                    <List className="h-4 w-4" />
                                </button>
                                <button className="rounded p-1.5 hover:bg-gray-200">
                                    <ListOrdered className="h-4 w-4" />
                                </button>
                                <div className="mx-1 h-6 w-px bg-gray-300"></div>
                                <button className="rounded p-1.5 hover:bg-gray-200">
                                    <Link2 className="h-4 w-4" />
                                </button>
                            </div>
                            {/* Text Area */}
                            <textarea
                                className="w-full resize-none border-0 p-4 focus:outline-none"
                                rows={6}
                                placeholder="Type your announcement message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    {/* Attachments */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Attachments</label>
                        <div className="flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-gray-400 hover:bg-gray-100">
                            <div className="text-center">
                                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                                <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                                <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Visibility Options */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Visibility Options</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={notifyTeachers}
                                    onChange={(e) => setNotifyTeachers(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">Notify Teachers</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={notifyStudents}
                                    onChange={(e) => setNotifyStudents(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">Notify Students</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={notifyParents}
                                    onChange={(e) => setNotifyParents(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">Notify Parents</span>
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            onClick={handleSendAnnouncement}
                            className="bg-green-600 hover:bg-green-700"
                        >
                            Send Announcement
                        </Button>
                        <Button variant="outline">Cancel</Button>
                    </div>
                </div>
            </div>

            {/* Past Announcements */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Past Announcements</h3>
                    <div className="flex gap-2">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-32">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={branchFilter} onValueChange={setBranchFilter}>
                            <SelectTrigger className="w-40">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Branches</SelectItem>
                                <SelectItem value="downtown">Downtown Campus</SelectItem>
                                <SelectItem value="westside">Westside Branch</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="date">
                            <SelectTrigger className="w-32">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="date">Sort by Date</SelectItem>
                                <SelectItem value="title">Sort by Title</SelectItem>
                                <SelectItem value="status">Sort by Status</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Created Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Assigned Branches</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {pastAnnouncements.map((announcement) => (
                                <tr key={announcement.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{announcement.title}</p>
                                            <p className="text-sm text-gray-600">{announcement.description}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-700">{announcement.date}</td>
                                    <td className="px-4 py-4 text-sm text-gray-700">{announcement.branches}</td>
                                    <td className="px-4 py-4">
                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${announcement.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {announcement.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="rounded p-1.5 text-blue-600 hover:bg-blue-50">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="rounded p-1.5 text-gray-600 hover:bg-gray-100">
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button className="rounded p-1.5 text-red-600 hover:bg-red-50">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <p className="text-sm text-gray-600">Showing 1 to 6 of 24 announcements</p>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm">Previous</Button>
                        <Button variant="outline" size="sm" className="bg-purple-600 text-white hover:bg-purple-700">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">4</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
