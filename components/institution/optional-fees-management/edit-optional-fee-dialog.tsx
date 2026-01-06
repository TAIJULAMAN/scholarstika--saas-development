"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface EditOptionalFeeDialogProps {
    isOpen: boolean
    onClose: () => void
    fee: any
}

export function EditOptionalFeeDialog({ isOpen, onClose, fee }: EditOptionalFeeDialogProps) {
    // We could add local state here for form fields if we wanted fully controlled inputs, 
    // but for this mock implementation relying on defaultValue or simple state is fine.
    // I'll stick to a simple structure.

    if (!fee) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Optional Fee</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <Label>Fee Name</Label>
                        <Input placeholder="e.g., School Bus Transportation" defaultValue={fee.name} />
                    </div>
                    <div>
                        <Label>Category</Label>
                        <Select defaultValue={fee.category?.toLowerCase()}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="transport">Transport</SelectItem>
                                <SelectItem value="extracurricular">Extracurricular</SelectItem>
                                <SelectItem value="meal">Meal</SelectItem>
                                <SelectItem value="daycare">Daycare</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Amount ($)</Label>
                        <Input type="number" placeholder="150" defaultValue={fee.amount} />
                    </div>
                    <div>
                        <Label>Frequency</Label>
                        <Select defaultValue={fee.frequency?.toLowerCase()}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                                <SelectItem value="annually">Annually</SelectItem>
                                <SelectItem value="one-time">One-time</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Textarea placeholder="Brief description of the service..." rows={3} defaultValue={fee.description} />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                        onClick={onClose}
                    >
                        Update Optional Fee
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
