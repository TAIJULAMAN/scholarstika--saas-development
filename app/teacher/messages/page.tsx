"use client"

import { PageHeader } from "@/components/common/page-header"
import { Search, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const conversations = [
    { id: 1, name: "John Smith (Student)", avatar: "https://avatar.iran.liara.run/public/1", lastMessage: "Thank you for the feedback!", time: "10:30 AM", unread: 0 },
    { id: 2, name: "Emma Johnson (Parent)", avatar: "https://avatar.iran.liara.run/public/2", lastMessage: "When is the next parent-teacher meeting?", time: "Yesterday", unread: 2 },
    { id: 3, name: "Admin Office", avatar: "https://avatar.iran.liara.run/public/3", lastMessage: "Please submit your attendance report", time: "2 days ago", unread: 1 },
]

export default function TeacherMessagesPage() {
    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Messages"
                description="Communicate with students, parents, and administration"
            /> */}

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Conversations List */}
                <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-1">
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {conversations.map((conv) => (
                            <div
                                key={conv.id}
                                className="flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                            >
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={conv.avatar} />
                                    <AvatarFallback>{conv.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium text-gray-900">{conv.name}</p>
                                        {conv.unread > 0 && (
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                                                {conv.unread}
                                            </span>
                                        )}
                                    </div>
                                    <p className="truncate text-sm text-gray-600">{conv.lastMessage}</p>
                                    <p className="text-xs text-gray-400">{conv.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message Thread */}
                <div className="rounded-xl bg-white shadow-sm lg:col-span-2">
                    <div className="border-b p-6">
                        <h3 className="font-semibold text-gray-900">Select a conversation to view messages</h3>
                    </div>
                    <div className="flex h-96 items-center justify-center text-gray-400">
                        <p>No conversation selected</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
