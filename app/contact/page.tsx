"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-6 text-center lg:px-12">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Get in Touch</h1>
                    <p className="mx-auto max-w-2xl text-lg md:text-xl">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="shadow-xl">
                                <CardContent className="p-8 md:p-12">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Send us a Message</h2>
                                    <form className="space-y-6">
                                        {/* Name & Email */}
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="h-12"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="h-12"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone & Subject */}
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+880 1234 567 890"
                                                    className="h-12"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Subject</Label>
                                                <Input
                                                    id="subject"
                                                    type="text"
                                                    placeholder="How can we help?"
                                                    className="h-12"
                                                />
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us more about your inquiry..."
                                                rows={6}
                                                className="resize-none"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button className="w-full bg-emerald-600 py-6 text-lg hover:bg-emerald-700 md:w-auto md:px-12">
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Email */}
                            <Card className="shadow-md transition-all hover:shadow-xl">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                                        <Mail className="h-7 w-7 text-emerald-600" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">support@scholarstika.com</p>
                                    <p className="text-gray-600">info@scholarstika.com</p>
                                </CardContent>
                            </Card>

                            {/* Phone */}
                            <Card className="shadow-md transition-all hover:shadow-xl">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                                        <Phone className="h-7 w-7 text-amber-600" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">+880 1234 567 890</p>
                                    <p className="text-gray-600">+880 9876 543 210</p>
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-6 text-center lg:px-12">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
                    <p className="mb-8 text-lg">
                        Join hundreds of schools already using Scholarstika to transform their operations.
                    </p>
                    <Link href="/book-demo">
                        <Button size="lg" className="bg-amber-500 px-8 text-white hover:bg-amber-600">
                            Start Free Trial
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
