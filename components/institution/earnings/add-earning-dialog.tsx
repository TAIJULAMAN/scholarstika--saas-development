"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface AddEarningDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function AddEarningDialog({ open, onOpenChange }: AddEarningDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        branchId: "",
        location: "",
        totalStudents: "",
        collected: "",
        outstanding: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Adding earning:", formData)
        onOpenChange(false)
        setFormData({
            name: "",
            branchId: "",
            location: "",
            totalStudents: "",
            collected: "",
            outstanding: "",
        })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full md:max-w-2xl h-full md:h-auto max-h-[90vh] overflow-y-auto p-5 md:p-6 rounded-xl">
                <DialogHeader>
                    <DialogTitle>Add New Earning</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Branch Name</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter branch name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="branchId">Branch ID</Label>
                            <Input
                                id="branchId"
                                value={formData.branchId}
                                onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
                                placeholder="BRN-XXX"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                placeholder="Enter location"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="totalStudents">Total Students</Label>
                            <Input
                                id="totalStudents"
                                type="number"
                                value={formData.totalStudents}
                                onChange={(e) => setFormData({ ...formData, totalStudents: e.target.value })}
                                placeholder="0"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="collected">Fees Collected ($)</Label>
                            <Input
                                id="collected"
                                type="number"
                                value={formData.collected}
                                onChange={(e) => setFormData({ ...formData, collected: e.target.value })}
                                placeholder="0.00"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="outstanding">Outstanding Fees ($)</Label>
                            <Input
                                id="outstanding"
                                type="number"
                                value={formData.outstanding}
                                onChange={(e) => setFormData({ ...formData, outstanding: e.target.value })}
                                placeholder="0.00"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="text-white">
                            Add Earning
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
