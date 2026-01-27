"use client"

import { useState, useEffect } from "react"
import { X, Plus, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ManageTimeSlotsDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentTimeSlots: string[]
    onSave: (newTimeSlots: string[]) => void
}

export function ManageTimeSlotsDialog({ open, onOpenChange, currentTimeSlots, onSave }: ManageTimeSlotsDialogProps) {
    const [slots, setSlots] = useState<string[]>([])

    // Initialize slots when dialog opens
    useEffect(() => {
        if (open) {
            setSlots([...currentTimeSlots])
        }
    }, [open, currentTimeSlots])

    const handleSlotChange = (index: number, value: string) => {
        const newSlots = [...slots]
        newSlots[index] = value
        setSlots(newSlots)
    }

    const handleDeleteSlot = (index: number) => {
        const newSlots = slots.filter((_, i) => i !== index)
        setSlots(newSlots)
    }

    const handleAddSlot = () => {
        setSlots([...slots, ""])
    }

    const handleSave = () => {
        // Filter out empty slots if desired, or keep them. Let's filter empty ones to be clean.
        const cleanedSlots = slots.filter(s => s.trim() !== "")
        onSave(cleanedSlots)
        onOpenChange(false)
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl mx-2 md:mx-0 max-h-[90vh] flex flex-col">
                <div className="mb-4 flex items-center justify-between flex-shrink-0">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Manage Time Slots</h2>
                        <p className="text-sm text-gray-500">Customize the schedule timings</p>
                    </div>
                    <button
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                    {slots.map((slot, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                                <Clock className="h-5 w-5" />
                            </div>
                            <Input
                                value={slot}
                                onChange={(e) => handleSlotChange(index, e.target.value)}
                                placeholder={`Period ${index + 1} (e.g. 09:00 - 09:45)`}
                                className="flex-1"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteSlot(index)}
                                className="text-gray-400 hover:text-red-600 hover:bg-red-50"
                            >
                                <Trash2 className="h-5 w-5" />
                            </Button>
                        </div>
                    ))}

                    {slots.length === 0 && (
                        <div className="text-center py-8 text-gray-500 text-sm">
                            No time slots defined. Add one to get started.
                        </div>
                    )}
                </div>

                <div className="mt-6 flex flex-col gap-3 flex-shrink-0">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddSlot}
                        className="w-full border-dashed border-2"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Time Slot
                    </Button>
                    <div className="flex gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            className="flex-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
