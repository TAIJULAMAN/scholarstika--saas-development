"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export function AddRevenueDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button style={{ backgroundColor: 'rgba(16, 185, 129, 0.8)' }} className="text-white">
                    <Plus className="mr-1 h-4 w-4" />
                    Add Revenue
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Add New Revenue Record</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="source">Source</Label>
                            <Input id="source" placeholder="e.g. Tuition Fees" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="amount">Amount</Label>
                            <Input id="amount" type="number" placeholder="0.00" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="date">Date</Label>
                            <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="academic">Academic Fees</SelectItem>
                                    <SelectItem value="grants">Grants</SelectItem>
                                    <SelectItem value="services">Services</SelectItem>
                                    <SelectItem value="donations">Donations</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select defaultValue="received">
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="received">Received</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Additional details..." />
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setOpen(false)}>Save Record</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
