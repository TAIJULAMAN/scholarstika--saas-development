"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Save } from "lucide-react"

interface EditFeeDialogProps {
    isOpen: boolean
    onClose: () => void
    student: any // Using any for simplicity as types are not strictly defined
}

export function EditFeeDialog({ isOpen, onClose, student }: EditFeeDialogProps) {
    const [totalFees, setTotalFees] = useState("")
    const [paidAmount, setPaidAmount] = useState("")

    useEffect(() => {
        if (student) {
            setTotalFees(student.totalFees.toString())
            setPaidAmount(student.paid.toString())
        }
    }, [student])

    const handleSave = () => {
        // Here you would typically call an API to update the fee
        console.log("Updating fee for", student.name, { totalFees, paidAmount })
        onClose()
    }

    if (!student) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Fee Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Student
                        </Label>
                        <Input id="name" value={student.name} disabled className="col-span-3 bg-gray-50" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="totalFees" className="text-right">
                            Total Fees
                        </Label>
                        <Input
                            id="totalFees"
                            value={totalFees}
                            onChange={(e) => setTotalFees(e.target.value)}
                            className="col-span-3"
                            type="number"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="paidAmount" className="text-right">
                            Paid
                        </Label>
                        <Input
                            id="paidAmount"
                            value={paidAmount}
                            onChange={(e) => setPaidAmount(e.target.value)}
                            className="col-span-3"
                            type="number"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
