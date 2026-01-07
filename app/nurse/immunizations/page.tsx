"use client"

import { Syringe, Eye, Ruler, Download, Upload, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const upcomingVaccinations = [
    { student: "James Wilson", grade: "6-B", vaccine: "Tetanus Booster", date: "Oct 15, 2025", status: "Overdue" },
    { student: "Emma Brown", grade: "1-A", vaccine: "MMR", date: "Nov 02, 2025", status: "Upcoming" },
    { student: "Lucas Miller", grade: "4-C", vaccine: "Flu Shot", date: "Nov 05, 2025", status: "Upcoming" },
]

export default function ImmunizationPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Immunization & Screening</h2>
                    <p className="text-gray-500">Track vaccinations and mandatory health screenings.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                        <Upload className="mr-2 h-4 w-4" /> Upload Records
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
                        <Syringe className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94%</div>
                        <Progress value={94} className="mt-2 h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            +2% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Vision Screenings</CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128/450</div>
                        <Progress value={30} className="mt-2 h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            Grade 1 & 3 Pending
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">BMI Checks</CardTitle>
                        <Ruler className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Completed</div>
                        <Progress value={100} className="mt-2 h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            All grades checked
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="vaccinations" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
                    <TabsTrigger value="screenings">Health Screenings</TabsTrigger>
                </TabsList>
                <TabsContent value="vaccinations" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming & Overdue</CardTitle>
                            <CardDescription>Students requiring vaccination attention in the next 30 days.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Student</TableHead>
                                            <TableHead>Grade</TableHead>
                                            <TableHead>Vaccine</TableHead>
                                            <TableHead>Due Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {upcomingVaccinations.map((record, i) => (
                                            <TableRow key={i}>
                                                <TableCell className="font-medium">{record.student}</TableCell>
                                                <TableCell>{record.grade}</TableCell>
                                                <TableCell>{record.vaccine}</TableCell>
                                                <TableCell>{record.date}</TableCell>
                                                <TableCell>
                                                    <Badge variant={record.status === 'Overdue' ? "destructive" : "secondary"}>
                                                        {record.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="ghost" size="sm">Notify Parent</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="screenings">
                    <div className="flex items-center justify-center p-8 border rounded-lg bg-gray-50 border-dashed">
                        <p className="text-muted-foreground">Screening schedule visualization placeholder...</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
