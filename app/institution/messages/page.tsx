"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, Send } from "lucide-react"

const conversations = [
    {
        id: 1,
        name: "Ellie Smith",
        role: "Handyman, Phoenix",
        avatar: "/avatars/ellie.jpg",
        lastMessage: "11:04",
        active: true,
    },
    {
        id: 2,
        name: "Ellie Smith",
        role: "Handyman, Phoenix",
        avatar: "/avatars/ellie2.jpg",
        lastMessage: "11:04",
        active: false,
    },
    {
        id: 3,
        name: "Ellie Smith",
        role: "Handyman, Phoenix",
        avatar: "/avatars/ellie3.jpg",
        lastMessage: "11:04",
        active: false,
    },
    {
        id: 4,
        name: "Ellie Smith",
        role: "Handyman, Phoenix",
        avatar: "/avatars/ellie4.jpg",
        lastMessage: "11:04",
        active: false,
    },
    {
        id: 5,
        name: "Ellie Smith",
        role: "Handyman, Phoenix",
        avatar: "/avatars/ellie5.jpg",
        lastMessage: "11:04",
        active: false,
    },
]

const messages = [
    {
        id: 1,
        sender: "other",
        text: "Vel et commodo et scelerisque aliquam. Sed libero, non praesent felis, sem eget venenatis neque. Massa tincidunt tempor a nisl eu mauris lectus. Amet lobortis auctor at egestas aenean. Rhoncus cras nunc lectus morbi duis sem diam. Sed gravida eget semper vulputate vitae.",
        time: "10:16",
        avatar: "/avatars/alexandra.jpg",
    },
    {
        id: 2,
        sender: "other",
        image: "/messages/image-placeholder.jpg",
        time: "11:04",
        avatar: "/avatars/alexandra.jpg",
    },
    {
        id: 3,
        sender: "other",
        text: "Ok lets do it!",
        time: "11:04",
        avatar: "/avatars/alexandra.jpg",
    },
    {
        id: 4,
        sender: "me",
        text: "Donec lobortis mattis pellentesque nisl nibh eu.",
        time: "12:37",
    },
]

export default function MessagesPage() {
    const [messageInput, setMessageInput] = useState("")
    const [selectedConversation, setSelectedConversation] = useState(1)

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            // Handle send message
            setMessageInput("")
        }
    }

    return (
        <div className="flex h-[calc(100vh-120px)] gap-0 overflow-hidden rounded-xl border bg-white shadow-sm">
            {/* Conversations List */}
            <div className="w-80 border-r">
                <div className="space-y-1 p-2">
                    {conversations.map((conversation) => (
                        <button
                            key={conversation.id}
                            onClick={() => setSelectedConversation(conversation.id)}
                            className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors ${conversation.active
                                    ? "bg-blue-100"
                                    : "hover:bg-gray-50"
                                }`}
                        >
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={conversation.avatar} />
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                    {conversation.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 truncate">{conversation.name}</p>
                                    <span className="text-xs text-gray-500">{conversation.lastMessage}</span>
                                </div>
                                <p className="text-sm text-gray-600 truncate">{conversation.role}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex flex-1 flex-col">
                {/* Chat Header */}
                <div className="flex items-center gap-3 border-b p-4">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <h2 className="text-lg font-bold text-gray-900">Alexandra Broke</h2>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex gap-3 ${message.sender === "me" ? "justify-end" : ""}`}
                        >
                            {message.sender === "other" && (
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src={message.avatar} />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                                        AB
                                    </AvatarFallback>
                                </Avatar>
                            )}
                            <div className={`flex flex-col ${message.sender === "me" ? "items-end" : ""}`}>
                                <span className="mb-1 text-xs text-gray-500">{message.time}</span>
                                {message.text && (
                                    <div
                                        className={`max-w-lg rounded-2xl px-4 py-3 ${message.sender === "me"
                                                ? "bg-gray-100 text-gray-900"
                                                : "bg-blue-500 text-white"
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                )}
                                {message.image && (
                                    <div className="rounded-2xl bg-gray-200 p-2">
                                        <div className="flex h-32 w-48 items-center justify-center rounded-lg bg-gray-300">
                                            <ImageIcon className="h-12 w-12 text-gray-400" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                    <div className="flex items-center gap-3">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50">
                            <ImageIcon className="h-5 w-5" />
                        </button>
                        <Input
                            placeholder="Type a message..."
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            className="flex-1 rounded-full border-gray-300"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
                        >
                            <Send className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
