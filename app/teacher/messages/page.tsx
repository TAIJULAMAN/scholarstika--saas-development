"use client"

import { useState } from "react"
import { Search, Send, ArrowLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const conversations = [
    { id: 1, name: "John Smith (Student)", avatar: "https://avatar.iran.liara.run/public/1", lastMessage: "Thank you for the feedback!", time: "10:30 AM", unread: 0 },
    { id: 2, name: "Emma Johnson (Parent)", avatar: "https://avatar.iran.liara.run/public/2", lastMessage: "When is the next parent-teacher meeting?", time: "Yesterday", unread: 2 },
    { id: 3, name: "Admin Office", avatar: "https://avatar.iran.liara.run/public/3", lastMessage: "Please submit your attendance report", time: "2 days ago", unread: 1 },
]

export default function TeacherMessagesPage() {
    const [showMobileChat, setShowMobileChat] = useState(false)
    const [selectedConversation, setSelectedConversation] = useState<number | null>(null)

    const activeConv = conversations.find(c => c.id === selectedConversation)

    return (
        <div className="h-[calc(100vh-8rem)] overflow-hidden rounded-xl border bg-white shadow-sm ring-1 ring-gray-100 flex">
            {/* Conversations List */}
            <div className={`w-full md:w-80 border-r border-gray-100 flex flex-col ${showMobileChat ? 'hidden md:flex' : 'flex'}`}>
                <div className="p-4 border-b border-gray-100">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-200"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {conversations.map((conv) => (
                        <div
                            key={conv.id}
                            onClick={() => {
                                setSelectedConversation(conv.id)
                                setShowMobileChat(true)
                            }}
                            className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 ${selectedConversation === conv.id ? 'bg-emerald-50' : ''}`}
                        >
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={conv.avatar} />
                                <AvatarFallback>{conv.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-gray-900 text-sm truncate">{conv.name}</p>
                                    {conv.unread > 0 && (
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                                            {conv.unread}
                                        </span>
                                    )}
                                </div>
                                <p className="truncate text-xs text-gray-600">{conv.lastMessage}</p>
                                <p className="text-[10px] text-gray-400 mt-1">{conv.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Thread */}
            <div className={`flex-1 flex-col ${showMobileChat ? 'flex' : 'hidden md:flex'} bg-gray-50/30`}>
                {selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-white">
                            <button
                                onClick={() => setShowMobileChat(false)}
                                className="mr-1 rounded-full p-1 text-gray-600 hover:bg-gray-100 md:hidden"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={activeConv?.avatar} />
                                <AvatarFallback>{activeConv?.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold text-gray-900">{activeConv?.name}</h3>
                                <p className="text-xs text-emerald-600">Online</p>
                            </div>
                        </div>

                        {/* Messages Area - Placeholder content */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            <div className="flex justify-start">
                                <div className="max-w-[75%] rounded-2xl rounded-tl-none bg-white border border-gray-100 p-3 shadow-sm">
                                    <p className="text-sm text-gray-700">{activeConv?.lastMessage}</p>
                                    <span className="text-[10px] text-gray-400 mt-1 block">{activeConv?.time}</span>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-gray-100 bg-white">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-200"
                                />
                                <button className="rounded-full bg-emerald-600 p-2 text-white hover:bg-emerald-700 transition-colors">
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full items-center justify-center text-gray-400 flex-col gap-2">
                        <div className="p-4 bg-gray-100 rounded-full">
                            <Send className="h-8 w-8 text-gray-300" />
                        </div>
                        <p>Select a conversation to start messaging</p>
                    </div>
                )}
            </div>
        </div>
    )
}
