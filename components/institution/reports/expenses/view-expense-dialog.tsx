"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface ViewExpenseDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    expense: {
        id: string
        payee: string
        amount: number
        date: string
        category: string
        status: string
        method: string
        description?: string
    }
}

export function ViewExpenseDialog({ open, onOpenChange, expense }: ViewExpenseDialogProps) {
    if (!expense) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Expense Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label className="text-gray-500">Expense ID</Label>
                            <p className="font-medium text-gray-900">{expense.id}</p>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-gray-500">Date</Label>
                            <p className="font-medium text-gray-900">{new Date(expense.date).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Label className="text-gray-500">Payee</Label>
                        <p className="font-medium text-gray-900">{expense.payee}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label className="text-gray-500">Amount</Label>
                            <p className="font-bold text-gray-900 text-lg">
                                ${expense.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-gray-500">Category</Label>
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-sm font-medium text-slate-800">
                                {expense.category}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label className="text-gray-500">Method</Label>
                            <p className="font-medium text-gray-900">{expense.method}</p>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-gray-500">Status</Label>
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium ${expense.status === 'Paid'
                                ? 'bg-emerald-100 text-emerald-800'
                                : expense.status === 'Processing'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {expense.status}
                            </span>
                        </div>
                    </div>

                    {expense.description && (
                        <div className="space-y-1">
                            <Label className="text-gray-500">Description</Label>
                            <p className="text-gray-700">{expense.description}</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
