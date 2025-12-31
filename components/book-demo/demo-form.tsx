"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface DemoFormProps {
    isScheduleSelected: boolean
}

export function DemoForm({ isScheduleSelected }: DemoFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted")
    }

    return (
        <Card className="shadow-lg">
            <CardContent className="p-6">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                    Your Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <Label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-700">
                            Full Name *
                        </Label>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            required
                            className="w-full"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <Label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                            Email Address *
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            required
                            className="w-full"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                            Phone Number *
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            required
                            className="w-full"
                        />
                    </div>

                    {/* Organization */}
                    <div>
                        <Label htmlFor="organization" className="mb-2 block text-sm font-medium text-gray-700">
                            Organization Name *
                        </Label>
                        <Input
                            id="organization"
                            type="text"
                            placeholder="Your school or institution"
                            required
                            className="w-full"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <Label htmlFor="role" className="mb-2 block text-sm font-medium text-gray-700">
                            Your Role *
                        </Label>
                        <Select required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="administrator">Administrator</SelectItem>
                                <SelectItem value="principal">Principal</SelectItem>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="it-manager">IT Manager</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Number of Students */}
                    <div>
                        <Label htmlFor="students" className="mb-2 block text-sm font-medium text-gray-700">
                            Number of Students
                        </Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-100">1-100</SelectItem>
                                <SelectItem value="101-500">101-500</SelectItem>
                                <SelectItem value="501-1000">501-1000</SelectItem>
                                <SelectItem value="1001-5000">1001-5000</SelectItem>
                                <SelectItem value="5000+">5000+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Message */}
                    <div>
                        <Label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                            Additional Notes (Optional)
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us about your specific needs or questions..."
                            className="min-h-[100px] w-full"
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="submit"
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                            disabled={!isScheduleSelected}
                        >
                            Schedule Demo
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
