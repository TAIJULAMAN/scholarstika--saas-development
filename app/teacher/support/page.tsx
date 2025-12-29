"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HelpCircle, Send } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function TeacherSupportPage() {
    return (
        <div className="space-y-6">
            <div className="rounded-xl bg-emerald-500 p-6 text-white shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Contact Support</h1>
                        <p className="mt-1 text-emerald-50 opacity-90">Send us a message and we'll get back to you as soon as possible</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h2 className="mb-6 text-xl font-bold text-gray-900">Send us a message</h2>
                <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="your.email@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this regarding?" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Please describe your issue or question in detail..."
                            rows={6}
                            className="min-h-[150px]"
                        />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    )
}
