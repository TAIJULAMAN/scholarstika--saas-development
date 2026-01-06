"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ViewTransactionDialogProps {
    isOpen: boolean
    onClose: () => void
    transaction: any
}

export function ViewTransactionDialog({ isOpen, onClose, transaction }: ViewTransactionDialogProps) {
    if (!transaction) return null

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Success":
                return "bg-green-100 text-green-700 hover:bg-green-100"
            case "Pending":
                return "bg-orange-100 text-orange-700 hover:bg-orange-100"
            case "Failed":
                return "bg-red-100 text-red-700 hover:bg-red-100"
            default:
                return "bg-gray-100 text-gray-700 hover:bg-gray-100"
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Transaction Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Transaction ID</span>
                        <span className="col-span-2 text-sm font-mono text-gray-900">{transaction.id}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Student Name</span>
                        <span className="col-span-2 text-sm text-gray-900">{transaction.studentName}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Roll No</span>
                        <span className="col-span-2 text-sm text-gray-900">{transaction.rollNo}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Amount</span>
                        <span className="col-span-2 text-sm font-semibold text-gray-900">${transaction.amount}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Method</span>
                        <span className="col-span-2 text-sm text-gray-900">{transaction.paymentMethod}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Date</span>
                        <span className="col-span-2 text-sm text-gray-900">{transaction.transactionDate}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Status</span>
                        <div className="col-span-2">
                            <Badge variant="outline" className={`${getStatusColor(transaction.status)} border-none`}>
                                {transaction.status}
                            </Badge>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Receipt No</span>
                        <span className="col-span-2 text-sm text-gray-900">{transaction.receiptNo}</span>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
