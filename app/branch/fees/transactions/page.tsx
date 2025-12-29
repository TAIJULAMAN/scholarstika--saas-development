"use client"

import { TransactionStats } from "@/components/institution/transaction-management/transaction-stats"
import { TransactionsTable } from "@/components/institution/transaction-management/transactions-table"
import { PageHeader } from "@/components/common/page-header"

export default function BranchTransactionsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Transaction Logs"
                description="Complete payment history and transaction records"
            />
            <TransactionStats branchId="current" />
            <TransactionsTable />
        </div>
    )
}
