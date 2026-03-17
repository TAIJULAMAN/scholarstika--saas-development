"use client"

export interface AuditLogEntry {
    id: string
    timestamp: string
    action: string
    details: string
    adminId: string
    adminName: string
    targetId: string
    targetName: string
}

export const logPricingOverride = (
    admin: { id: string, name: string },
    branch: { id: string, name: string },
    oldPrice: number,
    newPrice: number,
    reason: string
) => {
    const logs = JSON.parse(localStorage.getItem("pricingAuditLogs") || "[]")
    
    const newEntry: AuditLogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        action: "PRICE_OVERRIDE",
        details: `Price changed from $${oldPrice} to $${newPrice}. Reason: ${reason}`,
        adminId: admin.id,
        adminName: admin.name,
        targetId: branch.id,
        targetName: branch.name
    }
    
    logs.unshift(newEntry)
    localStorage.setItem("pricingAuditLogs", JSON.stringify(logs))
    return newEntry
}

export const getPricingAuditLogs = (): AuditLogEntry[] => {
    return JSON.parse(localStorage.getItem("pricingAuditLogs") || "[]")
}
