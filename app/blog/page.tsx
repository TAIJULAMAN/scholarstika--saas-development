import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Tag } from "lucide-react"

export default function BlogPage() {
    const featuredPost = {
        id: 1,
        title: "How To Find The Right Contractor For Your Home Project",
        excerpt: "Finding a trusted contractor for your home improvement needs can feel like a daunting task. With so many options out there, how do you ensure you're hiring someone who's not only skilled but also reliable and professional? At YourTradeSource.com, we've made it our mission to connect homeowners with licensed, vetted, and...",
        author: "Jesica Koli",
        date: "02 December 2022",
        readTime: "3 min. to read",
        category: "Well-being",
        image: "/articles/blog.png",
        featured: true
    }

    const blogPosts = [
        {
            id: 2,
            title: "10 Essential Tips for Effective School Management",
            excerpt: "Discover the key strategies that successful school administrators use to streamline operations and improve educational outcomes.",
            author: "Sarah Johnson",
            date: "15 December 2024",
            readTime: "5 min. to read",
            category: "Management",
            image: "/articles/b1.png"
        },
        {
            id: 3,
            title: "The Future of Digital Learning in Schools",
            excerpt: "Explore how technology is transforming education and what it means for students, teachers, and administrators.",
            author: "Michael Chen",
            date: "10 December 2024",
            readTime: "4 min. to read",
            category: "Technology",
            image: "/articles/b2.png"
        },
        {
            id: 4,
            title: "Building Strong Parent-Teacher Relationships",
            excerpt: "Learn effective communication strategies to foster collaboration between parents and teachers for student success.",
            author: "Emily Watson",
            date: "05 December 2024",
            readTime: "6 min. to read",
            category: "Communication",
            image: "/articles/b3.png"
        },
        {
            id: 5,
            title: "Streamlining Attendance Tracking with Technology",
            excerpt: "Modern solutions for attendance management that save time and improve accuracy in educational institutions.",
            author: "David Rodriguez",
            date: "01 December 2024",
            readTime: "4 min. to read",
            category: "Technology",
            image: "/articles/b1.png"
        },
        {
            id: 6,
            title: "Best Practices for Student Assessment",
            excerpt: "Comprehensive guide to implementing fair and effective assessment methods that support student learning.",
            author: "Lisa Anderson",
            date: "28 November 2024",
            readTime: "7 min. to read",
            category: "Education",
            image: "/articles/b2.png"
        },
        {
            id: 7,
            title: "Managing School Finances: A Complete Guide",
            excerpt: "Expert advice on budgeting, financial planning, and resource allocation for educational institutions.",
            author: "James Thompson",
            date: "25 November 2024",
            readTime: "5 min. to read",
            category: "Finance",
            image: "/articles/b3.png"
        }
    ]

    const categories = ["All", "Management", "Technology", "Communication", "Education", "Finance", "Well-being"]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-6 text-center lg:px-12">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Our Blog</h1>
                    <p className="mx-auto max-w-2xl text-lg md:text-xl">
                        Insights, tips, and best practices for modern school management.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="border-b bg-white py-6">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category, idx) => (
                            <Button
                                key={idx}
                                variant={idx === 0 ? "default" : "outline"}
                                className={idx === 0 ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-12">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mb-10 flex items-center gap-2">
                        <span className="bg-amber-500 px-3 py-1 text-sm font-bold text-white">Featured</span>
                        <span className="text-gray-600">This month</span>
                    </div>

                    <Card className="overflow-hidden transition-all">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Left - Content */}
                            <div className="p-8 md:p-12">
                                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                                    {featuredPost.title}
                                </h2>

                                {/* Meta Info */}
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

                                <Link href={`/blog/${featuredPost.id}`}>
                                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                                        Read More...
                                    </Button>
                                </Link>
                            </div>

                            {/* Right - Image */}
                            <div className="relative h-64 md:h-auto">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">Latest Articles</h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="overflow-hidden transition-all">
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

                                    <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
                                        {post.excerpt}
                                    </p>

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

                                    <Link href={`/blog/${post.id}`}>
                                        <Button variant="outline" className="w-full">
                                            Read More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-12 text-center">
                        <Button size="lg" variant="outline" className="px-8">
                            Load More Articles
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
