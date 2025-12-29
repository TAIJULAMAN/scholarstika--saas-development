"use client"

import { TransactionsTable } from "@/components/branch/transaction-management/transactions-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchTransactionsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Transaction Logs"
                description="View all fee transactions for this branch"
            />
            <TransactionsTable />
        </div>
    )
}
