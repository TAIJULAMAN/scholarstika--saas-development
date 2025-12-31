import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"
import { relatedArticles } from "@/data/blog-posts"

export function RelatedArticles() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="mb-10 flex items-center gap-2">
                    <span className="bg-amber-500 px-3 py-1 text-sm font-bold text-white">Related</span>
                    <span className="text-gray-600">Articles</span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {relatedArticles.map((post) => (
                        <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                        {post.category}
                                    </span>
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Meta Info */}
                                <div className="mb-4 flex flex-wrap gap-3 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <Link href="/blog/details">
                                    <Button variant="outline" className="w-full">
                                        Read more
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* See All Articles Button */}
                <div className="mt-12 text-center">
                    <Link href="/blog">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            See all Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
