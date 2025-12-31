import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { RelatedArticles } from "@/components/blog/related-articles"
import { BlogContent } from "@/components/blog/blog-content"

export default function BlogDetailsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-white py-8">
                <div className="container mx-auto px-5 lg:px-0">
                    {/* Breadcrumb */}
                    <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-emerald-600">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-900">Article Details</span>
                    </div>

                    {/* Title */}
                    <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        I Created A Developer Rap Video - Here&apos;s What I Learned
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                                <User className="h-full w-full p-2" />
                            </div>
                            <span className="font-medium text-gray-900">Jesica Koli</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>02 December 2022</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>3 min. to read</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="bg-white py-8">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96 lg:h-[500px]">
                        <Image
                            src="/articles/blog.png"
                            alt="Blog featured image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <BlogContent />
            <RelatedArticles />
        </div>
    )
}
