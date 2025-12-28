"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PageHeader } from "@/components/common/page-header"
import { Send } from "lucide-react"

export default function SupportPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Contact Support"
                description="Send us a message and we'll get back to you as soon as possible"
            />
            {/* Contact Form */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="mb-2">Name</Label>
                            <Input placeholder="Your name" />
                        </div>
                        <div>
                            <Label className="mb-2">Email</Label>
                            <Input type="email" placeholder="your.email@example.com" />
                        </div>
                    </div>
                    <div>
                        <Label className="mb-2">Subject</Label>
                        <Input placeholder="What is this regarding?" />
                    </div>
                    <div>
                        <Label className="mb-2">Message</Label>
                        <Textarea
                            placeholder="Please describe your issue or question in detail..."
                            rows={6}
                        />
                    </div>
                    <Button className="w-full bg-green-600">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    )
}
