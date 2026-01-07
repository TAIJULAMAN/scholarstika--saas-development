"use client"

import { Bell, Search, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NurseHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-gradient-to-r from-[#16A34A] via-[#4BD17C] to-[#FACC15] px-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                    <Menu className="h-5 w-5" />
                </Button>
                <div className="relative hidden w-96 md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                        type="search"
                        placeholder="Search patients, appointments..."
                        className="w-full pl-9 bg-white/90 border-0 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-white/50"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10 hover:text-white">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </Button>

                <div className="h-8 w-px bg-white/20" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:bg-transparent text-white hover:text-white">
                            <Avatar className="h-8 w-8 border-2 border-white">
                                <AvatarImage src="/placeholder-avatar.jpg" alt="Nurse" />
                                <AvatarFallback className="bg-white text-emerald-600">SN</AvatarFallback>
                            </Avatar>
                            <div className="hidden text-left md:block">
                                <p className="text-sm font-medium leading-none">Sarah Nurse</p>
                                <p className="text-xs text-white/80">School Nurse</p>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/nurse/profile" className="cursor-pointer">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Help</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
