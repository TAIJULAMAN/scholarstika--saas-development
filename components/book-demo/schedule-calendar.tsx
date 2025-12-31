"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar as CalendarIcon, Clock } from "lucide-react"

interface ScheduleCalendarProps {
    date: Date | undefined
    setDate: (date: Date | undefined) => void
    selectedTime: string
    setSelectedTime: (time: string) => void
}

export function ScheduleCalendar({ date, setDate, selectedTime, setSelectedTime }: ScheduleCalendarProps) {
    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ]

    return (
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
    )
}
