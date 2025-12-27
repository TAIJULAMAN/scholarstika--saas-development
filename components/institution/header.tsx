"use client"

import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function InstitutionHeader() {

    return (
        <header className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-[#16A34A] via-[#4BD17C] to-[#FACC15] px-6">
            <h1 className="text-xl font-semibold text-white">Institution Dashboard</h1>

            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search branches..."
                        className="w-64 rounded-lg border-0 bg-white/90 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>

                {/* Notifications */}
                <button className="relative rounded-full p-2 text-white transition-colors hover:bg-white/10">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border-2 border-white">
                        <AvatarImage src="/placeholder-avatar.png" />
                        <AvatarFallback className="bg-white text-emerald-600">JA</AvatarFallback>
                    </Avatar>
                    <div className="hidden flex-col md:flex">
                        <span className="text-sm font-semibold text-white">John Anderson</span>
                        <span className="text-xs text-white/80">Super Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
