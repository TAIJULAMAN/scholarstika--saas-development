"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface DeleteOptionalFeeDialogProps {
    isOpen: boolean
    onClose: () => void
    fee: any
}

export function DeleteOptionalFeeDialog({ isOpen, onClose, fee }: DeleteOptionalFeeDialogProps) {
    if (!fee) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Optional Fee</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                        Are you sure you want to delete <span className="font-semibold text-gray-900">{fee.name}</span>? This action cannot be undone.
                    </p>
                    <div className="rounded-lg bg-gray-50 p-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Fee Name:</span>
                            <span className="text-sm text-gray-900 font-semibold">{fee.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Category:</span>
                            <span className="text-sm text-gray-900">{fee.category}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-700">Amount:</span>
                            <span className="text-sm text-gray-900">${fee.amount}</span>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex gap-2 w-full">
                        <Button
                            variant="outline"
                            className="flex-1"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="flex-1 bg-red-600 hover:bg-red-700"
                            onClick={onClose}
                        >
                            Delete Fee
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
