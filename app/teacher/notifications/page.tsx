"use client"

import { FileText, Users, Calendar, AlertCircle, CheckCircle, Bell, MessageSquare, ClipboardCheck, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function TeacherNotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')
    const [displayCount, setDisplayCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const observerTarget = useRef(null)

    const allNotifications = [
        {
            id: 1,
            type: 'assignment',
            icon: FileText,
            title: 'Assignment Submission Reminder',
            message: '15 students have not submitted "Chapter 5 Quiz" yet. Deadline is tomorrow at 5:00 PM.',
            time: '1 hour ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 2,
            type: 'attendance',
            icon: ClipboardCheck,
            title: 'Attendance Pending',
            message: 'Please mark attendance for Grade 10-A Mathematics class held today at 9:00 AM.',
            time: '2 hours ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 3,
            type: 'grade',
            icon: Award,
            title: 'Grading Deadline Approaching',
            message: 'Mid-term exam papers for Grade 10-A need to be graded by January 20, 2026.',
            time: '3 hours ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 4,
            type: 'message',
            icon: MessageSquare,
            title: 'Parent Message',
            message: 'Mrs. Johnson sent a message regarding Alex\'s recent performance in Mathematics.',
            time: '5 hours ago',
            unread: false,
            date: '2026-01-17'
        },
        {
            id: 5,
            type: 'schedule',
            icon: Calendar,
            title: 'Class Schedule Update',
            message: 'Your Grade 10-B class on Friday has been rescheduled from 10:00 AM to 2:00 PM.',
            time: '1 day ago',
            unread: false,
            date: '2026-01-16'
        },
        {
            id: 6,
            type: 'success',
            icon: CheckCircle,
            title: 'Assignment Graded Successfully',
            message: 'You have successfully graded all submissions for "Algebra Test - Chapter 4".',
            time: '1 day ago',
            unread: false,
            date: '2026-01-16'
        },
        {
            id: 7,
            type: 'alert',
            icon: AlertCircle,
            title: 'Low Class Attendance',
            message: 'Grade 10-A had only 65% attendance today. Please review and follow up.',
            time: '2 days ago',
            unread: false,
            date: '2026-01-15'
        },
        {
            id: 8,
            type: 'students',
            icon: Users,
            title: 'New Student Added',
            message: 'Emma Wilson has been added to your Grade 10-A Mathematics class.',
            time: '2 days ago',
            unread: false,
            date: '2026-01-15'
        },
        {
            id: 9,
            type: 'schedule',
            icon: Calendar,
            title: 'Staff Meeting Scheduled',
            message: 'Department meeting scheduled for January 22, 2026 at 3:00 PM in Conference Room A.',
            time: '3 days ago',
            unread: false,
            date: '2026-01-14'
        },
        {
            id: 10,
            type: 'assignment',
            icon: FileText,
            title: 'Assignment Created',
            message: 'Your assignment "Trigonometry Practice" has been published to all students.',
            time: '3 days ago',
            unread: false,
            date: '2026-01-14'
        },
        {
            id: 11,
            type: 'success',
            icon: CheckCircle,
            title: 'Attendance Submitted',
            message: 'Attendance for all classes this week has been successfully submitted.',
            time: '4 days ago',
            unread: false,
            date: '2026-01-13'
        },
        {
            id: 12,
            type: 'message',
            icon: MessageSquare,
            title: 'Admin Announcement',
            message: 'School will be closed on January 26 for a public holiday. No classes scheduled.',
            time: '5 days ago',
            unread: false,
            date: '2026-01-12'
        },
        {
            id: 13,
            type: 'grade',
            icon: Award,
            title: 'Excellent Student Performance',
            message: 'Sarah Thompson scored 98% in the recent Mathematics test. Consider recognition.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-10'
        },
        {
            id: 14,
            type: 'alert',
            icon: AlertCircle,
            title: 'Student Support Needed',
            message: 'Charlie Brown is struggling with recent topics. Consider additional support.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-09'
        },
        {
            id: 15,
            type: 'schedule',
            icon: Calendar,
            title: 'Exam Schedule Published',
            message: 'Final exam schedule for the semester has been published. Review your exam dates.',
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
                        Stay updated with class activities and important updates
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
                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${notification.type === 'assignment' ? 'bg-blue-100 text-blue-600' :
                                            notification.type === 'attendance' ? 'bg-purple-100 text-purple-600' :
                                                notification.type === 'grade' || notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                                    notification.type === 'alert' ? 'bg-orange-100 text-orange-600' :
                                                        notification.type === 'message' ? 'bg-indigo-100 text-indigo-600' :
                                                            notification.type === 'schedule' ? 'bg-teal-100 text-teal-600' :
                                                                notification.type === 'students' ? 'bg-pink-100 text-pink-600' :
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
