"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Trash2 } from "lucide-react"

interface DeleteTransactionDialogProps {
    isOpen: boolean
    onClose: () => void
    transaction: any
}

export function DeleteTransactionDialog({ isOpen, onClose, transaction }: DeleteTransactionDialogProps) {
    if (!transaction) return null

    const handleDelete = () => {
        console.log("Deleting transaction", transaction.id)
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-red-600 flex items-center gap-2">
                        <Trash2 className="h-5 w-5" />
                        Delete Transaction
                    </DialogTitle>
                    <DialogDescription className="pt-2">
                        Are you sure you want to delete transaction <span className="font-mono font-semibold text-gray-900">{transaction.id}</span>?
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
