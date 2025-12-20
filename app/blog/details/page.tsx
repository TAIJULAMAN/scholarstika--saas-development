import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"

// Related blog posts
const relatedArticles = [
    {
        id: 2,
        title: "10 Essential Tips for Effective School",
        author: "Sarah Johnson",
        date: "15 December 2024",
        readTime: "5 min. to read",
        category: "Management",
        image: "/articles/b1.png"
    },
    {
        id: 3,
        title: "The Future of Digital Learning in Schools",
        author: "Michael Chen",
        date: "10 December 2024",
        readTime: "4 min. to read",
        category: "Technology",
        image: "/articles/b2.png"
    },
    {
        id: 4,
        title: "Building Strong Parent-Teacher Relationships",
        author: "Emily Watson",
        date: "05 December 2024",
        readTime: "6 min. to read",
        category: "Communication",
        image: "/articles/b3.png"
    }
]

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

            {/* Content Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mx-auto max-w-4xl">
                        {/* Excerpt */}
                        <p className="mb-8 text-lg leading-relaxed text-gray-700">
                            Finding a trusted contractor for your home improvement needs can feel like a daunting task. With so many options out there, how do you ensure you&apos;re hiring someone who&apos;s not only skilled but also reliable and professional? At YourTradeSource (YTS), we&apos;ve made it our mission to connect homeowners with licensed, vetted, and certified contractors. In this guide, we&apos;ll walk you through the key steps to finding the right contractor for your project.
                        </p>

                        {/* Content Section 1 */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                1. Start with the Right Information
                            </h2>
                            <p className="leading-relaxed text-gray-700">
                                Before you even start looking for a contractor, it&apos;s crucial to have a clear understanding of your project. What exactly do you need done? Whether it&apos;s a small plumbing repair or a full home renovation, having a well-defined scope of work will help you narrow down the list of potential contractors.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                                At YTS, we encourage homeowners to be as specific as possible when posting their projects. The more details you provide, the easier it will be for contractors to give you accurate estimates and timelines. By understanding exactly what you&apos;re looking for, you can quickly find contractors who specialize in the exact service you need.
                            </p>
                        </div>

                        {/* Content Section 2 */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                2. Look for Licensed and Insured Contractors
                            </h2>
                            <p className="leading-relaxed text-gray-700">
                                One of the most important steps in finding a contractor is ensuring they are licensed and insured. A licensed contractor has met the necessary requirements to perform the work legally in your area. This means they&apos;ve passed exams, have the proper training, and are up to date with local building codes.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                                Insurance is equally important. Contractors should have both liability insurance and workers&apos; compensation. Liability insurance protects you in case something goes wrong during the project (like damage to your property), while workers&apos; compensation covers any injuries that may occur on the job. At YTS, we verify that all contractors on our platform are licensed, insured, and vetted, so you can hire with confidence and peace of mind.
                            </p>
                        </div>

                        {/* Content Section 3 */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                3. Read Reviews and View Past Work
                            </h2>
                            <p className="leading-relaxed text-gray-700">
                                When it comes to hiring a contractor, reviews and past work are your best friends. They give you insight into a contractor&apos;s reliability, work quality, and professionalism. On YTS, we encourage homeowners to check reviews and browse contractor profiles that showcase their past work. Contractors can upload photos, videos, and certifications, giving you a complete picture of their capabilities.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                                Don&apos;t just look at the star rating—read through the reviews to get a sense of how contractors handle challenges, communicate with clients, and deliver on their promises. If a contractor has consistently positive reviews, it&apos;s a good sign that they&apos;re reliable and professional.
                            </p>
                        </div>

                        {/* Content Section 4 */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                4. Get Multiple Quotes and Compare
                            </h2>
                            <p className="leading-relaxed text-gray-700">
                                Once you&apos;ve identified a few potential contractors, it&apos;s time to get quotes. On YTS, this process is simple and efficient. You post your project, and multiple contractors can submit bids, allowing you to compare prices, timelines, and approaches all in one place.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                                When comparing quotes, don&apos;t just go with the lowest bid. Consider the overall value. A contractor who offers a slightly higher price but has excellent reviews and a proven track record may be worth the investment. Also, make sure the quotes are detailed and include a breakdown of costs for materials, labor, and any other expenses. This transparency helps you make an informed decision and avoid any surprises down the line.
                            </p>
                        </div>

                        {/* Content Section 5 */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                5. Transparency and Communication
                            </h2>
                            <p className="leading-relaxed text-gray-700">
                                The relationship between a homeowner and contractor is built on communication. Who YTS contractors and clients can communicate efficiently throughout the project lifecycle, from initial consultation to project completion. Our platform offers tools that keep both parties in the loop, helping to avoid misunderstandings and ensuring smooth collaboration.
                            </p>
                            <p className="mt-4 leading-relaxed text-gray-700">
                                If you&apos;re a homeowner looking for professional advice, our &quot;Ask a Pro&quot; feature connects you with licensed experts, allowing you to get expert advice before making any major decisions. Knowing that you can communicate openly and efficiently makes it easy to address concerns quickly and keep the project on track.
                            </p>
                        </div>

                        {/* Final Section */}
                        <div className="mb-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                Final Thoughts
                            </h2>
                            <p className="leading-relaxed text-gray-700">
                                At YTS, our goal is to make finding the right contractor as easy as possible. By giving you access to trustworthy, verified contractors and offering a platform where you can compare bids, read reviews, and communicate directly with pros, we&apos;re confident that you&apos;ll find the perfect contractor for your project. With our easy-to-use platform, you&apos;ll feel confident in your choice, knowing that every contractor has been carefully vetted and is ready to help you bring your vision to life.
                            </p>
                            <p className="mt-4 font-semibold leading-relaxed text-gray-900">
                                Start Your Today! Post Your Project on YTS today!
                            </p>
                        </div>

                        {/* Social Sharing */}
                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">Share this article</h3>
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                                    asChild
                                >
                                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                                    asChild
                                >
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-2 border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
                                    asChild
                                >
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-2 border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white"
                                    asChild
                                >
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-10 w-10 rounded-full border-2 border-[#BD081C] text-[#BD081C] hover:bg-[#BD081C] hover:text-white"
                                    asChild
                                >
                                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                                        <FaPinterest className="h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
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
        </div>
    )
}
