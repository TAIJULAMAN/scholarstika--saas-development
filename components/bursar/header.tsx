"use client"

import { Search, Bell, Menu, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { SidebarContent } from "@/components/bursar/sidebar"
import { useState } from "react"
import { useUser } from "@/context/user-context"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function BursarHeader() {
    const { user, logout } = useUser()
    const router = useRouter()
    const unreadCount = 3
    const [isOpen, setIsOpen] = useState(false)

    const handleLogout = () => {
        logout()
        router.push("/auth/signin")
    }

    return (
        <header className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-[#16A34A] via-[#4BD17C] to-[#FACC15] px-4 md:px-6">
            <div className="flex items-center gap-3">
                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <button className="md:hidden text-white hover:bg-white/10 p-2 rounded-full">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-72">
                        <SheetTitle className="sr-only">Bursar Navigation</SheetTitle>
                        <SidebarContent onNavigate={() => setIsOpen(false)} />
                    </SheetContent>
                </Sheet>

                <div>
                    <p className="text-xl font-bold text-white">Hillcrest School</p>
                </div>
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
                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 rounded-full border border-gray-100 bg-white p-1 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                                <Avatar className="h-9 w-9 border-2 border-white">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback className="bg-white text-emerald-600">BS</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start hidden md:flex">
                                    <span className="text-sm font-semibold text-gray-700 leading-none">{user.name}</span>
                                    <span className="text-xs text-emerald-600 uppercase tracking-wide leading-none mt-0.5">{user.role.replace('_', ' ')}</span>
                                </div>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem asChild>
                                <Link href="/bursar/profile">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </header>
    )
}
