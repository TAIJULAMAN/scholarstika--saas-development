"use client"

import { useState } from "react"
import { Search, Send, ArrowLeft, MoreVertical, Paperclip, Smile } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const conversations = [
    { id: 1, name: "John Smith", role: "Student", avatar: "https://avatar.iran.liara.run/public/1", lastMessage: "Thank you for the feedback on my assignment!", time: "10:30 AM", unread: 0, online: true },
    { id: 2, name: "Emma Johnson", role: "Parent", avatar: "https://avatar.iran.liara.run/public/2", lastMessage: "When is the next parent-teacher meeting?", time: "Yesterday", unread: 2, online: false },
    { id: 3, name: "Admin Office", role: "Staff", avatar: "https://avatar.iran.liara.run/public/3", lastMessage: "Please submit your attendance report by Friday", time: "2 days ago", unread: 1, online: true },
    { id: 4, name: "Sarah Williams", role: "Student", avatar: "https://avatar.iran.liara.run/public/4", lastMessage: "Can you explain the homework again?", time: "3 days ago", unread: 0, online: false },
]

const messages = [
    { id: 1, sender: "them", text: "Thank you for the feedback on my assignment!", time: "10:25 AM" },
    { id: 2, sender: "me", text: "You're welcome! Keep up the good work.", time: "10:28 AM" },
    { id: 3, sender: "them", text: "I have a question about the next chapter", time: "10:29 AM" },
    { id: 4, sender: "me", text: "Sure, what would you like to know?", time: "10:30 AM" },
]

export default function TeacherMessagesPage() {
    const [showMobileChat, setShowMobileChat] = useState(false)
    const [selectedConversation, setSelectedConversation] = useState<number | null>(1)

    const activeConv = conversations.find(c => c.id === selectedConversation)

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <h1 className="text-2xl font-bold">Messages</h1>
                <p className="mt-1 text-emerald-50 opacity-90">Communicate with students, parents, and staff</p>
            </div>

            {/* Messages Container */}
            <div className="h-[calc(100vh-16rem)] overflow-hidden rounded-xl border bg-white shadow-sm ring-1 ring-gray-100 flex">
                {/* Conversations List */}
                <div className={`w-full md:w-96 border-r border-gray-100 flex flex-col ${showMobileChat ? 'hidden md:flex' : 'flex'}`}>
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {conversations.map((conv) => (
                            <div
                                key={conv.id}
                                onClick={() => {
                                    setSelectedConversation(conv.id)
                                    setShowMobileChat(true)
                                }}
                                className={`flex cursor-pointer items-center gap-3 border-b border-gray-50 p-4 transition-all hover:bg-gray-50 ${selectedConversation === conv.id ? 'bg-emerald-50 border-l-4 border-l-emerald-500' : 'border-l-4 border-l-transparent'}`}
                            >
                                <div className="relative">
                                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                        <AvatarImage src={conv.avatar} />
                                        <AvatarFallback className="bg-emerald-100 text-emerald-600 font-semibold">
                                            {conv.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    {conv.online && (
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"></span>
                                    )}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-semibold text-gray-900 text-sm truncate">{conv.name}</p>
                                        <span className="text-[10px] text-gray-400">{conv.time}</span>
                                    </div>
                                    <p className="text-xs text-emerald-600 font-medium mb-1">{conv.role}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="truncate text-xs text-gray-600 flex-1">{conv.lastMessage}</p>
                                        {conv.unread > 0 && (
                                            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                                                {conv.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message Thread */}
                <div className={`flex-1 flex-col ${showMobileChat ? 'flex' : 'hidden md:flex'}`}>
                    {selectedConversation ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white shadow-sm">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setShowMobileChat(false)}
                                        className="mr-1 rounded-full p-2 text-gray-600 hover:bg-gray-100 md:hidden transition-colors"
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                    </button>
                                    <div className="relative">
                                        <Avatar className="h-10 w-10 border-2 border-emerald-100">
                                            <AvatarImage src={activeConv?.avatar} />
                                            <AvatarFallback className="bg-emerald-100 text-emerald-600 font-semibold">
                                                {activeConv?.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        {activeConv?.online && (
                                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500"></span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{activeConv?.name}</h3>
                                        <p className="text-xs text-emerald-600 font-medium">{activeConv?.role} • {activeConv?.online ? 'Online' : 'Offline'}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-gray-600">
                                    <MoreVertical className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/30">
                                {messages.map((message) => (
                                    <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[75%] ${message.sender === 'me' ? 'order-2' : 'order-1'}`}>
                                            <div className={`rounded-2xl p-3 shadow-sm ${message.sender === 'me'
                                                ? 'bg-emerald-500 text-white rounded-tr-none'
                                                : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none'
                                                }`}>
                                                <p className="text-sm">{message.text}</p>
                                            </div>
                                            <span className={`text-[10px] text-gray-400 mt-1 block ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                                {message.time}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-gray-100 bg-white">
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-emerald-600">
                                        <Paperclip className="h-5 w-5" />
                                    </Button>
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                                    />
                                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-emerald-600">
                                        <Smile className="h-5 w-5" />
                                    </Button>
                                    <Button size="icon" className="rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-md">
                                        <Send className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex h-full items-center justify-center bg-gray-50/30">
                            <div className="text-center">
                                <div className="mx-auto p-6 bg-emerald-50 rounded-full w-fit mb-4">
                                    <Send className="h-10 w-10 text-emerald-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Conversation Selected</h3>
                                <p className="text-sm text-gray-500">Choose a conversation from the list to start messaging</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
