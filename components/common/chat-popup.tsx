"use client"

import { useState } from "react"
import { MessageCircle, X, Search, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
    id: number
    text: string
    sender: "user" | "support"
    timestamp: string
}

export function ChatPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [messageInput, setMessageInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! How can I help you today?",
            sender: "support",
            timestamp: "10:00 AM",
        },
        {
            id: 2,
            text: "I have a question about pricing",
            sender: "user",
            timestamp: "10:01 AM",
        },
        {
            id: 3,
            text: "I'd be happy to help! What would you like to know about our pricing plans?",
            sender: "support",
            timestamp: "10:02 AM",
        },
        {
            id: 4,
            text: "What features are included in the basic plan?",
            sender: "user",
            timestamp: "10:03 AM",
        },
        {
            id: 5,
            text: "The basic plan includes student management, attendance tracking, and basic reporting features.",
            sender: "support",
            timestamp: "10:04 AM",
        },
    ])

    const filteredMessages = messages.filter((msg) =>
        msg.text.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                text: messageInput,
                sender: "user",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            }
            setMessages([...messages, newMessage])
            setMessageInput("")

            // Simulate support response
            setTimeout(() => {
                const supportMessage: Message = {
                    id: messages.length + 2,
                    text: "Thank you for your message! Our support team will get back to you shortly.",
                    sender: "support",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                }
                setMessages(prev => [...prev, supportMessage])
            }, 1000)
        }
    }

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-emerald-500/50 active:scale-95 md:h-16 md:w-16"
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <X className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
                ) : (
                    <MessageCircle className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
                )}
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:h-[600px] md:w-[400px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                    <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Support Chat</h3>
                                    <p className="text-xs text-white/80">We're here to help!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="border-b bg-gray-50 p-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            />
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto bg-gradient-to-br from-emerald-50/30 via-green-50/30 to-teal-50/30 p-4">
                        <div className="space-y-3">
                            {filteredMessages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${message.sender === "user"
                                                ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white"
                                                : "bg-white text-gray-800"
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                        <p
                                            className={`mt-1 text-xs ${message.sender === "user" ? "text-white/70" : "text-gray-500"
                                                }`}
                                        >
                                            {message.timestamp}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="border-t bg-white p-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            />
                            <Button
                                onClick={handleSendMessage}
                                className="rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 px-4 py-2 text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                            >
                                <Send className="h-4 w-4" strokeWidth={2.5} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
