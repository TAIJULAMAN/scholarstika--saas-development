"use client"

import { Clock, Pill, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const medications = [
    {
        id: 1,
        student: "James Wilson (Gr 6-B)",
        medication: "Asthma Inhaler",
        dosage: "2 Puffs",
        time: "12:00 PM",
        status: "due",
        type: "scheduled",
    },
    {
        id: 2,
        student: "Emma Brown (Gr 2-A)",
        medication: "Insulin",
        dosage: "5 Units",
        time: "12:30 PM",
        status: "upcoming",
        type: "critical",
    },
    {
        id: 3,
        student: "Lucas Miller (Gr 4-C)",
        medication: "Antibiotics",
        dosage: "500mg",
        time: "01:00 PM",
        status: "upcoming",
        type: "scheduled",
    },
]

export function MedicationAlerts() {
    return (
        <Card className="col-span-1">
            <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Pill className="h-5 w-5 text-purple-500" />
                    Medication Due
                </CardTitle>
                <CardDescription>
                    Upcoming medications for the next 2 hours
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {medications.map((med) => (
                        <div
                            key={med.id}
                            className={`relative flex flex-col gap-2 rounded-lg border p-4 ${med.status === "due" ? "bg-red-50 border-red-100" : "bg-white"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-sm">{med.student}</h4>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${med.type === "critical"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-gray-100 text-gray-600"
                                    }`}>
                                    {med.time}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>{med.medication} • {med.dosage}</span>
                            </div>
                            {med.status === "due" && (
                                <div className="mt-2 flex gap-2">
                                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white">
                                        Administer
                                    </Button>
                                    <Button size="sm" variant="outline" className="w-full">
                                        Snooze
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                    {medications.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-8 text-center text-gray-500">
                            <CheckCircle2 className="mb-2 h-10 w-10 text-green-500" />
                            <p>All cleared for now!</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
