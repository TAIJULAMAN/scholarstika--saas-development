"use client"

import { useState } from "react"
import { PageHeader } from "@/components/common/page-header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TablePagination } from "@/components/common/table-pagination"
import { Search, Plus, Pencil, Trash2, Eye, Mail, Phone, UserPlus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ViewStaffDialog } from "@/components/branch/staff-management/view-staff-dialog"
import { EditStaffDialog } from "@/components/branch/staff-management/edit-staff-dialog"
import { DeleteStaffDialog } from "@/components/branch/staff-management/delete-staff-dialog"

const staffMembers = [
    {
        id: 1,
        name: "Alice Johnson",
        userName: "Class Monitor",
        email: "alice.j@scholastika.edu",
        phone: "+1 (555) 123-4567",
        role: "Student",
        grade: "Grade 10-A",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 2,
        name: "Robert Smith",
        userName: "Senior Teacher",
        email: "robert.s@scholastika.edu",
        phone: "+1 (555) 234-5678",
        role: "Teacher",
        subject: "Mathematics",
        joinedDate: "2023-06-20",
        status: "Active"
    },
    {
        id: 3,
        name: "Mary Williams",
        userName: "PTA Secretary",
        email: "mary.w@gmail.com",
        phone: "+1 (555) 345-6789",
        role: "Parent",
        studentName: "Alice Johnson",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 4,
        name: "John Davis",
        userName: "Prefect",
        email: "john.d@scholastika.edu",
        phone: "+1 (555) 456-7890",
        role: "Student",
        grade: "Grade 9-B",
        joinedDate: "2024-01-10",
        status: "Active"
    },
    {
        id: 5,
        name: "Sarah Martinez",
        userName: "Assistant Teacher",
        email: "sarah.m@scholastika.edu",
        phone: "+1 (555) 567-8901",
        role: "Teacher",
        subject: "English",
        joinedDate: "2023-08-12",
        status: "Active"
    },
    {
        id: 6,
        name: "Michael Brown",
        userName: "Head Bursar",
        email: "michael.b@scholastika.edu",
        phone: "+1 (555) 678-9012",
        role: "Bursar",
        department: "Finance",
        joinedDate: "2024-01-10",
        status: "Active"
    },
    {
        id: 7,
        name: "Emily Davis",
        userName: "School Nurse",
        email: "emily.d@scholastika.edu",
        phone: "+1 (555) 789-0123",
        role: "Nurse",
        department: "Health Services",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 8,
        name: "William Wilson",
        userName: "Trainee Teacher",
        email: "william.w@scholastika.edu",
        phone: "+1 (555) 890-1234",
        role: "Teacher",
        subject: "Science",
        joinedDate: "2023-06-20",
        status: "Active"
    },
    {
        id: 9,
        name: "Olivia Taylor",
        userName: "Parent Volunteer",
        email: "olivia.t@gmail.com",
        phone: "+1 (555) 901-2345",
        role: "Parent",
        studentName: "Emily Davis",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 10,
        name: "James Anderson",
        userName: "Student Council",
        email: "james.a@scholastika.edu",
        phone: "+1 (555) 012-3456",
        role: "Student",
        grade: "Grade 12-D",
        joinedDate: "2024-01-10",
        status: "Active"
    },
    {
        id: 11,
        name: "Sophia Moore",
        userName: "Department Head",
        email: "sophia.m@scholastika.edu",
        phone: "+1 (555) 123-4567",
        role: "Teacher",
        subject: "History",
        joinedDate: "2023-08-12",
        status: "Active"
    },
    {
        id: 12,
        name: "David Wilson",
        userName: "Guardian",
        email: "david.w@scholastika.edu",
        phone: "+1 (555) 234-5678",
        role: "Parent",
        studentName: "James Anderson",
        joinedDate: "2024-01-10",
        status: "Active"
    },
    {
        id: 13,
        name: "Isabella Johnson",
        userName: "Librarian Assistant",
        email: "isabella.j@scholastika.edu",
        phone: "+1 (555) 345-6789",
        role: "Student",
        grade: "Grade 11-E",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 14,
        name: "William Brown",
        userName: "Substitute Teacher",
        email: "william.b@scholastika.edu",
        phone: "+1 (555) 456-7890",
        role: "Teacher",
        subject: "Mathematics",
        joinedDate: "2023-06-20",
        status: "Active"
    },
    {
        id: 15,
        name: "Olivia Davis",
        userName: "Parent",
        email: "olivia.d@gmail.com",
        phone: "+1 (555) 567-8901",
        role: "Parent",
        studentName: "Isabella Johnson",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 16,
        name: "Michael Wilson",
        userName: "Sports Captain",
        email: "michael.w@scholastika.edu",
        phone: "+1 (555) 678-9012",
        role: "Student",
        grade: "Grade 12-F",
        joinedDate: "2024-01-10",
        status: "Active"
    },
    {
        id: 17,
        name: "Emily Taylor",
        userName: "English Coordinator",
        email: "emily.t@scholastika.edu",
        phone: "+1 (555) 789-0123",
        role: "Teacher",
        subject: "English",
        joinedDate: "2023-08-12",
        status: "Active"
    },
    {
        id: 18,
        name: "William Brown",
        userName: "Parent",
        email: "william.b@scholastika.edu",
        phone: "+1 (555) 890-1234",
        role: "Parent",
        studentName: "Michael Wilson",
        joinedDate: "2024-01-10",
        status: "Active"
    },
    {
        id: 19,
        name: "Olivia Davis",
        userName: "Choir Member",
        email: "olivia.d@gmail.com",
        phone: "+1 (555) 901-2345",
        role: "Student",
        grade: "Grade 11-G",
        joinedDate: "2024-01-15",
        status: "Active"
    },
    {
        id: 20,
        name: "Michael Wilson",
        userName: "Standard Teacher",
        email: "michael.w@scholastika.edu",
        phone: "+1 (555) 012-3456",
        role: "Teacher",
        subject: "Science",
        joinedDate: "2023-06-20",
        status: "Active"
    }
]

export default function BranchStaffManagementPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [roleFilter, setRoleFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedMember, setSelectedMember] = useState<typeof staffMembers[0] | null>(null)
    const [selectedRole, setSelectedRole] = useState("")

    const filteredMembers = staffMembers.filter(member => {
        const matchesSearch =
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.role.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesRole = roleFilter === "all" || member.role === roleFilter
        return matchesSearch && matchesRole
    })

    const itemsPerPage = 8
    const totalPages = Math.ceil(filteredMembers.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentMembers = filteredMembers.slice(startIndex, endIndex)

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case "Student":
                return "bg-blue-100 text-blue-800"
            case "Teacher":
                return "bg-purple-100 text-purple-800"
            case "Parent":
                return "bg-orange-100 text-orange-800"
            case "Bursar":
                return "bg-green-100 text-green-800"
            case "Nurse":
                return "bg-pink-100 text-pink-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const handleView = (member: typeof staffMembers[0]) => {
        setSelectedMember(member)
        setIsViewDialogOpen(true)
    }

    const handleEdit = (member: typeof staffMembers[0]) => {
        setSelectedMember(member)
        setIsEditDialogOpen(true)
    }

    const handleDelete = (member: typeof staffMembers[0]) => {
        setSelectedMember(member)
        setIsDeleteDialogOpen(true)
    }

    return (
        <div className="space-y-5">
            <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">Staff Directory</h2>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <Select value={roleFilter} onValueChange={setRoleFilter}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="All Roles" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Roles</SelectItem>
                                <SelectItem value="Student">Students</SelectItem>
                                <SelectItem value="Teacher">Teachers</SelectItem>
                                <SelectItem value="Parent">Parents</SelectItem>
                                <SelectItem value="Bursar">Bursar</SelectItem>
                                <SelectItem value="Nurse">Nurse</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search staff..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 w-64"
                            />
                        </div>

                        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                            <DialogTrigger asChild>
                                <Button
                                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }}
                                    className="text-white"
                                >
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Member
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-full md:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Add New Member</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                    <div>
                                        <Label>Select Role</Label>
                                        <Select value={selectedRole} onValueChange={setSelectedRole}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="student">Student</SelectItem>
                                                <SelectItem value="teacher">Teacher</SelectItem>
                                                <SelectItem value="parent">Parent</SelectItem>
                                                <SelectItem value="bursar">Bursar</SelectItem>
                                                <SelectItem value="nurse">Nurse</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Name</Label>
                                        <Input placeholder="Enter full name" />
                                    </div>
                                    <div>
                                        <Label>User Name</Label>
                                        <Input placeholder="e.g. Assistant Teacher, Prefect" />
                                    </div>
                                    <div>
                                        <Label>Email</Label>
                                        <Input type="email" placeholder="email@example.com" />
                                    </div>
                                    <div>
                                        <Label>Phone</Label>
                                        <Input placeholder="+1 (555) 000-0000" />
                                    </div>
                                    {selectedRole === "student" && (
                                        <div>
                                            <Label>Grade</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select grade" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="grade-8">Grade 8</SelectItem>
                                                    <SelectItem value="grade-9">Grade 9</SelectItem>
                                                    <SelectItem value="grade-10">Grade 10</SelectItem>
                                                    <SelectItem value="grade-11">Grade 11</SelectItem>
                                                    <SelectItem value="grade-12">Grade 12</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                    {selectedRole === "teacher" && (
                                        <div>
                                            <Label>Subject</Label>
                                            <Input placeholder="Subject taught" />
                                        </div>
                                    )}
                                    {selectedRole === "parent" && (
                                        <div>
                                            <Label>Student Name</Label>
                                            <Input placeholder="Child's name" />
                                        </div>
                                    )}
                                    {(selectedRole === "bursar" || selectedRole === "nurse") && (
                                        <div>
                                            <Label>Department</Label>
                                            <Input placeholder="Department name" />
                                        </div>
                                    )}
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                        <UserPlus className="mr-2 h-4 w-4" />
                                        Add Member
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="rounded-t-lg">
                            <tr>
                                <th className="whitespace-nowrap rounded-tl-lg pb-3 pl-6 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Name</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">Role</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[120px]">User Name</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Details</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[200px]">Contact</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[150px]">Joined Date</th>
                                <th className="whitespace-nowrap pb-3 pt-3 text-left text-sm font-semibold text-white min-w-[100px]">Status</th>
                                <th className="whitespace-nowrap rounded-tr-lg pb-3 pr-6 pt-3 text-right text-sm font-semibold text-white min-w-[150px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentMembers.map((member) => (
                                <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-6">
                                        <p className="font-semibold text-gray-900">{member.name}</p>
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getRoleBadgeColor(member.role)}`}>
                                            {member.role}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getRoleBadgeColor(member.role)}`}>
                                            {member.userName}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-600">
                                        {member.role === "Student" && member.grade}
                                        {member.role === "Teacher" && member.subject}
                                        {member.role === "Parent" && member.studentName}
                                        {member.role === "Bursar" && member.department}
                                        {member.role === "Nurse" && member.department}
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Mail className="h-3 w-3" />
                                                <span className="text-xs">{member.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="h-3 w-3" />
                                                <span className="text-xs">{member.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap py-4 text-sm text-gray-600">
                                        {new Date(member.joinedDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </td>
                                    <td className="whitespace-nowrap py-4">
                                        <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap py-4 pr-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleView(member)}
                                                className="rounded-lg p-2 text-blue-600 hover:bg-blue-50 transition-colors"
                                                title="View Details"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(member)}
                                                className="rounded-lg p-2 text-green-600 hover:bg-green-50 transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(member)}
                                                className="rounded-lg p-2 text-red-600 hover:bg-red-50 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={filteredMembers.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                    itemLabel="members"
                />
            </div>

            {/* Dialogs */}
            {selectedMember && (
                <>
                    <ViewStaffDialog
                        open={isViewDialogOpen}
                        onOpenChange={setIsViewDialogOpen}
                        member={selectedMember}
                    />
                    <EditStaffDialog
                        open={isEditDialogOpen}
                        onOpenChange={setIsEditDialogOpen}
                        member={selectedMember}
                    />
                    <DeleteStaffDialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                        memberName={selectedMember.name}
                        memberRole={selectedMember.role}
                    />
                </>
            )}
        </div>
    )
}
