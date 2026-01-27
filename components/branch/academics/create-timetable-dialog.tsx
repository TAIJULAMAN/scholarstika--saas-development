"use client"

import { useState } from "react"
import { X, Copy } from "lucide-react"

interface CreateTimetableDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onCreate: (className: string, copyFrom?: string) => void
    existingClasses: string[]
}

export function CreateTimetableDialog({ open, onOpenChange, onCreate, existingClasses }: CreateTimetableDialogProps) {
    const [className, setClassName] = useState("")
    const [copyFrom, setCopyFrom] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (className.trim()) {
            onCreate(className.trim(), copyFrom)
            onOpenChange(false)
            setClassName("")
            setCopyFrom("")
        }
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0">
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Create New Timetable</h2>
                        <p className="text-sm text-gray-500">Set up a schedule for a new class</p>
                    </div>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Class Name</label>
                        <input
                            type="text"
                            required
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            placeholder="e.g. Grade 4-A"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Copy Schedule From (Optional)
                        </label>
                        <select
                            value={copyFrom}
                            onChange={(e) => setCopyFrom(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                            <option value="">Do not copy (Start empty)</option>
                            {existingClasses.map((cls) => (
                                <option key={cls} value={cls}>
                                    {cls}
                                </option>
                            ))}
                        </select>
                        <p className="mt-1 text-xs text-gray-500">
                            Useful if the schedule is similar to another class.
                        </p>
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
                            disabled={!className.trim()}
                            className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Create Timetable
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
