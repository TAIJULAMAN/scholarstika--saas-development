"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteExpenseDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    expense: {
        id: string
        payee: string
        amount: number
    }
    onConfirm: () => void
}

export function DeleteExpenseDialog({ open, onOpenChange, expense, onConfirm }: DeleteExpenseDialogProps) {
    if (!expense) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-red-600">Delete Expense Record</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this expense record? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="rounded-lg bg-red-50 p-4 border border-red-100">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-red-900">Payee:</span>
                            <span className="text-sm text-red-700">{expense.payee}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-red-900">Amount:</span>
                            <span className="text-sm font-bold text-red-700">
                                ${expense.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>
                </div>
                <DialogFooter className="gap-2 sm:gap-2 flex justify-end">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={() => {
                        onConfirm()
                        onOpenChange(false)
                    }}>
                        Delete Record
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
