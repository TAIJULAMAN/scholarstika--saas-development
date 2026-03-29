"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Plus, Trash2, Building2, Calculator, ChevronLeft, Globe, Users } from "lucide-react"
import Link from "next/link"
import { calculateAnnualPrice, LocationType } from "@/lib/pricing"

interface Branch {
    id: string;
    name: string;
    location: LocationType;
    students: number;
    state: string;
    region: string;
    province: string;
    city: string;
}

export default function SetupBranchesPage() {
    const [country, setCountry] = useState("US")
    const [countryName, setCountryName] = useState("United States")
    const [userRole, setUserRole] = useState<string | null>(null)
    const [branches, setBranches] = useState<Branch[]>([
        {
            id: "1",
            name: "Main Campus",
            location: "URBAN",
            students: 250,
            state: "",
            region: "",
            province: "",
            city: ""
        }
    ])

    useEffect(() => {
        const savedUser = localStorage.getItem("registeredUser")
        if (savedUser) {
            const userData = JSON.parse(savedUser)
            setUserRole(userData.role || null)
            setCountryName(userData.country || "United States")

            // Pre-fill the first branch with signup location data
            setBranches(prev => prev.map((b, i) => i === 0 ? {
                ...b,
                state: userData.state || "",
                city: userData.city || "",
                province: userData.province || "" ,
                region: userData.region || ""
            } : b))

            if (userData.country?.toLowerCase().includes("bangladesh")) setCountry("BD")
            else if (userData.country?.toLowerCase().includes("kingdom")) setCountry("GB")
            else if (userData.country?.toLowerCase().includes("canada")) setCountry("CA")
            else if (userData.country?.toLowerCase().includes("australia")) setCountry("AU")
            else if (userData.country?.toLowerCase().includes("nigeria")) setCountry("NG")
            else if (userData.country?.toLowerCase().includes("india")) setCountry("IN")
            else if (userData.country?.toLowerCase().includes("kenya")) setCountry("KE")
            else setCountry("US")
        }
    }, [])

    const isRestricted = userRole === "branch_manager"

    const addBranch = () => {
        if (isRestricted) return;
        setBranches([...branches, {
            id: Math.random().toString(36).substr(2, 9),
            name: "",
            location: "URBAN",
            students: 250,
            state: branches[0]?.state || "",
            region: branches[0]?.region || "",
            province: branches[0]?.province || "",
            city: branches[0]?.city || ""
        }])
    }

    const removeBranch = (id: string) => {
        if (isRestricted) return;
        if (branches.length > 1) {
            setBranches(branches.filter(b => b.id !== id))
        }
    }

    const updateBranch = (id: string, updates: Partial<Branch>) => {
        setBranches(branches.map(b => b.id === id ? { ...b, ...updates } : b))
    }

    const totalPrice = useMemo(() => {
        return branches.reduce((sum, branch) => {
            return sum + calculateAnnualPrice(country, branch.location, branch.students)
        }, 0)
    }, [country, branches])

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20">
            {/* Header Area */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/pricing">
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                                <ChevronLeft className="h-5 w-5 mr-1" />
                                Back
                            </Button>
                        </Link>
                        <div className="h-6 w-[1px] bg-slate-200 mx-2" />
                        <div>
                            <h1 className="text-lg font-bold text-slate-800">Branch Configuration</h1>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                <Globe className="h-3 w-3" />
                                Pricing context: <span className="font-semibold text-emerald-600 uppercase">{countryName}</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Total Est. Annual</p>
                            <p className="text-xl font-black text-emerald-600">${totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 pt-10">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Branch List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-emerald-600" />
                                    School Branches
                                </h2>
                                {/* {isRestricted && (
                                    <div className="bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        Read-Only Access
                                    </div>
                                )} */}
                            </div>
                            {!isRestricted && (
                                <Button
                                    onClick={addBranch}
                                    variant="outline"
                                    size="sm"
                                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-semibold"
                                >
                                    <Plus className="h-4 w-4 mr-1.5" />
                                    Add Branch
                                </Button>
                            )}
                        </div>

                        {/* {isRestricted && (
                            <div className="bg-slate-900 border-l-4 border-emerald-500 p-6 rounded-xl text-white shadow-lg overflow-hidden relative">
                                <div className="relative z-10">
                                    <h3 className="font-bold text-lg mb-2">Branch Manager View</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        You have been assigned as a <span className="text-emerald-400 font-bold uppercase">Branch Admin</span>.
                                        New branches or subscription changes can only be managed by the <span className="text-white font-bold">Global Institution Admin</span>.
                                    </p>
                                </div>
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Building2 size={80} />
                                </div>
                            </div>
                        )} */}

                        <div className="space-y-4">
                            {branches.map((branch, index) => (
                                <Card key={branch.id} className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                                    <div className="flex h-full">
                                        <div className="w-2 bg-emerald-500" />
                                        <CardContent className="p-6 flex-1">
                                            <div className="grid gap-6 md:grid-cols-3 items-end">
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Branch Name</Label>
                                                    <Input
                                                        placeholder="e.g. Westside Campus"
                                                        value={branch.name}
                                                        onChange={(e) => updateBranch(branch.id, { name: e.target.value })}
                                                        className="h-11 bg-slate-50 border-slate-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Location Context</Label>
                                                    <Select
                                                        value={branch.location}
                                                        onValueChange={(val) => updateBranch(branch.id, { location: val as LocationType })}
                                                    >
                                                        <SelectTrigger className="h-11 bg-slate-50 border-slate-200">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="URBAN">Urban (City / Town)</SelectItem>
                                                            <SelectItem value="RURAL">Rural (Countryside)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex items-center gap-3 md:col-span-1">
                                                    <div className="space-y-2 flex-1">
                                                        <Label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Students</Label>
                                                        <div className="relative">
                                                            <Input
                                                                type="number"
                                                                value={branch.students}
                                                                onChange={(e) => updateBranch(branch.id, { students: Math.max(1, Number(e.target.value)) })}
                                                                className="h-11 bg-slate-50 border-slate-200 pl-8"
                                                            />
                                                            <Users className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                                        </div>
                                                    </div>
                                                    {!isRestricted && (
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-11 w-11 text-slate-300 hover:text-red-500 hover:bg-red-50"
                                                            onClick={() => removeBranch(branch.id)}
                                                            disabled={branches.length === 1}
                                                        >
                                                            <Trash2 className="h-5 w-5" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Detailed Location Row */}
                                            <div className="grid gap-4 md:grid-cols-4 mt-6 pt-6 border-t border-slate-100">
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-bold text-slate-400 uppercase">State</Label>
                                                    <Input
                                                        placeholder="State"
                                                        value={branch.state}
                                                        onChange={(e) => updateBranch(branch.id, { state: e.target.value })}
                                                        className="h-10 bg-white border-slate-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-bold text-slate-400 uppercase">Region</Label>
                                                    <Input
                                                        placeholder="Region"
                                                        value={branch.region}
                                                        onChange={(e) => updateBranch(branch.id, { region: e.target.value })}
                                                        className="h-10 bg-white border-slate-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-bold text-slate-400 uppercase">Province</Label>
                                                    <Input
                                                        placeholder="Province"
                                                        value={branch.province}
                                                        onChange={(e) => updateBranch(branch.id, { province: e.target.value })}
                                                        className="h-10 bg-white border-slate-200"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-[10px] font-bold text-slate-400 uppercase">City</Label>
                                                    <Input
                                                        placeholder="City"
                                                        value={branch.city}
                                                        onChange={(e) => updateBranch(branch.id, { city: e.target.value })}
                                                        className="h-10 bg-white border-slate-200"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="space-y-6">
                        <Card className="bg-slate-900 text-white shadow-2xl border-none overflow-hidden sticky top-24">
                            <div className="bg-emerald-600 px-6 py-4 flex items-center gap-2">
                                <Calculator className="h-5 w-5" />
                                <h3 className="font-bold">Subscription Summary</h3>
                            </div>
                            <CardContent className="p-8 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Total Branches</span>
                                        <span className="font-bold">{branches.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Urban Branches</span>
                                        <span className="font-bold">{branches.filter(b => b.location === 'URBAN').length}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Rural Branches</span>
                                        <span className="font-bold">{branches.filter(b => b.location === 'RURAL').length}</span>
                                    </div>
                                    <div className="h-[1px] bg-slate-800" />
                                    <div className="pt-4 flex flex-col items-center">
                                        <p className="text-[10px] font-bold uppercase text-emerald-400 tracking-widest mb-1">Annual Total Amount</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black">${totalPrice}</span>
                                            <span className="text-slate-400 text-lg">/yr</span>
                                        </div>
                                        <p className="mt-2 text-slate-500 text-xs">
                                            Billed annually in USD
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                                        <h4 className="text-xs font-bold text-slate-300 uppercase mb-3 flex items-center gap-1">
                                            <MapPin className="h-3 w-3 text-emerald-400" />
                                            Billing Rules
                                        </h4>
                                        <ul className="space-y-2 text-[11px] text-slate-400 leading-relaxed">
                                            <li>• Prices adjusted for <span className="text-white font-medium">{countryName}</span> market context.</li>
                                            <li>• Rural campuses receive up to 50% discount.</li>
                                            <li>• Student bands automatically calculated.</li>
                                        </ul>
                                    </div>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12">
                                        Proceed to Payment
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
