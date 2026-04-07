"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Globe, Users, School, MapPin, Building2, LayoutDashboard, ArrowRight, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    calculateAnnualPrice,
    getStudentBand,
    DevelopmentCategory,
    LocationType,
    getCountryCategory
} from "@/lib/pricing"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Country, State } from "country-state-city"

type PricingStep = "BRANCHES" | "CALCULATOR" | "SUMMARY"

interface BranchInfo {
    name: string
    address: string
    country: string
    state: string
    city: string
    locationType: LocationType
    level: string
    studentPopulation: string
}

export default function PricingPage() {
    const [step, setStep] = useState<PricingStep>("BRANCHES")
    const [currentBranchIndex, setCurrentBranchIndex] = useState(1)
    const [totalBranches, setTotalBranches] = useState(1)
    const [branches, setBranches] = useState<BranchInfo[]>([])
    const [devCategory, setDevCategory] = useState<DevelopmentCategory>("DEVELOPED")
    const [calcLocationType, setCalcLocationType] = useState<LocationType>("URBAN")
    const [studentCount, setStudentCount] = useState<number>(650)
    const [calcBranchesCount, setCalcBranchesCount] = useState<number>(1)
    const [formData, setFormData] = useState<BranchInfo>({
        name: "",
        address: "",
        country: "",
        state: "",
        city: "",
        locationType: "URBAN",
        level: "",
        studentPopulation: ""
    })

    const countries = Country.getAllCountries()
    const [states, setStates] = useState<any[]>([])

    useEffect(() => {
        const savedUser = localStorage.getItem("registeredUser")
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser)
                setTotalBranches(parseInt(userData.branches) || 1)
                setCalcBranchesCount(parseInt(userData.branches) || 1)

                // Pre-populate first branch with signup info
                if (currentBranchIndex === 1 && !formData.name) {
                    setFormData(prev => ({
                        ...prev,
                        name: userData.schoolName || "",
                        country: userData.country || "",
                        state: userData.state || "",
                        city: userData.city || ""
                    }))
                }
            } catch (err) {
                console.error("Failed to parse user data", err)
            }
        }
    }, [currentBranchIndex])

    useEffect(() => {
        if (formData.country) {
            const countryEntry = countries.find(c => c.name === formData.country)
            if (countryEntry) {
                setStates(State.getStatesOfCountry(countryEntry.isoCode))
                
                // Auto-detect country development category
                const category = getCountryCategory(formData.country)
                setDevCategory(category)
            }
        }
    }, [formData.country])

    const handleSaveBranch = () => {
        const updatedBranches = [...branches]
        updatedBranches[currentBranchIndex - 1] = formData
        setBranches(updatedBranches)

        if (currentBranchIndex < totalBranches) {
            setCurrentBranchIndex(prev => prev + 1)
            setFormData({
                name: "",
                address: "",
                country: "",
                state: "",
                city: "",
                locationType: "URBAN",
                level: "",
                studentPopulation: ""
            })
        } else {
            // All branches filled, move to calculator
            // Pre-populate calculator with first branch's context
            if (updatedBranches.length > 0) {
                const mainBranch = updatedBranches[0]
                setCalcLocationType(mainBranch.locationType)
                // Map population range to a number for the slider
                const popNum = parseInt(mainBranch.studentPopulation.split("-")[0]) || 650
                setStudentCount(popNum)
            }
            setStep("CALCULATOR")
        }
    }

    const pricingResult = useMemo(() => {
        return calculateAnnualPrice(studentCount, devCategory, calcLocationType, calcBranchesCount)
    }, [studentCount, devCategory, calcLocationType, calcBranchesCount])

    const { finalPrice, mainSchoolPrice, extraBranchCharge, basePrice } = pricingResult
    const studentBand = useMemo(() => getStudentBand(studentCount), [studentCount])


    const renderStep1 = () => (
        <div className="flex flex-col items-center">
            <div className="text-center mb-6 mt-4 relative w-full">
                <div className="absolute -top-12 right-0 md:right-10 opacity-10 pointer-events-none">
                    <School size={100} className="text-emerald-900" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-emerald-900 mb-1">Welcome back!</h1>
                <p className="text-gray-500 font-medium text-base">You're almost there. Let's add the details for your <span className="text-emerald-600 font-bold">{currentBranchIndex === 1 ? 'first school' : `school #${currentBranchIndex}`}</span>.</p>
            </div>

            <Card className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border-none relative overflow-visible mb-12">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-white px-5 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center gap-2">
                        <span className="text-emerald-900 font-bold text-xs tracking-tight">School {currentBranchIndex} of {totalBranches}</span>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                        </div>
                    </div>
                </div>

                <CardContent className="p-8 space-y-5 pt-10">
                    <div className="grid gap-4">
                        {/* School Name */}
                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-700">School Name <span className="text-red-500">*</span></Label>
                            <div className="relative">
                                <School size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <Input
                                    placeholder="School Name"
                                    className="pl-12 h-12 bg-gray-50 border-gray-100 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                />
                            </div>
                        </div>

                        {/* School Address */}
                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-700">School Address <span className="text-red-500">*</span></Label>
                            <div className="relative">
                                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <Input
                                    placeholder="School Physical Address (e.g., 123 School St, Springfield, IL 62701)"
                                    className="pl-12 h-12 bg-gray-50 border-gray-100 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                    value={formData.address}
                                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                                />
                            </div>
                        </div>

                        {/* Country & State */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-700">Country <span className="text-red-500">*</span></Label>
                                <Select onValueChange={(val) => setFormData(prev => ({ ...prev, country: val }))} value={formData.country}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <SelectValue placeholder="Select Country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countries.map(c => (
                                            <SelectItem key={c.isoCode} value={c.name}>{c.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-700">State/Region/Province <span className="text-red-500">*</span></Label>
                                <Select onValueChange={(val) => setFormData(prev => ({ ...prev, state: val }))} value={formData.state}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <SelectValue placeholder="Select State" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {states.map(s => (
                                            <SelectItem key={s.isoCode} value={s.name}>{s.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* City & Urban/Rural */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-700">City/Town/Village <span className="text-red-500">*</span></Label>
                                <div className="relative">
                                    <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <Input
                                        placeholder="City/Town/Village"
                                        className="pl-12 h-12 bg-gray-50 border-gray-100 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                                        value={formData.city}
                                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-700">Urban or Rural <span className="text-red-500">*</span></Label>
                                <Select onValueChange={(val) => setFormData(prev => ({ ...prev, locationType: val as LocationType }))} value={formData.locationType}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <div className="flex items-center gap-2">
                                            <Globe size={16} className="text-emerald-600" />
                                            <SelectValue placeholder="Select Area" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="URBAN">Urban</SelectItem>
                                        <SelectItem value="RURAL">Rural</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Level & Population */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-700">School Type/Level <span className="text-red-500">*</span></Label>
                                <Select onValueChange={(val) => setFormData(prev => ({ ...prev, level: val }))} value={formData.level}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <SelectValue placeholder="Select Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="preschool">Preschool</SelectItem>
                                        <SelectItem value="nursery_kindergarten">Nursery/Kindergarten</SelectItem>
                                        <SelectItem value="primary_elementary">Primary/Elementary</SelectItem>
                                        <SelectItem value="secondary_middle">Secondary/Middle School</SelectItem>
                                        <SelectItem value="high_school">High School</SelectItem>
                                        <SelectItem value="college">College</SelectItem>
                                        <SelectItem value="higher_institute">Higher Institute/Polytechnique</SelectItem>
                                        <SelectItem value="religious_institute">Religious Institute</SelectItem>
                                        <SelectItem value="university">University</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold text-gray-700">Student Population <span className="text-red-500">*</span></Label>
                                <Select onValueChange={(val) => setFormData(prev => ({ ...prev, studentPopulation: val }))} value={formData.studentPopulation}>
                                    <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl">
                                        <SelectValue placeholder="Select Range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-100">1 – 100 students</SelectItem>
                                        <SelectItem value="101-300">101 – 300 students</SelectItem>
                                        <SelectItem value="301-700">301 – 700 students</SelectItem>
                                        <SelectItem value="701-1500">701 – 1,500 students</SelectItem>
                                        <SelectItem value="1501-3000">1,501 – 3,000 students</SelectItem>
                                        <SelectItem value="3001-5000">3,001 – 5,000 students</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-50 space-y-3">
                        <Button
                            className="w-full h-14 bg-[#00604b] hover:bg-[#004d3c] rounded-xl text-lg font-bold shadow-lg shadow-emerald-900/10 transition-all flex items-center justify-center gap-2 group"
                            onClick={handleSaveBranch}
                        >
                            <LayoutDashboard size={18} />
                            Save and Continue
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )

    const renderStep2 = () => (
        <section className="container mx-auto px-5 lg:px-0 mt-10">
            <div className="max-w-5xl mx-auto">
                <Card className="shadow-2xl border-none overflow-hidden bg-white/95 backdrop-blur-md rounded-[2.5rem]">
                    <div className="bg-[#007b5e] px-8 py-6 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2.5 rounded-xl">
                                <Calculator className="h-7 w-7 text-white" />
                            </div>
                            <h2 className="font-black text-2xl tracking-tight">Pricing Calculator</h2>
                        </div>
                        <span className="text-[10px] font-black bg-white/20 px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                            Strategy 2026
                        </span>
                    </div>
                    <CardContent className="p-10 space-y-8">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Country Classification */}
                            <div className="space-y-4">
                                <Label className="text-gray-900 font-black text-lg flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-emerald-600" />
                                    Country Classification
                                </Label>
                                <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-[1.5rem] opacity-75 cursor-not-allowed">
                                    <button
                                        disabled
                                        className={cn(
                                            "py-3 rounded-[1.2rem] text-xs font-black transition-all",
                                            devCategory === "DEVELOPED"
                                                ? "bg-white text-emerald-700 shadow-xl scale-[1.02]"
                                                : "text-gray-500"
                                        )}
                                    >
                                        Developed
                                    </button>
                                    <button
                                        disabled
                                        className={cn(
                                            "py-4 rounded-[1.5rem] text-sm font-black transition-all",
                                            devCategory === "DEVELOPING"
                                                ? "bg-white text-emerald-700 shadow-xl scale-[1.02]"
                                                : "text-gray-500"
                                        )}
                                    >
                                        Developing
                                    </button>
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 text-center">
                                    * Auto-detected based on selected country
                                </p>
                            </div>

                            {/* Location Type */}
                            <div className="space-y-6">
                                <Label className="text-gray-900 font-black text-xl flex items-center gap-3">
                                    <Globe className="h-6 w-6 text-emerald-600" />
                                    Location Type
                                </Label>
                                <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-[1.5rem]">
                                    <button
                                        onClick={() => setCalcLocationType("URBAN")}
                                        className={cn(
                                            "py-3 rounded-[1.2rem] text-xs font-black transition-all",
                                            calcLocationType === "URBAN"
                                                ? "bg-white text-emerald-700 shadow-xl scale-[1.02]"
                                                : "text-gray-500 hover:text-gray-700"
                                        )}
                                    >
                                        Urban
                                    </button>
                                    <button
                                        onClick={() => setCalcLocationType("RURAL")}
                                        className={cn(
                                            "py-3 rounded-[1.2rem] text-xs font-black transition-all",
                                            calcLocationType === "RURAL"
                                                ? "bg-white text-emerald-700 shadow-xl scale-[1.02]"
                                                : "text-gray-500 hover:text-gray-700"
                                        )}
                                    >
                                        Rural
                                    </button>
                                </div>
                            </div>

                            {/* Student Population */}
                            <div className="space-y-4 md:col-span-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="students" className="text-gray-900 font-black text-lg flex items-center gap-2">
                                        <Users className="h-5 w-5 text-emerald-600" />
                                        Student Population
                                    </Label>
                                    <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-widest leading-none border border-emerald-200">
                                        Band: {studentBand}
                                    </span>
                                </div>
                                <div className="relative group">
                                    <Input
                                        id="students"
                                        type="number"
                                        value={studentCount}
                                        onChange={(e) => setStudentCount(Number(e.target.value))}
                                        className="h-16 bg-gray-50/50 border-gray-100 text-3xl font-black pl-8 pr-24 rounded-[1.5rem] focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-900"
                                    />
                                    <div className="absolute top-1/2 -translate-y-1/2 right-8 text-gray-400 font-black text-xl uppercase tracking-tighter opacity-50">
                                        Students
                                    </div>
                                </div>
                                <div className="px-2">
                                    <input
                                        type="range"
                                        min="1"
                                        max="3000"
                                        step="1"
                                        value={studentCount}
                                        onChange={(e) => setStudentCount(Number(e.target.value))}
                                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-600 transition-all hover:h-4"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-4 font-black uppercase tracking-[0.2em] px-2">
                                        <span>1</span>
                                        <span>700</span>
                                        <span>1,500</span>
                                        <span>2,250</span>
                                        <span>3,000+</span>
                                    </div>
                                </div>
                            </div>

                            {/* Branches */}
                            <div className="space-y-4 md:col-span-2 border-t border-gray-100 pt-8">
                                <Label htmlFor="branches" className="text-gray-900 font-black text-lg">
                                    Total School Branches or Campuses
                                </Label>
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="relative flex-1 w-full">
                                        <Input
                                            id="branches"
                                            type="number"
                                            min="1"
                                            value={calcBranchesCount}
                                            onChange={(e) => setCalcBranchesCount(Math.max(1, Number(e.target.value)))}
                                            className="h-14 bg-gray-50/50 border-gray-100 text-2xl font-black pl-8 rounded-[1.2rem] focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                                        />
                                    </div>
                                    <div className="text-xs text-emerald-800 font-black bg-emerald-50 px-6 py-4 rounded-xl border-2 border-emerald-100 uppercase tracking-widest whitespace-nowrap shadow-sm">
                                        {calcBranchesCount > 1
                                            ? `${calcBranchesCount - 1} Extra branches (+${(calcBranchesCount - 1) * 25}%)`
                                            : "Main campus only"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-end">
                            <Button
                                className="h-14 px-10 bg-[#007b5e] hover:bg-[#006b52] rounded-xl text-xl font-black text-white shadow-2xl flex items-center gap-3 transition-all hover:scale-[1.02]"
                                onClick={() => setStep("SUMMARY")}
                            >
                                Calculate Summary
                                <ArrowRight size={22} />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )

    const renderStep3 = () => (
        <section className="container mx-auto px-5 lg:px-0 mt-10 flex justify-center pb-20">
            <Card className="w-full max-w-xl bg-[#0a192f] text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border-none overflow-hidden rounded-[2.5rem] relative">
                <div className="bg-[#007b5e] px-8 py-6 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                        <Calculator className="h-6 w-6" />
                        <h2 className="font-black text-2xl uppercase tracking-tighter">Subscription Summary</h2>
                    </div>
                    <button
                        onClick={() => setDevCategory(prev => prev === "DEVELOPED" ? "DEVELOPING" : "DEVELOPED")}
                        className="text-[10px] font-black bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg uppercase tracking-widest transition-colors border border-white/10"
                    >
                        Switch: {devCategory === "DEVELOPED" ? "Developing" : "Developed"}
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-white/60">
                            <span className="font-black uppercase tracking-widest text-xs">Total Branches</span>
                            <span className="text-xl font-black text-white">{calcBranchesCount}</span>
                        </div>
                        <div className="flex justify-between items-center text-white/60">
                            <span className="font-black uppercase tracking-widest text-xs">Total Students</span>
                            <span className="text-xl font-black text-white">{studentCount}</span>
                        </div>
                        <div className="flex justify-between items-center text-white/60">
                            <span className="font-black uppercase tracking-widest text-xs">Student Band</span>
                            <span className="text-emerald-400 font-bold px-3 py-1 bg-emerald-400/10 rounded-full">{studentBand}</span>
                        </div>
                    </div>

                    <div className="h-px bg-white/5 w-full" />

                    <div className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <span className="font-black uppercase tracking-widest text-xs text-white/60">Base Price</span>
                                <p className="text-[10px] text-white/30 font-medium tracking-tight">For {studentBand} students</p>
                            </div>
                            <span className="text-xl font-black">${basePrice}</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="space-y-1">
                                <span className="font-black uppercase tracking-widest text-xs text-white/60">Main School Price</span>
                                <p className="text-[10px] text-white/30 font-medium tracking-tight uppercase leading-none">{devCategory} - {calcLocationType}</p>
                            </div>
                            <span className="text-xl font-black">${mainSchoolPrice}</span>
                        </div>
                        {extraBranchCharge > 0 && (
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <span className="font-black uppercase tracking-widest text-xs text-yellow-400">Extra Branches</span>
                                    <p className="text-[10px] text-yellow-400/50 font-medium tracking-tight uppercase leading-none">+{calcBranchesCount - 1} campuses × 25%</p>
                                </div>
                                <span className="text-xl font-black text-yellow-400">+${extraBranchCharge}</span>
                            </div>
                        )}
                    </div>

                    <div className="h-px bg-white/5 w-full" />

                    <div className="text-center space-y-1 py-4">
                        <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Total Annual Price</span>
                        <div className="flex flex-col items-center">
                            <div className="flex items-baseline gap-1">
                                <span className="text-7xl font-black tracking-tighter">${finalPrice}</span>
                                <span className="text-white/40 font-black text-xl">/yr</span>
                            </div>
                            <p className="text-[10px] text-white/30 font-medium mt-4 tracking-wide uppercase">Billed annually in USD • Locked for 12 mos</p>
                        </div>
                    </div>

                    {/* Billing Details Box */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                        <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                            <MapPin size={14} className="text-emerald-500" />
                            Billing Details
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                                <span className="text-white/30">•</span>
                                Region: <span className="text-white font-bold">{branches[0]?.country || "Global"}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                                <span className="text-white/30">•</span>
                                Main Campus Context: <span className="text-white font-bold">{calcLocationType}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                                <span className="text-white/30">•</span>
                                Branch Strategy: <span className="text-white font-bold">+25% for extra campuses</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Button className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-black rounded-xl shadow-[0_10px_40px_-10px_rgba(5,150,105,0.5)] transition-all flex items-center justify-center gap-3 group">
                            Proceed to Payment
                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Button>
                        <div className="flex items-center justify-center gap-2 text-white/30">
                            <ShieldCheck size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Secure Encrypted Transaction</span>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Dynamic Background Elements */}
            {step === "BRANCHES" && (
                <div className="absolute top-0 right-0 h-full w-1/3 opacity-30 pointer-events-none z-0 overflow-hidden hidden lg:block">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-1/2 right-40 w-96 h-96 border-[40px] border-emerald-50 rounded-[4rem] rotate-12" />
                </div>
            )}

            <div className="relative z-10 w-full min-h-screen pb-20">
                {/* Hero Gradient Background (Only for top) */}
                <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#f8fafc] to-slate-50 -z-10" />

                {step === "BRANCHES" && renderStep1()}
                {step === "CALCULATOR" && renderStep2()}
                {step === "SUMMARY" && renderStep3()}
            </div>
        </div>
    )
}
