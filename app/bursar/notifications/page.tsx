"use client"

import { FileText, AlertCircle, CheckCircle, Bell, DollarSign, CreditCard, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function BursarNotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')
    const [displayCount, setDisplayCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const observerTarget = useRef(null)

    const allNotifications = [
        {
            id: 1,
            type: 'alert',
            icon: AlertCircle,
            title: 'Overdue Fee Payments',
            message: '15 students have overdue fee payments for the current term. Please send reminders.',
            time: '2 hours ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 2,
            type: 'success',
            icon: CheckCircle,
            title: 'Payroll Processed Successfully',
            message: 'Monthly payroll for all staff members has been processed and disbursed.',
            time: '4 hours ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 3,
            type: 'document',
            icon: FileText,
            title: 'Invoice Generated',
            message: 'Invoice #INV-2025-001 has been generated for vendor "TechSolutions Inc".',
            time: '5 hours ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 4,
            type: 'info',
            icon: DollarSign,
            title: 'Budget Approval Request',
            message: 'The Science Department has submitted a budget request for new lab equipment.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 5,
            type: 'success',
            icon: CreditCard,
            title: 'Fee Collection Milestone',
            message: 'Congratulations! 80% of term fees have been collected successfully.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 6,
            type: 'alert',
            icon: Clock,
            title: 'Tax Filing Deadline',
            message: 'Reminder: Quarterly tax filing is due next week. Please prepare necessary documents.',
            time: '2 days ago',
            unread: false,
            date: '2025-12-25'
        },
        {
            id: 7,
            type: 'document',
            icon: FileText,
            title: 'Audit Report Available',
            message: 'The internal financial audit report is now available for review.',
            time: '3 days ago',
            unread: false,
            date: '2025-12-24'
        }
    ]

    const filteredNotifications = filter === 'unread'
        ? allNotifications.filter(n => n.unread)
        : allNotifications

    const displayedNotifications = filteredNotifications.slice(0, displayCount)
    const hasMore = displayCount < filteredNotifications.length

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    setIsLoading(true)
                    setTimeout(() => {
                        setDisplayCount(prev => Math.min(prev + 5, filteredNotifications.length))
                        setIsLoading(false)
                    }, 500)
                }
            },
            { threshold: 1.0 }
        )

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current)
            }
        }
    }, [hasMore, isLoading, filteredNotifications.length])

    // Reset display count when filter changes
    useEffect(() => {
        setDisplayCount(10)
    }, [filter])

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Updates on fees, payroll, and financial alerts
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Mark all as read
                    </button>
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={() => setFilter('all')}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === 'all'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    All Notifications
                </button>
                <button
                    onClick={() => setFilter('unread')}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${filter === 'unread'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    Unread Only
                </button>
            </div>

            <div className="space-y-3">
                {displayedNotifications.length === 0 ? (
                    <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                            <Bell className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">No notifications</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            You're all caught up! No {filter === 'unread' ? 'unread' : ''} notifications at the moment.
                        </p>
                    </div>
                ) : (
                    <>
                        {displayedNotifications.map((notification) => {
                            const Icon = notification.icon
                            return (
                                <div
                                    key={notification.id}
                                    className={`rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-md ${notification.unread ? 'border-l-4 border-l-emerald-500 bg-emerald-50/30' : ''
                                        }`}
                                >
                                    <div className="flex gap-4">
                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                                            notification.type === 'document' ? 'bg-purple-100 text-purple-600' :
                                                notification.type === 'alert' ? 'bg-orange-100 text-orange-600' :
                                                    'bg-green-100 text-green-600'
                                            }`}>
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-base font-semibold text-gray-900">
                                                            {notification.title}
                                                        </h3>
                                                        {notification.unread && (
                                                            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                                                        )}
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                                        {notification.message}
                                                    </p>
                                                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                                                        <span>{notification.time}</span>
                                                        <span>•</span>
                                                        <span>{notification.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {hasMore && (
                            <div ref={observerTarget} className="flex justify-center py-4">
                                {isLoading && (
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent"></div>
                                        Loading more notifications...
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
