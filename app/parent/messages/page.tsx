"use client"

import { Search, Send, MoreVertical, Phone, Video } from "lucide-react"

export default function MessagesPage() {
    const contacts = [
        { name: "Mr. Anderson", role: "Math Teacher", active: true, lastMsg: "Please check Alex's homework.", time: "10:30 AM", unread: 2 },
        { name: "Principal Office", role: "Admin", active: false, lastMsg: "School will be closed tomorrow.", time: "Yesterday", unread: 0 },
        { name: "Mrs. Davis", role: "Physics Teacher", active: false, lastMsg: "Exam schedule attached.", time: "Dec 12", unread: 0 },
        { name: "Transport Dept", role: "Staff", active: false, lastMsg: "Bus route changed.", time: "Dec 10", unread: 0 },
    ]

    return (
        <div className="h-[calc(100vh-8rem)] overflow-hidden rounded-xl border bg-white shadow-sm ring-1 ring-gray-100 flex">
            {/* Sidebar List */}
            <div className="w-80 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact, i) => (
                        <div key={i} className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer ${i === 0 ? 'bg-emerald-50/50' : ''}`}>
                            <div className="relative">
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                                    {contact.name.charAt(0)}
                                </div>
                                {contact.active && (
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                                )}
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-sm text-gray-900 truncate">{contact.name}</h3>
                                    <span className="text-[10px] text-gray-400">{contact.time}</span>
                                </div>
                                <p className="text-xs text-gray-500 truncate">{contact.lastMsg}</p>
                            </div>
                            {contact.unread > 0 && (
                                <span className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">
                                    {contact.unread}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                            M
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Mr. Anderson</h3>
                            <p className="text-xs text-emerald-600 font-medium">Online</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full hover:bg-gray-200 text-gray-500"><Phone className="h-4 w-4" /></button>
                        <button className="p-2 rounded-full hover:bg-gray-200 text-gray-500"><Video className="h-4 w-4" /></button>
                        <button className="p-2 rounded-full hover:bg-gray-200 text-gray-500"><MoreVertical className="h-4 w-4" /></button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/20">
                    <div className="flex justify-start">
                        <div className="max-w-[70%] rounded-2xl rounded-tl-none bg-white border border-gray-100 p-3 shadow-sm">
                            <p className="text-sm text-gray-700">Hello Mr. Peterson, Alex has been improving in Algebra efficiently.</p>
                            <span className="text-[10px] text-gray-400 mt-1 block">10:00 AM</span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="max-w-[70%] rounded-2xl rounded-tr-none bg-emerald-600 p-3 shadow-sm text-white">
                            <p className="text-sm">That's great to hear! I was worried about his last test scores.</p>
                            <span className="text-[10px] text-emerald-100 mt-1 block text-right">10:05 AM</span>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="max-w-[70%] rounded-2xl rounded-tl-none bg-white border border-gray-100 p-3 shadow-sm">
                            <p className="text-sm text-gray-700">Please check Alex's homework for tonight, it's about quadratic equations.</p>
                            <span className="text-[10px] text-gray-400 mt-1 block">10:30 AM</span>
                        </div>
                    </div>
                </div>

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
            </div>
        </div>
    )
}
