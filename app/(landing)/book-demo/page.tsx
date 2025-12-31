"use client"

import { useState } from "react"
import { PageHeader } from "@/components/common/page-header"
import { ScheduleCalendar } from "@/components/book-demo/schedule-calendar"
import { DemoForm } from "@/components/book-demo/demo-form"
import { DemoFeatures } from "@/components/book-demo/demo-features"

export default function BookDemoPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [selectedTime, setSelectedTime] = useState("")

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <PageHeader
                title="Book a Demo"
                description="Schedule a personalized demo with our team"
            />

            {/* Main Content */}
            <section className="py-10">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-5 lg:grid-cols-2">
                            <ScheduleCalendar
                                date={date}
                                setDate={setDate}
                                selectedTime={selectedTime}
                                setSelectedTime={setSelectedTime}
                            />

                            <DemoForm isScheduleSelected={!!(date && selectedTime)} />
                        </div>
                    </div>
                    <DemoFeatures />
                </div>
            </section>
        </div>
    )
}
