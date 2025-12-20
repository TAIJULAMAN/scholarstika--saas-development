import { HeroSection } from "@/components/home/hero-section"
import { PartnersSection } from "@/components/home/partners-section"
import { TopInstitutionsSection } from "@/components/home/top-institutions-section"
import { SmartSystemSection } from "@/components/home/smart-system-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ArticlesSection } from "@/components/home/articles-section"
import { FaqSection } from "@/components/home/faq-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Top Institutions Section */}
      <TopInstitutionsSection />

      {/* Smart System Section */}
      <SmartSystemSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Articles Section */}
      <ArticlesSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  )
}
