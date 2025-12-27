"use client"

import { UserPlus, FileText, AlertCircle, CheckCircle, Filter, Search, Bell } from "lucide-react"
import { useState } from "react"

export default function NotificationsPage() {
    const [filter, setFilter] = useState<'all' | 'unread'>('all')

    const notifications = [
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
            unread: false,
            date: '2025-12-27'
        },
        {
            id: 4,
            type: 'success',
            icon: CheckCircle,
            title: 'Verification Complete',
            message: 'Staff credentials have been verified successfully. All new staff members can now access the system.',
            time: '1 day ago',
            unread: false,
            date: '2025-12-26'
        },
        {
            id: 5,
            type: 'user',
            icon: UserPlus,
            title: 'New Staff Member Added',
            message: 'Dr. Sarah Johnson has been added to the faculty. Please assign courses and update the schedule accordingly.',
            time: '2 days ago',
            unread: false,
            date: '2025-12-25'
        },
        {
            id: 6,
            type: 'document',
            icon: FileText,
            title: 'Exam Schedule Published',
            message: 'The final exam schedule for the current semester has been published. Students have been notified via email.',
            time: '3 days ago',
            unread: false,
            date: '2025-12-24'
        },
        {
            id: 7,
            type: 'alert',
            icon: AlertCircle,
            title: 'System Maintenance Scheduled',
            message: 'System maintenance is scheduled for this weekend. The platform will be unavailable from 2 AM to 6 AM.',
            time: '4 days ago',
            unread: false,
            date: '2025-12-23'
        },
        {
            id: 8,
            type: 'success',
            icon: CheckCircle,
            title: 'Bulk Upload Completed',
            message: 'Successfully uploaded 150 student records. All data has been validated and imported into the system.',
            time: '5 days ago',
            unread: false,
            date: '2025-12-22'
        }
    ]

    const filteredNotifications = filter === 'unread'
        ? notifications.filter(n => n.unread)
        : notifications

    const unreadCount = notifications.filter(n => n.unread).length

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

            {/* Filters and Search */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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


            </div>

            {/* Notifications List */}
            <div className="space-y-3">
                {filteredNotifications.length === 0 ? (
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
                    filteredNotifications.map((notification) => {
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
                    })
                )}
            </div>

            {/* Pagination */}
            {filteredNotifications.length > 0 && (
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 rounded-lg">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredNotifications.length}</span> of{' '}
                                <span className="font-medium">{notifications.length}</span> notifications
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20">
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="relative z-10 inline-flex items-center bg-emerald-600 px-4 py-2 text-sm font-semibold text-white focus:z-20">
                                    1
                                </button>
                                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20">
                                    2
                                </button>
                                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20">
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
