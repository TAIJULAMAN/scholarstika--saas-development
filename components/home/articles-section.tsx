"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export function ArticlesSection() {
    const articles = [
        {
            image: "/articles/b1.png",
            author: "Person Dummy",
            date: "April 20 2025",
            category: "Home help",
            title: "What is Lorem Ipsum?",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: "/articles/b2.png",
            author: "Person Dummy",
            date: "April 20 2025",
            category: "Home help",
            title: "What is Lorem Ipsum?",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            image: "/articles/b3.png",
            author: "Person Dummy",
            date: "April 20 2025",
            category: "Home help",
            title: "What is Lorem Ipsum?",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ]

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-10 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-900">
                        <span className="bg-amber-500 px-3 py-1 text-white">Recent</span> Articles
                    </h2>
                    <Link href="/articles" className="text-gray-900 underline hover:text-gray-700">
                        See all Articles
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {articles.map((article, idx) => (
                        <Card key={idx} className="overflow-hidden border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                            {/* Article Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                />
                            </div>

                            <CardContent className="p-5">
                                {/* Meta Info */}
                                <div className="mb-3 flex items-center justify-between text-sm text-gray-600">
                                    <span>{article.author} · {article.date}</span>
                                    <Link href="#" className="text-purple-600 hover:text-purple-700">
                                        {article.category}
                                    </Link>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-bold text-gray-900">
                                    {article.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                    {article.description}
                                </p>

                                {/* Read Button */}
                                <Button
                                    variant="outline"
                                    className="w-full border-gray-300 text-gray-900 hover:bg-gray-50"
                                >
                                    Read the article
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
