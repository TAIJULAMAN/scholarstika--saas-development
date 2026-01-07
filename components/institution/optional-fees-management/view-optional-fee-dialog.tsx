"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface ViewOptionalFeeDialogProps {
    isOpen: boolean
    onClose: () => void
    fee: any
}

export function ViewOptionalFeeDialog({ isOpen, onClose, fee }: ViewOptionalFeeDialogProps) {
    if (!fee) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-full h-[70vh] md:max-w-2xl md:h-full">
                <DialogHeader>
                    <DialogTitle>Optional Fee Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Fee Name</span>
                        <span className="col-span-2 text-sm text-gray-900 font-medium">{fee.name}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Category</span>
                        <span className="col-span-2">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                {fee.category}
                            </span>
                        </span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Amount</span>
                        <span className="col-span-2 text-sm font-semibold text-gray-900">${fee.amount}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Frequency</span>
                        <span className="col-span-2 text-sm text-gray-900">{fee.frequency}</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Enrolled</span>
                        <span className="col-span-2 text-sm text-gray-900">{fee.enrolledStudents} Students</span>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <span className="font-semibold text-sm text-gray-500">Status</span>
                        <span className="col-span-2">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                {fee.status}
                            </span>
                        </span>
                    </div>
                    <div className="grid grid-cols-3 items-start gap-4">
                        <span className="font-semibold text-sm text-gray-500 pt-1">Description</span>
                        <span className="col-span-2 text-sm text-gray-600">{fee.description}</span>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
