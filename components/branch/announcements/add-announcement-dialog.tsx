"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface AddAnnouncementDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const audiences = ["Teacher", "Parent", "Student", "Global Admin"]

export function AddAnnouncementDialog({ open, onOpenChange }: AddAnnouncementDialogProps) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        audience: [] as string[],
        status: "Active" as "Active" | "Archived",
    })

    const handleAudienceChange = (role: string) => {
        setFormData(prev => {
            const newAudience = prev.audience.includes(role)
                ? prev.audience.filter(a => a !== role)
                : [...prev.audience, role]
            return { ...prev, audience: newAudience }
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In real app, this would call an API
        console.log("Creating announcement:", formData)
        onOpenChange(false)
        setFormData({
            title: "",
            description: "",
            audience: [],
            status: "Active",
        })
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Add New Announcement</h2>
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
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                            placeholder="Enter announcement title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            rows={3}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                            placeholder="Enter announcement description"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Audience <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                            {audiences.map((role) => (
                                <label key={role} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.audience.includes(role)}
                                        onChange={() => handleAudienceChange(role)}
                                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                    />
                                    <span className="text-sm text-gray-700">{role}</span>
                                </label>
                            ))}
                        </div>
                        {formData.audience.length === 0 && (
                            <p className="text-xs text-red-500 mt-1">Please select at least one audience.</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Status <span className="text-red-500">*</span>
                        </label>
                        <select
                            required
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Archived" })}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        >
                            <option value="Active">Active</option>
                            <option value="Archived">Archived</option>
                        </select>
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
                            className="flex-1 rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                            disabled={formData.audience.length === 0}
                        >
                            Add Announcement
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
