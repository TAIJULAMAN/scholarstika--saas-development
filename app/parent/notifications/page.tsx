"use client"

import { DollarSign, FileText, AlertCircle, CheckCircle, Bell, Calendar, Award, MessageSquare, GraduationCap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function ParentNotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')
    const [displayCount, setDisplayCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const observerTarget = useRef(null)

    const allNotifications = [
        {
            id: 1,
            type: 'payment',
            icon: DollarSign,
            title: 'Fee Payment Due',
            message: 'Tuition fee payment for Alex Thompson is due on January 25, 2026. Amount: $450.00. Please make payment to avoid late fees.',
            time: '1 hour ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 2,
            type: 'grade',
            icon: Award,
            title: 'New Grade Posted',
            message: 'Sarah Thompson received a grade of A- in Mathematics Mid-term Exam. View detailed report in Academic Progress.',
            time: '3 hours ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 3,
            type: 'alert',
            icon: AlertCircle,
            title: 'Attendance Alert',
            message: 'Alex Thompson was marked absent in Chemistry class today. Please contact the school if this is incorrect.',
            time: '5 hours ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 4,
            type: 'success',
            icon: CheckCircle,
            title: 'Payment Confirmed',
            message: 'Your payment of $450.00 for Sarah Thompson\'s tuition fee has been received and confirmed. Receipt #INV-2024-099.',
            time: '1 day ago',
            unread: false,
            date: '2026-01-16'
        },
        {
            id: 5,
            type: 'message',
            icon: MessageSquare,
            title: 'Message from Teacher',
            message: 'Ms. Johnson sent a message regarding Alex Thompson\'s recent improvement in Mathematics. Check your messages.',
            time: '1 day ago',
            unread: false,
            date: '2026-01-16'
        },
        {
            id: 6,
            type: 'schedule',
            icon: Calendar,
            title: 'Parent-Teacher Conference',
            message: 'Parent-teacher conference scheduled for January 30, 2026 at 3:00 PM. Please confirm your attendance.',
            time: '2 days ago',
            unread: false,
            date: '2026-01-15'
        },
        {
            id: 7,
            type: 'academic',
            icon: GraduationCap,
            title: 'Progress Report Available',
            message: 'Mid-semester progress report for both children is now available. Review their academic performance and attendance.',
            time: '3 days ago',
            unread: false,
            date: '2026-01-14'
        },
        {
            id: 8,
            type: 'document',
            icon: FileText,
            title: 'Permission Slip Required',
            message: 'Field trip to Science Museum on January 28. Please sign and submit the permission slip by January 22.',
            time: '3 days ago',
            unread: false,
            date: '2026-01-14'
        },
        {
            id: 9,
            type: 'success',
            icon: Award,
            title: 'Achievement Recognition',
            message: 'Congratulations! Sarah Thompson has been selected for the Honor Roll for maintaining excellent grades this semester.',
            time: '4 days ago',
            unread: false,
            date: '2026-01-13'
        },
        {
            id: 10,
            type: 'alert',
            icon: AlertCircle,
            title: 'Library Book Overdue',
            message: 'Alex Thompson has an overdue library book. Please return "Introduction to Physics" to avoid additional fines.',
            time: '5 days ago',
            unread: false,
            date: '2026-01-12'
        },
        {
            id: 11,
            type: 'payment',
            icon: DollarSign,
            title: 'Optional Fee Available',
            message: 'Optional swimming class registration is now open. Fee: $120.00 for the semester. Register by January 20.',
            time: '5 days ago',
            unread: false,
            date: '2026-01-12'
        },
        {
            id: 12,
            type: 'schedule',
            icon: Calendar,
            title: 'School Holiday Notice',
            message: 'School will be closed on January 26 for a public holiday. Regular classes resume on January 27.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-10'
        },
        {
            id: 13,
            type: 'message',
            icon: MessageSquare,
            title: 'School Newsletter',
            message: 'Monthly school newsletter for January is now available. Read about upcoming events and important announcements.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-10'
        },
        {
            id: 14,
            type: 'academic',
            icon: GraduationCap,
            title: 'Exam Schedule Published',
            message: 'Final exam schedule for the semester has been published. Review the schedule and help your children prepare.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-09'
        },
        {
            id: 15,
            type: 'success',
            icon: CheckCircle,
            title: 'Attendance Milestone',
            message: 'Both children have maintained 95%+ attendance this semester. Keep up the excellent work!',
            time: '2 weeks ago',
            unread: false,
            date: '2026-01-03'
        }
    ]

    const filteredNotifications = filter === 'unread'
        ? allNotifications.filter(n => n.unread)
        : allNotifications

    const displayedNotifications = filteredNotifications.slice(0, displayCount)
    const hasMore = displayCount < filteredNotifications.length
    const unreadCount = allNotifications.filter(n => n.unread).length

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

    useEffect(() => {
        setDisplayCount(10)
    }, [filter])

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Stay updated with your children's activities and school updates
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                        Mark all as read
                    </button>
                </div>
            </div>

            {/* Filters */}
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
                    Unread Only {unreadCount > 0 && `(${unreadCount})`}
                </button>
            </div>

            {/* Notifications List */}
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
                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${notification.type === 'payment' ? 'bg-blue-100 text-blue-600' :
                                            notification.type === 'grade' || notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                                notification.type === 'alert' ? 'bg-orange-100 text-orange-600' :
                                                    notification.type === 'message' ? 'bg-purple-100 text-purple-600' :
                                                        notification.type === 'schedule' ? 'bg-teal-100 text-teal-600' :
                                                            notification.type === 'academic' ? 'bg-indigo-100 text-indigo-600' :
                                                                'bg-gray-100 text-gray-600'
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

                                                <button className="text-gray-400 hover:text-gray-600">
                                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {/* Infinite Scroll Trigger */}
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

                        {/* End of List Message */}
                        {!hasMore && displayedNotifications.length > 0 && (
                            <div className="py-8 text-center">
                                <p className="text-sm text-gray-500">
                                    You've reached the end of your notifications
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
