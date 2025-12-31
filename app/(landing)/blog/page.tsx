import { Button } from "@/components/ui/button"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogGrid } from "@/components/blog/blog-grid"
import { PageHeader } from "@/components/common/page-header"

export default function BlogPage() {
    const categories = ["All", "Management", "Technology", "Communication", "Education", "Finance", "Well-being"]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <PageHeader
                title="Our Blog"
                description="Insights, tips, and best practices for modern school management."
            />
            <section className="border-b bg-white py-5">
                <div className="container mx-auto px-5 lg:px-0">
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

            <FeaturedPost />
            <BlogGrid />
        </div>
    )
}

