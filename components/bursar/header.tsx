"use client"

import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export function BursarHeader() {
    const unreadCount = 5

    return (
        <header className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-[#16A34A] via-[#4BD17C] to-[#FACC15] px-6">
            <div>
                <h1 className="text-xl font-semibold text-white">Finance Administrator Dashboard</h1>
                <p className="text-xs text-white/80">Hillcrest School</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search invoices, students..."
                        className="w-64 rounded-lg border-0 bg-white/90 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
                <Link href="/bursar/notifications">
                    <button className="relative rounded-full p-2 text-white transition-all hover:bg-white/10 hover:scale-110">
                        <Bell className="h-8 w-8" />
                        {unreadCount > 0 && (
                            <span className="absolute right-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                </Link>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <Link href="/bursar/profile">
                        <Avatar className="h-9 w-9 border-2 border-white">
                            <AvatarImage src="https://avatar.iran.liara.run/public/33" />
                            <AvatarFallback className="bg-white text-emerald-600">BS</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div className="hidden flex-col md:flex">
                        <span className="text-sm font-semibold text-white">Robert Chen</span>
                        <span className="text-xs text-white/80">Finance Administrator</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
