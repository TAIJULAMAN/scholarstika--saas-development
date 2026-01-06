"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Trash2 } from "lucide-react"

interface DeleteFeeDialogProps {
    isOpen: boolean
    onClose: () => void
    student: any
}

export function DeleteFeeDialog({ isOpen, onClose, student }: DeleteFeeDialogProps) {
    if (!student) return null

    const handleDelete = () => {
        // API call to delete record
        console.log("Deleting record for", student.name)
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-red-600 flex items-center gap-2">
                        <Trash2 className="h-5 w-5" />
                        Confirm Deletion
                    </DialogTitle>
                    <DialogDescription className="pt-2">
                        Are you sure you want to delete the fee record for <span className="font-semibold text-gray-900">{student.name}</span>?
                        <br />
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0 mt-4">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDelete}>
                        Delete Record
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
