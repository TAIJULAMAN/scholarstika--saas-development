"use client"

import { Search, Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarContent } from "@/components/branch/sidebar"

export function BranchHeader() {
    const unreadCount = 2

    return (
        <header className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-[#16A34A] via-[#4BD17C] to-[#FACC15] px-4 md:px-6">
            <div className="flex items-center gap-3">
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="md:hidden text-white hover:bg-white/10 p-2 rounded-full">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-72">
                        <SidebarContent />
                    </SheetContent>
                </Sheet>

                <div>
                    <h1 className="text-lg md:text-xl font-semibold text-white">Branch Dashboard</h1>
                    <p className="text-xs text-white/80 hidden md:block">Hillcrest School</p>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search students, teachers..."
                        className="w-64 rounded-lg border-0 bg-white/90 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
                <Link href="/institution/notifications">
                    <button className="relative rounded-full p-2 text-white transition-all hover:bg-white/10 md:hover:scale-110">
                        <Bell className="h-6 w-6 md:h-8 md:w-8" />
                        {unreadCount > 0 && (
                            <span className="absolute right-1 top-1 md:right-0.5 md:top-0.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-red-500 text-[9px] md:text-[10px] font-bold text-white ring-2 ring-white">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                </Link>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <Link href="/institution/settings">
                        <Avatar className="h-8 w-8 md:h-9 md:w-9 border-2 border-white">
                            <AvatarImage src="https://avatar.iran.liara.run/public/42" />
                            <AvatarFallback className="bg-white text-emerald-600">BM</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div className="hidden flex-col md:flex">
                        <span className="text-sm font-semibold text-white">John Smith</span>
                        <span className="text-xs text-white/80">Branch Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
