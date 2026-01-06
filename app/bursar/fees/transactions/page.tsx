"use client"

import { TransactionStats } from "@/components/institution/transaction-management/transaction-stats"
import { TransactionsTable } from "@/components/institution/transaction-management/transactions-table"

export default function BursarTransactionsPage() {
    return (
        <div className="space-y-6">
            <TransactionStats branchId="current" />
            <TransactionsTable />
        </div>
    )
}
