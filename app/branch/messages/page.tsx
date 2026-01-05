"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/common/page-header"
import { Image as ImageIcon, Send, Search, MoreVertical } from "lucide-react"

const conversations = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Mathematics Teacher",
        avatar: "/avatars/sarah.jpg",
        lastMessage: "Thanks for the update!",
        time: "11:04 AM",
        unread: 2,
        active: true,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Science Teacher",
        avatar: "/avatars/michael.jpg",
        lastMessage: "See you at the meeting",
        time: "10:45 AM",
        unread: 0,
        active: false,
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "English Teacher",
        avatar: "/avatars/emily.jpg",
        lastMessage: "Great work on the project!",
        time: "Yesterday",
        unread: 1,
        active: false,
    },
    {
        id: 4,
        name: "David Rodriguez",
        role: "History Teacher",
        avatar: "/avatars/david.jpg",
        lastMessage: "Can we reschedule?",
        time: "Yesterday",
        unread: 0,
        active: false,
    },
    {
        id: 5,
        name: "Jessica Williams",
        role: "Parent - Grade 10",
        avatar: "/avatars/jessica.jpg",
        lastMessage: "Thank you for your help",
        time: "2 days ago",
        unread: 0,
        active: false,
    },
]

const messages = [
    {
        id: 1,
        sender: "other",
        text: "Hi! I wanted to discuss the upcoming parent-teacher conference. What time works best for you?",
        time: "10:16 AM",
        avatar: "/avatars/sarah.jpg",
    },
    {
        id: 2,
        sender: "me",
        text: "Hello! I'm available on Thursday afternoon. How about 2:00 PM?",
        time: "10:25 AM",
    },
    {
        id: 3,
        sender: "other",
        text: "Perfect! That works for me. I'll send you a calendar invite.",
        time: "10:30 AM",
        avatar: "/avatars/sarah.jpg",
    },
    {
        id: 4,
        sender: "other",
        text: "Also, I wanted to share the latest student progress report with you.",
        time: "11:04 AM",
        avatar: "/avatars/sarah.jpg",
    },
    {
        id: 5,
        sender: "me",
        text: "Thanks for the update! I'll review it and get back to you.",
        time: "11:04 AM",
    },
]

export default function BranchMessagesPage() {
    const [messageInput, setMessageInput] = useState("")
    const [selectedConversation, setSelectedConversation] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            // Handle send message
            setMessageInput("")
        }
    }

    const activeConversation = conversations.find(c => c.id === selectedConversation)

    return (
        <div className="space-y-6">
            {/* <PageHeader
                title="Messages"
                description="Communicate with teachers, students, and parents"
            /> */}

            <div className="flex h-[calc(100vh-220px)] gap-0 overflow-hidden rounded-xl bg-white shadow-sm">
                {/* Conversations List */}
                <div className="w-80 border-r">
                    {/* Search */}
                    <div className="border-b p-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search conversations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                    </div>

                    {/* Conversation List */}
                    <div className="overflow-y-auto" style={{ height: 'calc(100% - 73px)' }}>
                        <div className="space-y-1 p-2">
                            {conversations.map((conversation) => (
                                <button
                                    key={conversation.id}
                                    onClick={() => setSelectedConversation(conversation.id)}
                                    className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors ${conversation.active
                                        ? "bg-green-50 border border-green-200"
                                        : "hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="relative">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={conversation.avatar} />
                                            <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                                                {conversation.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        {conversation.unread > 0 && (
                                            <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                                                {conversation.unread}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <p className={`font-semibold truncate ${conversation.unread > 0 ? "text-gray-900" : "text-gray-700"
                                                }`}>
                                                {conversation.name}
                                            </p>
                                            <span className="text-xs text-gray-500">{conversation.time}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 truncate">{conversation.role}</p>
                                        <p className={`text-sm truncate ${conversation.unread > 0 ? "font-medium text-gray-900" : "text-gray-600"
                                            }`}>
                                            {conversation.lastMessage}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex flex-1 flex-col">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between border-b p-4">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={activeConversation?.avatar} />
                                <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                                    {activeConversation?.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="font-semibold text-gray-900">{activeConversation?.name}</h2>
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-600">{activeConversation?.role}</p>
                            </div>
                        </div>
                        <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
                            <MoreVertical className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto bg-gray-50 p-6 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex gap-3 ${message.sender === "me" ? "justify-end" : ""}`}
                            >
                                {message.sender === "other" && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={message.avatar} />
                                        <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs">
                                            {activeConversation?.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`flex flex-col ${message.sender === "me" ? "items-end" : ""}`}>
                                    {message.text && (
                                        <div
                                            className={`max-w-lg rounded-2xl px-4 py-3 ${message.sender === "me"
                                                ? "bg-green-600 text-white"
                                                : "bg-white text-gray-900 shadow-sm border border-gray-100"
                                                }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                        </div>
                                    )}
                                    <span className="mt-1 text-xs text-gray-500">{message.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="border-t bg-white p-4">
                        <div className="flex items-center gap-3">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                                <ImageIcon className="h-5 w-5" />
                            </button>
                            <Input
                                placeholder="Type a message..."
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                className="flex-1 rounded-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
