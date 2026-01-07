"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface DeleteEarningDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    earningName: string
}

export function DeleteEarningDialog({ open, onOpenChange, earningName }: DeleteEarningDialogProps) {
    const handleDelete = () => {
        console.log("Deleting earning:", earningName)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full md:max-w-2xl h-full md:h-auto max-h-[40vh] p-5 md:p-6 rounded-xl">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                            <DialogTitle>Delete Branch Earning</DialogTitle>
                            <DialogDescription>This action cannot be undone</DialogDescription>
                        </div>
                    </div>
                </DialogHeader>
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                        Are you sure you want to delete the earning record for <span className="font-semibold text-gray-900">{earningName}</span>?
                        This will permanently remove all associated financial data.
                    </p>
                    <div className="flex justify-end gap-3">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDelete}
                            className="bg-red-600 hover:bg-red-700 text-white"
                        >
                            Delete Earning
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
