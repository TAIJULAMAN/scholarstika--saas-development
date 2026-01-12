"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddManagerDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}
const branches = [
    { id: "BRN-001", name: "Downtown Campus" },
    { id: "BRN-002", name: "North Valley Branch" },
    { id: "BRN-003", name: "Eastside Institute" },
    { id: "BRN-004", name: "Westwood Academy" },
    { id: "BRN-005", name: "Southgate College" },
    { id: "BRN-006", name: "Riverside Campus" },
    { id: "BRN-007", name: "Hillside Academy" },
    { id: "BRN-008", name: "Central Institute" },
]

export function AddManagerDialog({ open, onOpenChange }: AddManagerDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        branchId: "",
        joinedDate: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!")
            return
        }
        console.log("Adding manager:", formData)
        onOpenChange(false)
        setFormData({
            name: "",
            email: "",
            phone: "",
            branchId: "",
            joinedDate: "",
            password: "",
            confirmPassword: "",
        })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add New Branch Admin</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="admin@scholastika.edu"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+1 (555) 123-4567"
                                required
                            />
                        </div>

                        {/* Branch */}
                        <div className="space-y-2">
                            <Label htmlFor="branch">Assign Branch *</Label>
                            <Select
                                value={formData.branchId}
                                onValueChange={(value) => setFormData({ ...formData, branchId: value })}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a branch" />
                                </SelectTrigger>
                                <SelectContent>
                                    {branches.map((branch) => (
                                        <SelectItem key={branch.id} value={branch.id}>
                                            {branch.name} ({branch.id})
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Joined Date */}
                        <div className="space-y-2">
                            <Label htmlFor="joinedDate">Joining Date *</Label>
                            <Input
                                id="joinedDate"
                                type="date"
                                value={formData.joinedDate}
                                onChange={(e) => setFormData({ ...formData, joinedDate: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="text-white">
                            Add Admin
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
