"use client"

import { useState } from "react"
import { X, Check, ChevronsUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"

interface AddTeacherDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function AddTeacherDialog({ open, onOpenChange }: AddTeacherDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        branch: "",
        subject: [] as string[],
        assignedClass: "",
        phone: "",
        address: "",
        avatar: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Creating teacher:", formData)
        onOpenChange(false)

        setFormData({ name: "", email: "", branch: "", subject: [], assignedClass: "", phone: "", address: "", avatar: "" })
    }

    const subjects = [
        "Mathematics",
        "Science",
        "English",
        "History",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
    ]

    const toggleSubject = (subject: string) => {
        setFormData(prev => ({
            ...prev,
            subject: prev.subject.includes(subject)
                ? prev.subject.filter(s => s !== subject)
                : [...prev.subject, subject]
        }))
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Add New Teacher</h2>
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
                            placeholder="Enter teacher name"
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
                            placeholder="teacher@example.com"
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
                            <option value="">Select branch</option>
                            <option value="Main Campus">Main Campus</option>
                            <option value="North Branch">North Branch</option>
                            <option value="South Branch">South Branch</option>
                        </select>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subjects</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className="mt-1 flex min-h-[42px] w-full items-center justify-between rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                        >
                                            <div className="flex flex-wrap gap-1">
                                                {formData.subject.length > 0 ? (
                                                    formData.subject.map((s) => (
                                                        <Badge key={s} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 uppercase text-[10px] font-bold">
                                                            {s}
                                                            <X
                                                                className="ml-1 h-3 w-3 cursor-pointer"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleSubject(s);
                                                                }}
                                                            />
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    <span className="text-gray-500">Select subjects</span>
                                                )}
                                            </div>
                                            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0" align="start">
                                        <Command>
                                            <CommandInput placeholder="Search subjects..." />
                                            <CommandList>
                                                <CommandEmpty>No subject found.</CommandEmpty>
                                                <CommandGroup>
                                                    {subjects.map((s) => (
                                                        <CommandItem
                                                            key={s}
                                                            onSelect={() => toggleSubject(s)}
                                                            className="cursor-pointer"
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    formData.subject.includes(s) ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {s}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
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
                            className="flex-1 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                        >
                            Add Teacher
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
