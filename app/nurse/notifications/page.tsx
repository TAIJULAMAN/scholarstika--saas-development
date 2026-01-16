"use client"

import { FileText, AlertCircle, CheckCircle, Bell, UserPlus, Thermometer, Activity, User } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function NurseNotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')
    const [displayCount, setDisplayCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const observerTarget = useRef(null)

    const allNotifications = [
        {
            id: 1,
            type: 'alert',
            icon: Thermometer,
            title: 'High Fever Alert',
            message: 'Student James Smith (Grade 4) reported to sick bay with high fever (39°C). Parents notified.',
            time: '30 mins ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 2,
            type: 'info',
            icon: UserPlus,
            title: 'New Student Health Record',
            message: 'New student Sarah Lee (Grade 1) added. Please review vaccination history.',
            time: '2 hours ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 3,
            type: 'alert',
            icon: Activity,
            title: 'Medicine Stock Low',
            message: 'Paracetamol syrup stock is running low. Please reorder.',
            time: '5 hours ago',
            unread: false,
            date: '2025-12-27'
        },
        {
            id: 4,
            type: 'success',
            icon: CheckCircle,
            title: 'Health Inspection Completed',
            message: 'The annual cafeteria hygiene inspection has been completed successfully.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 5,
            type: 'document',
            icon: FileText,
            title: 'Incident Report Filed',
            message: 'An incident report regarding a playground injury has been filed and requires your signature.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 6,
            type: 'info',
            icon: User,
            title: 'Parent Meeting Request',
            message: 'Mrs. Johnson requested a meeting regarding her son\'s allergies.',
            time: '2 days ago',
            unread: false,
            date: '2025-12-25'
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
                        Health alerts, incident reports, and updates
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
                                    className={`rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-md ${notification.unread ? 'border-l-4 border-l-emerald-500 bg-emerald-50/30' : ''
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
