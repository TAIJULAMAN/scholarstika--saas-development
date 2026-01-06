"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Save } from "lucide-react"

interface EditTransactionDialogProps {
    isOpen: boolean
    onClose: () => void
    transaction: any
}

export function EditTransactionDialog({ isOpen, onClose, transaction }: EditTransactionDialogProps) {
    const [amount, setAmount] = useState("")
    const [method, setMethod] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        if (transaction) {
            setAmount(transaction.amount.toString())
            setMethod(transaction.paymentMethod)
            setStatus(transaction.status)
        }
    }, [transaction])

    const handleSave = () => {
        console.log("Updating transaction", transaction.id, { amount, method, status })
        onClose()
    }

    if (!transaction) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Transaction</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">ID</Label>
                        <Input value={transaction.id} disabled className="col-span-3 bg-gray-50" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                            Amount
                        </Label>
                        <Input
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="col-span-3"
                            type="number"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Method</Label>
                        <div className="col-span-3">
                            <Select value={method} onValueChange={setMethod}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Method" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Cash">Cash</SelectItem>
                                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                                    <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                                    <SelectItem value="Online Payment">Online Payment</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Status</Label>
                        <div className="col-span-3">
                            <Select value={status} onValueChange={setStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Success">Success</SelectItem>
                                    <SelectItem value="Pending">Pending</SelectItem>
                                    <SelectItem value="Failed">Failed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
