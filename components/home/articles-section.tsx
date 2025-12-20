"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

export function ArticlesSection() {
    const articles = [
        {
            image: "/articles/b1.png",
            author: "Sarah Johnson",
            authorImage: "/people/sarah.png",
            date: "April 20, 2025",
            readTime: "5 min read",
            category: "Education Technology",
            title: "Transforming School Management with Digital Solutions",
            description: "Discover how modern school management systems are revolutionizing education administration, improving communication, and enhancing student outcomes across institutions worldwide.",
        },
        {
            image: "/articles/b2.png",
            author: "Michael Chen",
            authorImage: "/people/mike.png",
            date: "April 18, 2025",
            readTime: "7 min read",
            category: "Best Practices",
            title: "10 Ways to Improve Parent-Teacher Communication",
            description: "Learn effective strategies for building stronger connections between parents and teachers using digital tools, regular updates, and transparent communication channels.",
        },
        {
            image: "/articles/b3.png",
            author: "Lisa Anderson",
            authorImage: "/people/lisa.png",
            date: "April 15, 2025",
            readTime: "6 min read",
            category: "Student Success",
            title: "Data-Driven Insights for Better Student Performance",
            description: "Explore how analytics and real-time data tracking can help educators identify learning gaps, personalize instruction, and improve overall student achievement.",
        },
    ]

    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-5 lg:px-0">
                {/* Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                            Latest <span className="text-emerald-600">Insights</span>
                        </h2>
                        <p className="text-base text-gray-600 md:text-lg">
                            Stay updated with the latest trends and tips in education technology
                        </p>
                    </div>
                    <Link href="/blog">
                        <Button className="group bg-emerald-600 hover:bg-emerald-700">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {articles.map((article, idx) => (
                        <Link href="/blog/details" key={idx}>
                            <Card className="group h-full overflow-hidden border-none bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                {/* Article Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute left-4 top-4">
                                        <Badge className="bg-emerald-600 text-white hover:bg-emerald-700">
                                            {article.category}
                                        </Badge>
                                    </div>

                                    {/* Read Time Badge */}
                                    <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
                                        <Clock className="h-3 w-3" />
                                        {article.readTime}
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Author & Date */}
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-emerald-100">
                                            <Image
                                                src={article.authorImage}
                                                alt={article.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Calendar className="h-3 w-3" />
                                                {article.date}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-emerald-600">
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
                                        {article.description}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700">
                                        Read Article
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>

                                    {/* Decorative Bottom Border */}
                                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
