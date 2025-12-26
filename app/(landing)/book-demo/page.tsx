"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
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
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react"

export default function BookDemoPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedTime, setSelectedTime] = useState("")

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 text-white">
                <div className="container mx-auto px-5 text-center lg:px-0">
                    <h1 className="mb-3 text-4xl font-bold md:text-5xl">Book a Demo</h1>
                    <p className="mx-auto max-w-2xl text-lg">
                        Schedule a personalized demo with our team
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Left Side - Calendar */}
                            <Card className="shadow-lg">
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-xl font-bold text-gray-900">
                                        Select Date & Time
                                    </h2>

                                    {/* Calendar */}
                                    <div className="mb-6 flex justify-center">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            className="rounded-md border"
                                            disabled={(date) => date < new Date()}
                                        />
                                    </div>

                                    {/* Time Slots */}
                                    <div>
                                        <Label className="mb-3 block text-sm font-semibold text-gray-700">
                                            Available Time Slots
                                        </Label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {timeSlots.map((time) => (
                                                <Button
                                                    key={time}
                                                    type="button"
                                                    variant={selectedTime === time ? "default" : "outline"}
                                                    className={`text-xs ${selectedTime === time ? "bg-emerald-600 hover:bg-emerald-700" : ""
                                                        }`}
                                                    onClick={() => setSelectedTime(time)}
                                                >
                                                    {time}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Selected Info */}
                                    {date && selectedTime && (
                                        <div className="mt-6 rounded-lg bg-emerald-50 p-4">
                                            <p className="mb-2 text-sm font-semibold text-emerald-900">
                                                Selected Schedule:
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-emerald-700">
                                                <CalendarIcon className="h-4 w-4" />
                                                <span>{date.toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-emerald-700">
                                                <Clock className="h-4 w-4" />
                                                <span>{selectedTime}</span>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Right Side - Form */}
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
                                                disabled={!date || !selectedTime}
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
                        </div>

                        {/* Bottom Features */}
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow">
                                <div className="rounded-full bg-emerald-100 p-2">
                                    <Clock className="h-5 w-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">30-Minute Demo</h3>
                                    <p className="text-sm text-gray-600">
                                        Quick and comprehensive product walkthrough
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow">
                                <div className="rounded-full bg-blue-100 p-2">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Online Meeting</h3>
                                    <p className="text-sm text-gray-600">
                                        Join from anywhere via video call
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow">
                                <div className="rounded-full bg-purple-100 p-2">
                                    <CalendarIcon className="h-5 w-5 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Flexible Scheduling</h3>
                                    <p className="text-sm text-gray-600">
                                        Choose a time that works best for you
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
