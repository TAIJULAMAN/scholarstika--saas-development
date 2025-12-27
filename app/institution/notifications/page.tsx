"use client"

import { UserPlus, FileText, AlertCircle, CheckCircle, Bell, GraduationCap, Calendar, DollarSign, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function NotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')
    const [displayCount, setDisplayCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const observerTarget = useRef(null)

    const allNotifications = [
        {
            id: 1,
            type: 'user',
            icon: UserPlus,
            title: 'New Student Enrolled',
            message: '5 new students enrolled in Computer Science department. Please review their applications and assign them to appropriate classes.',
            time: '2 minutes ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 2,
            type: 'document',
            icon: FileText,
            title: 'Document Submitted',
            message: 'Annual report has been submitted for review by the academic department. The document requires your approval before final submission.',
            time: '1 hour ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 3,
            type: 'alert',
            icon: AlertCircle,
            title: 'Payment Reminder',
            message: '3 students have pending fee payments for the current semester. Follow up required to ensure timely payment.',
            time: '3 hours ago',
            unread: true,
            date: '2025-12-27'
        },
        {
            id: 4,
            type: 'success',
            icon: CheckCircle,
            title: 'Verification Complete',
            message: 'Staff credentials have been verified successfully. All new staff members can now access the system.',
            time: '5 hours ago',
            unread: false,
            date: '2025-12-27'
        },
        {
            id: 5,
            type: 'user',
            icon: UserPlus,
            title: 'New Staff Member Added',
            message: 'Dr. Sarah Johnson has been added to the faculty. Please assign courses and update the schedule accordingly.',
            time: '8 hours ago',
            unread: false,
            date: '2025-12-27'
        },
        {
            id: 6,
            type: 'document',
            icon: FileText,
            title: 'Exam Schedule Published',
            message: 'The final exam schedule for the current semester has been published. Students have been notified via email.',
            time: '12 hours ago',
            unread: false,
            date: '2025-12-27'
        },
        {
            id: 7,
            type: 'alert',
            icon: AlertCircle,
            title: 'System Maintenance Scheduled',
            message: 'System maintenance is scheduled for this weekend. The platform will be unavailable from 2 AM to 6 AM.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 8,
            type: 'success',
            icon: CheckCircle,
            title: 'Bulk Upload Completed',
            message: 'Successfully uploaded 150 student records. All data has been validated and imported into the system.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 9,
            type: 'user',
            icon: GraduationCap,
            title: 'Student Graduation Request',
            message: '12 students have submitted their graduation applications. Please review and process the requests.',
            time: '2 days ago',
            unread: false,
            date: '2025-12-25'
        },
        {
            id: 10,
            type: 'document',
            icon: Calendar,
            title: 'Academic Calendar Updated',
            message: 'The academic calendar for the next semester has been updated with new holiday dates and exam schedules.',
            time: '2 days ago',
            unread: false,
            date: '2025-12-25'
        },
        {
            id: 11,
            type: 'alert',
            icon: DollarSign,
            title: 'Fee Structure Revision',
            message: 'The fee structure for the upcoming academic year requires your review and approval.',
            time: '3 days ago',
            unread: false,
            date: '2025-12-24'
        },
        {
            id: 12,
            type: 'success',
            icon: Award,
            title: 'Scholarship Applications Approved',
            message: '25 scholarship applications have been approved. Students will be notified within 24 hours.',
            time: '3 days ago',
            unread: false,
            date: '2025-12-24'
        },
        {
            id: 13,
            type: 'user',
            icon: UserPlus,
            title: 'New Faculty Applications',
            message: '8 new faculty applications received for the Mathematics department. Interview scheduling required.',
            time: '4 days ago',
            unread: false,
            date: '2025-12-23'
        },
        {
            id: 14,
            type: 'document',
            icon: FileText,
            title: 'Research Paper Submitted',
            message: 'Dr. Michael Chen has submitted a research paper for institutional review and publication approval.',
            time: '4 days ago',
            unread: false,
            date: '2025-12-23'
        },
        {
            id: 15,
            type: 'alert',
            icon: AlertCircle,
            title: 'Library Book Returns Overdue',
            message: '45 students have overdue library books. Automated reminders have been sent.',
            time: '5 days ago',
            unread: false,
            date: '2025-12-22'
        },
        {
            id: 16,
            type: 'success',
            icon: CheckCircle,
            title: 'Course Registration Completed',
            message: 'Course registration for Spring 2026 semester has been completed. 1,234 students registered successfully.',
            time: '5 days ago',
            unread: false,
            date: '2025-12-22'
        },
        {
            id: 17,
            type: 'user',
            icon: GraduationCap,
            title: 'Alumni Network Event',
            message: 'Annual alumni networking event scheduled for January 15th. RSVP tracking is now active.',
            time: '6 days ago',
            unread: false,
            date: '2025-12-21'
        },
        {
            id: 18,
            type: 'document',
            icon: FileText,
            title: 'Accreditation Documents Due',
            message: 'Accreditation renewal documents are due in 30 days. Please ensure all departments submit their reports.',
            time: '6 days ago',
            unread: false,
            date: '2025-12-21'
        },
        {
            id: 19,
            type: 'alert',
            icon: AlertCircle,
            title: 'Classroom Booking Conflict',
            message: 'Multiple classroom booking conflicts detected for next week. Resolution required.',
            time: '1 week ago',
            unread: false,
            date: '2025-12-20'
        },
        {
            id: 20,
            type: 'success',
            icon: Award,
            title: 'Department Accreditation Renewed',
            message: 'Engineering department has successfully renewed its accreditation for the next 5 years.',
            time: '1 week ago',
            unread: false,
            date: '2025-12-20'
        },
        {
            id: 21,
            type: 'user',
            icon: UserPlus,
            title: 'International Student Applications',
            message: '15 international student applications received. Visa documentation review in progress.',
            time: '1 week ago',
            unread: false,
            date: '2025-12-20'
        },
        {
            id: 22,
            type: 'document',
            icon: Calendar,
            title: 'Mid-term Exam Results Published',
            message: 'Mid-term examination results for all departments have been published and are now available to students.',
            time: '1 week ago',
            unread: false,
            date: '2025-12-19'
        },
        {
            id: 23,
            type: 'alert',
            icon: DollarSign,
            title: 'Budget Approval Pending',
            message: 'Annual budget proposal for the next fiscal year is pending approval from the board of directors.',
            time: '1 week ago',
            unread: false,
            date: '2025-12-19'
        },
        {
            id: 24,
            type: 'success',
            icon: CheckCircle,
            title: 'Campus WiFi Upgrade Complete',
            message: 'Campus-wide WiFi infrastructure upgrade has been completed. Network speed increased by 300%.',
            time: '2 weeks ago',
            unread: false,
            date: '2025-12-13'
        },
        {
            id: 25,
            type: 'user',
            icon: GraduationCap,
            title: 'Student Council Elections',
            message: 'Student council elections will be held next month. Nomination period is now open.',
            time: '2 weeks ago',
            unread: false,
            date: '2025-12-13'
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
                    // Simulate loading delay
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
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Stay updated with all your institution activities
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
                    Unread Only
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
                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${notification.type === 'user' ? 'bg-blue-100 text-blue-600' :
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
