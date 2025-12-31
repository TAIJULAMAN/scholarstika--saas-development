import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Tag } from "lucide-react"
import { featuredPost } from "@/data/blog-posts"

export function FeaturedPost() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="mb-10 flex items-center gap-2">
                    <span className="bg-amber-500 px-3 py-1 text-sm font-bold text-white">Featured</span>
                    <span className="text-gray-600">This month</span>
                </div>

                <div className="overflow-hidden transition-all">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                {featuredPost.title}
                            </h2>
                            <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    <span>{featuredPost.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{featuredPost.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Tag className="h-4 w-4" />
                                    <span>{featuredPost.category}</span>
                                </div>
                            </div>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                {featuredPost.excerpt}
                            </p>
                            <Link href="/blog/details">
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                    Read More...
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-auto">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
