import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Users,
  FileText,
  Calendar,
  Award,
  MessageSquare,
  Clock,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { PartnersSection } from "@/components/home/partners-section"
import { TopInstitutionsSection } from "@/components/home/top-institutions-section"
import { SmartSystemSection } from "@/components/home/smart-system-section"

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
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Success Stories <span className="text-amber-500">from Our Community</span>
            </h2>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah K.",
                role: "Principal",
                school: "Greenwood High School",
                rating: 5,
                text: "This platform has transformed how we manage our school. The administrative features are intuitive and save us countless hours every week.",
              },
              {
                name: "John M.",
                role: "Teacher",
                school: "Riverside Academy",
                rating: 5,
                text: "The grade management and parent communication tools are exceptional. I can focus more on teaching and less on paperwork.",
              },
              {
                name: "Lisa P.",
                role: "Parent",
                school: "Oakwood Elementary",
                rating: 5,
                text: "I love being able to track my child's progress in real-time. The mobile app makes it so easy to stay connected with teachers.",
              },
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-700">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-3 flex text-amber-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mb-3 leading-relaxed text-gray-700">{testimonial.text}</p>
                  <p className="text-sm text-gray-500">{testimonial.school}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-8 flex items-center justify-between">
            <Badge className="bg-amber-500 text-white">Articles</Badge>
            <Button variant="link" className="text-emerald-600">
              See all Articles →
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                category: "EDUCATION",
                date: "23 Mar 2024",
                title: "What is Lorem Ipsum?",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
              },
              {
                category: "EDUCATION",
                date: "23 Mar 2024",
                title: "What is Lorem Ipsum?",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
              },
              {
                category: "EDUCATION",
                date: "23 Mar 2024",
                title: "What is Lorem Ipsum?",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
              },
            ].map((article, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/education-technology.png" alt={article.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                    <span className="font-medium text-emerald-600">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{article.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{article.description}</p>
                  <Button variant="link" className="p-0 text-emerald-600">
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-6 lg:px-12">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
          <p className="mb-12 text-center text-gray-600">
            Find quick answers to common questions about our platform and its features
          </p>

          <div className="space-y-4">
            {[
              "How do I make a new account on this platform or in Scholostika?",
              "Can any school available on our system can in Scholostika?",
              "Is my data safe or how you handle my valuable data in Scholastika?",
              "I recently enrolled in a class, but can't access it after fee payment?",
              "How do student interact in the management desk can send message?",
            ].map((question, idx) => (
              <Card key={idx} className="border-2 hover:border-emerald-200">
                <CardContent className="flex items-center justify-between p-6">
                  <h4 className="font-medium text-gray-900">{question}</h4>
                  <Plus className="h-5 w-5 text-gray-400" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Still have questions?</h3>
            <p className="mb-6 text-gray-600">Can't find the answer you're looking for? Please chat to our team.</p>
            <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-500 py-12 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">Scholastika</h3>
              <p className="mb-4 leading-relaxed opacity-90">
                Empowering education through innovative technology solutions for schools worldwide.
              </p>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="hover:bg-amber-600">
                  <span className="sr-only">Facebook</span>f
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-amber-600">
                  <span className="sr-only">Twitter</span>t
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-amber-600">
                  <span className="sr-only">LinkedIn</span>in
                </Button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Platform</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <Link href="#" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Institutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Newsletter</h4>
              <p className="mb-4 text-sm opacity-90">Subscribe to get the latest news and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-0 px-4 py-2 text-gray-900"
                />
                <Button className="bg-white text-amber-600 hover:bg-gray-100">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-amber-400 pt-8 text-center text-sm opacity-90">
            <p>© 2025 Scholastika. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
