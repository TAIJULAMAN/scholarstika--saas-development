"use client"

import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { SidebarContent } from "./sidebar"


export function InstitutionHeader() {
    const unreadCount = 3

    return (
        <header className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-[#16A34A] via-[#4BD17C] to-[#FACC15] px-6">
            <div className="flex items-center gap-4 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 border-r w-72">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
                <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            </div>

            <h1 className="text-xl font-semibold text-white hidden md:block">Institution Dashboard</h1>

            <div className="flex items-center gap-4">
                <div className="relative hidden lg:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search branches..."
                        className="w-64 rounded-lg border-0 bg-white/90 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                </div>
                <Link href="/institution/notifications">
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
                    <Link href="/institution/settings">
                        <Avatar className="h-9 w-9 border-2 border-white">
                            <AvatarImage src="https://avatar.iran.liara.run/public/24" />
                            <AvatarFallback className="bg-white text-emerald-600">SA</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div className="hidden flex-col lg:flex">
                        <span className="text-sm font-semibold text-white">Shah Aman</span>
                        <span className="text-xs text-white/80">Global Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
