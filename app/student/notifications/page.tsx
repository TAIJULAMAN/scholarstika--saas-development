"use client"

import { BookOpen, FileText, AlertCircle, CheckCircle, Bell, Calendar, Award, MessageSquare, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function StudentNotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')
    const [displayCount, setDisplayCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const observerTarget = useRef(null)

    const allNotifications = [
        {
            id: 1,
            type: 'assignment',
            icon: BookOpen,
            title: 'New Assignment Posted',
            message: 'Your Mathematics teacher has posted a new assignment "Calculus Problem Set 5". Due date: January 25, 2026.',
            time: '10 minutes ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 2,
            type: 'grade',
            icon: Award,
            title: 'Grade Published',
            message: 'Your grade for "Physics Lab Report 3" has been published. You scored 92/100. Great work!',
            time: '1 hour ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 3,
            type: 'alert',
            icon: AlertCircle,
            title: 'Assignment Due Soon',
            message: 'Reminder: Your English essay "Shakespeare Analysis" is due tomorrow at 11:59 PM. Don\'t forget to submit!',
            time: '2 hours ago',
            unread: true,
            date: '2026-01-17'
        },
        {
            id: 4,
            type: 'success',
            icon: CheckCircle,
            title: 'Attendance Marked',
            message: 'Your attendance for today\'s Chemistry class has been marked as Present.',
            time: '3 hours ago',
            unread: false,
            date: '2026-01-17'
        },
        {
            id: 5,
            type: 'message',
            icon: MessageSquare,
            title: 'New Message from Teacher',
            message: 'Ms. Johnson sent you a message regarding your recent History presentation. Check your messages.',
            time: '5 hours ago',
            unread: false,
            date: '2026-01-17'
        },
        {
            id: 6,
            type: 'schedule',
            icon: Calendar,
            title: 'Schedule Change',
            message: 'Tomorrow\'s Biology class has been rescheduled from 10:00 AM to 2:00 PM. Room: Lab 204.',
            time: '8 hours ago',
            unread: false,
            date: '2026-01-17'
        },
        {
            id: 7,
            type: 'assignment',
            icon: BookOpen,
            title: 'Assignment Graded',
            message: 'Your Computer Science project "Web Development Portfolio" has been graded. Check your grades section.',
            time: '1 day ago',
            unread: false,
            date: '2026-01-16'
        },
        {
            id: 8,
            type: 'alert',
            icon: Clock,
            title: 'Exam Reminder',
            message: 'Mid-term exam for Mathematics is scheduled for January 22, 2026 at 9:00 AM. Prepare well!',
            time: '1 day ago',
            unread: false,
            date: '2026-01-16'
        },
        {
            id: 9,
            type: 'success',
            icon: Award,
            title: 'Achievement Unlocked',
            message: 'Congratulations! You\'ve maintained perfect attendance for 30 consecutive days.',
            time: '2 days ago',
            unread: false,
            date: '2026-01-15'
        },
        {
            id: 10,
            type: 'document',
            icon: FileText,
            title: 'Resource Uploaded',
            message: 'New study materials for "Advanced Chemistry" have been uploaded to your resources section.',
            time: '2 days ago',
            unread: false,
            date: '2026-01-15'
        },
        {
            id: 11,
            type: 'message',
            icon: MessageSquare,
            title: 'Class Announcement',
            message: 'Important: Field trip to Science Museum scheduled for January 28. Permission slip required.',
            time: '3 days ago',
            unread: false,
            date: '2026-01-14'
        },
        {
            id: 12,
            type: 'grade',
            icon: Award,
            title: 'Quiz Results Available',
            message: 'Your Biology quiz results are now available. You scored 18/20. Review your answers in the grades section.',
            time: '3 days ago',
            unread: false,
            date: '2026-01-14'
        },
        {
            id: 13,
            type: 'assignment',
            icon: BookOpen,
            title: 'Group Project Update',
            message: 'Your group member Sarah has updated the "Environmental Science Project" document. Review the changes.',
            time: '4 days ago',
            unread: false,
            date: '2026-01-13'
        },
        {
            id: 14,
            type: 'schedule',
            icon: Calendar,
            title: 'Extra Class Scheduled',
            message: 'Additional tutoring session for Mathematics scheduled this Saturday at 10:00 AM in Room 301.',
            time: '4 days ago',
            unread: false,
            date: '2026-01-13'
        },
        {
            id: 15,
            type: 'alert',
            icon: AlertCircle,
            title: 'Library Book Due',
            message: 'The library book "Introduction to Physics" is due for return by January 20. Avoid late fees!',
            time: '5 days ago',
            unread: false,
            date: '2026-01-12'
        },
        {
            id: 16,
            type: 'success',
            icon: CheckCircle,
            title: 'Assignment Submitted',
            message: 'Your History essay "World War II Analysis" has been successfully submitted on time.',
            time: '5 days ago',
            unread: false,
            date: '2026-01-12'
        },
        {
            id: 17,
            type: 'document',
            icon: FileText,
            title: 'Syllabus Updated',
            message: 'The syllabus for English Literature has been updated with new reading assignments.',
            time: '6 days ago',
            unread: false,
            date: '2026-01-11'
        },
        {
            id: 18,
            type: 'grade',
            icon: Award,
            title: 'Semester Progress Report',
            message: 'Your semester progress report is now available. Overall GPA: 3.8. Keep up the excellent work!',
            time: '1 week ago',
            unread: false,
            date: '2026-01-10'
        },
        {
            id: 19,
            type: 'message',
            icon: MessageSquare,
            title: 'Parent-Teacher Conference',
            message: 'Parent-teacher conference scheduled for January 30. Your parents have been notified.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-10'
        },
        {
            id: 20,
            type: 'assignment',
            icon: BookOpen,
            title: 'Reading Assignment',
            message: 'New reading assignment for Literature class: Chapters 5-8 of "To Kill a Mockingbird". Discussion next week.',
            time: '1 week ago',
            unread: false,
            date: '2026-01-09'
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
                        Stay updated with your classes, assignments, and grades
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
                                            notification.type === 'grade' || notification.type === 'success' ? 'bg-green-100 text-green-600' :
                                                notification.type === 'alert' ? 'bg-orange-100 text-orange-600' :
                                                    notification.type === 'message' ? 'bg-purple-100 text-purple-600' :
                                                        notification.type === 'schedule' ? 'bg-teal-100 text-teal-600' :
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
