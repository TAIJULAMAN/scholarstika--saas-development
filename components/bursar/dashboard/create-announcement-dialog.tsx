"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Megaphone, Users } from "lucide-react"
import { toast } from "sonner" // Assuming sonner is used, if not we'll use a standard alert for now
// If sonner isn't installed/setup, we might need a fallback or just console.log for the simulation.
// Checking previous files, I haven't seen an explicit toast provider, but it's common.
// I'll assume standard Shadcn UI approach or just use window.alert/console.log if unsure.
// Safest bet for "simulate" is to use window.alert if no toast is found, but I will try to use a simple state-based feedback or assuming a Toaster exists.
// Let's stick to a simple "simulate" approach with alert or console for this prototype step.

interface CreateAnnouncementDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CreateAnnouncementDialog({ open, onOpenChange }: CreateAnnouncementDialogProps) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [audience, setAudience] = useState("All")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        console.log("Creating announcement:", { title, description, audience })

        // Show success feedback (simulated)
        const toastMessage = `Announcement "${title}" created for ${audience}`
        // In a real app we'd use toast.success(toastMessage)
        alert(toastMessage) // Fallback simulation

        // Reset and close
        setTitle("")
        setDescription("")
        setAudience("All")
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Megaphone className="h-5 w-5 text-emerald-600" />
                        Create Announcement
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Title
                        </label>
                        <Input
                            placeholder="e.g., Scholarship Quota Update"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Audience
                        </label>
                        <Select value={audience} onValueChange={setAudience}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select audience" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Staff</SelectItem>
                                <SelectItem value="Teacher">Teachers</SelectItem>
                                <SelectItem value="Branch Admin">Branch Admins</SelectItem>
                                <SelectItem value="Parent">Parents</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Description
                        </label>
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter announcement details..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                            Post Announcement
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
