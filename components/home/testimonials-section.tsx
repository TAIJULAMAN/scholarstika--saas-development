"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: "Sarah M.",
            role: "School Administrator",
            image: "/people/sarah.png",
            rating: 5,
            text: "This system transformed how we track student performance. It's incredibly easy to use and has streamlined our entire administrative process.",
        },
        {
            name: "Mike R.",
            role: "High School Teacher",
            image: "/people/mike.png",
            rating: 5,
            text: "The communication features have revolutionized how I connect with parents. Real-time updates keep everyone informed and engaged.",
        },
        {
            name: "Lisa K.",
            role: "Parent",
            image: "/people/lisa.png",
            rating: 5,
            text: "I love being able to track my child's progress in real-time and communicate directly with teachers. It's made me more involved in their education.",
        },
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ]

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header with Navigation */}
                <div className="mb-12 flex items-center justify-between">
                    <div className="flex-1">
                        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                            Success Stories <span className="text-amber-500">from Our Community</span>
                        </h2>
                        <p className="text-gray-600">
                            Hear from educators, administrators, and parents who have transformed their schools with our platform.
                        </p>
                    </div>
                    <div className="hidden gap-3 md:flex">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="h-12 w-12 rounded-full border-2 border-gray-300 hover:border-gray-400"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="h-12 w-12 rounded-full border-2 border-gray-300 hover:border-gray-400"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {visibleTestimonials.map((testimonial, idx) => (
                        <Card key={idx} className="border-none bg-gray-50 shadow-md transition-all hover:shadow-lg">
                            <CardContent className="p-6">
                                {/* User Info */}
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="mb-4 flex gap-1">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-sm leading-relaxed text-gray-700">
                                    "{testimonial.text}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="mt-8 flex justify-center gap-3 md:hidden">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        className="h-12 w-12 rounded-full border-2 border-gray-300"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        className="h-12 w-12 rounded-full border-2 border-gray-300"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
