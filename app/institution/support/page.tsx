"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    HelpCircle,
    MessageCircle,
    Mail,
    Phone,
    FileText,
    Video,
    Book,
    Search,
    ChevronDown,
    ExternalLink
} from "lucide-react"

const quickLinks = [
    {
        icon: Book,
        title: "User Guide",
        description: "Complete documentation and tutorials",
        href: "#",
    },
    {
        icon: Video,
        title: "Video Tutorials",
        description: "Step-by-step video guides",
        href: "#",
    },
    {
        icon: FileText,
        title: "Knowledge Base",
        description: "Articles and best practices",
        href: "#",
    },
    {
        icon: MessageCircle,
        title: "Community Forum",
        description: "Connect with other users",
        href: "#",
    },
]

const faqs = [
    {
        category: "Getting Started",
        questions: [
            {
                question: "How do I add new students to the system?",
                answer: "Navigate to Students section, click 'Add Student' button, fill in the required information including name, grade, contact details, and click 'Save'. You can also use the Bulk Upload feature to add multiple students at once."
            },
            {
                question: "How do I create a new academic year?",
                answer: "Go to Branch Settings > Academic Year, click 'Create New Year', set the start and end dates, and configure the terms/semesters. You can then promote students from the previous year."
            },
        ]
    },
    {
        category: "Fees Management",
        questions: [
            {
                question: "How do I set up fee structures?",
                answer: "Navigate to Fees Management > Optional Fees, click 'Add Fee', specify the fee name, amount, category, and applicable grades. You can also set up payment schedules and due dates."
            },
            {
                question: "How can I track pending payments?",
                answer: "Go to Fees Management > Student Fees and filter by 'Pending' status. You can also send payment reminders directly from this page using the 'Send Reminder' button."
            },
        ]
    },
    {
        category: "Exams & Results",
        questions: [
            {
                question: "How do I create an online exam?",
                answer: "Go to Exams > Online Exams, click 'Create Exam', fill in exam details, add questions in the Questions tab, configure settings like duration and passing marks, then publish the exam."
            },
            {
                question: "How do I publish exam results?",
                answer: "Navigate to Exams > Exam Results, select the exam, enter marks for all students, review the results, and click 'Publish Results'. Students and parents will be notified automatically."
            },
        ]
    },
    {
        category: "Staff Management",
        questions: [
            {
                question: "How do I assign roles and permissions?",
                answer: "Go to Staff Management > Roles & Permission, select or create a role, configure the permissions for different modules, and assign the role to staff members."
            },
            {
                question: "How do I process monthly payroll?",
                answer: "Navigate to Payroll > Manage Payroll, review the salary details for all staff, verify allowances and deductions, then click 'Process Payroll' to generate payment records."
            },
        ]
    },
]

const contactOptions = [
    {
        icon: Mail,
        title: "Email Support",
        description: "support@scholastika.com",
        action: "Send Email",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        icon: Phone,
        title: "Phone Support",
        description: "+1 (800) 123-4567",
        action: "Call Now",
        color: "text-green-600",
        bgColor: "bg-green-50",
    },
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Available 9 AM - 6 PM",
        action: "Start Chat",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
    },
]

export default function SupportPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                    <HelpCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">How can we help you?</h1>
                <p className="text-gray-600 mt-2">Search our knowledge base or contact support</p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <Input
                        placeholder="Search for help articles, guides, FAQs..."
                        className="pl-12 h-14 text-lg"
                    />
                </div>
            </div>

            {/* Quick Links */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {quickLinks.map((link) => {
                    const Icon = link.icon
                    return (
                        <a
                            key={link.title}
                            href={link.href}
                            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-emerald-50 p-3">
                                    <Icon className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">{link.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                                </div>
                                <ExternalLink className="h-4 w-4 text-gray-400" />
                            </div>
                        </a>
                    )
                })}
            </div>

            {/* Main Content */}
            <Tabs defaultValue="faqs" className="space-y-6">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                    <TabsTrigger value="faqs">FAQs</TabsTrigger>
                    <TabsTrigger value="contact">Contact Support</TabsTrigger>
                </TabsList>

                {/* FAQs Tab */}
                <TabsContent value="faqs" className="space-y-6">
                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="border-b p-6">
                            <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        </div>

                        <div className="p-6 space-y-6">
                            {faqs.map((category, categoryIndex) => (
                                <div key={categoryIndex}>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                                    <div className="space-y-4">
                                        {category.questions.map((faq, faqIndex) => (
                                            <details
                                                key={faqIndex}
                                                className="group rounded-lg border p-4 hover:bg-gray-50"
                                            >
                                                <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900">
                                                    {faq.question}
                                                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
                                                </summary>
                                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                {/* Contact Support Tab */}
                <TabsContent value="contact" className="space-y-6">
                    {/* Contact Options */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {contactOptions.map((option) => {
                            const Icon = option.icon
                            return (
                                <div key={option.title} className="rounded-xl border bg-white p-6 shadow-sm text-center">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${option.bgColor} mb-4`}>
                                        <Icon className={`h-6 w-6 ${option.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{option.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{option.description}</p>
                                    <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                                        {option.action}
                                    </Button>
                                </div>
                            )
                        })}
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-xl border bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Name</Label>
                                    <Input placeholder="Your name" />
                                </div>
                                <div>
                                    <Label>Email</Label>
                                    <Input type="email" placeholder="your.email@example.com" />
                                </div>
                            </div>
                            <div>
                                <Label>Subject</Label>
                                <Input placeholder="What is this regarding?" />
                            </div>
                            <div>
                                <Label>Category</Label>
                                <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Billing Question</option>
                                    <option>Feature Request</option>
                                    <option>Bug Report</option>
                                </select>
                            </div>
                            <div>
                                <Label>Message</Label>
                                <Textarea
                                    placeholder="Please describe your issue or question in detail..."
                                    rows={6}
                                />
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Additional Resources */}
            <div className="rounded-xl border bg-gradient-to-br from-emerald-50 to-blue-50 p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Still need help?</h2>
                <p className="text-gray-600 mb-6">
                    Our support team is available Monday to Friday, 9 AM - 6 PM EST
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="outline" size="lg">
                        <Book className="mr-2 h-5 w-5" />
                        View Documentation
                    </Button>
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat with Support
                    </Button>
                </div>
            </div>
        </div>
    )
}
