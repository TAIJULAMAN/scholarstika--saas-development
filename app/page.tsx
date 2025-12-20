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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Institutions Section */}
      <section className="bg-emerald-700 py-16 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Top Institutions from different countries</h2>
          <p className="mb-12 text-center text-emerald-100">using our services</p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              { country: "USA", count: "300+" },
              { country: "India", count: "150+" },
              { country: "Australia", count: "90+" },
              { country: "Canada", count: "120+" },
              { country: "England", count: "85+" },
              { country: "Finland", count: "45+" },
              { country: "Pakistan", count: "65+" },
            ].map((item, idx) => (
              <Badge key={idx} className="bg-white px-6 py-3 text-base font-semibold text-emerald-700">
                {item.country} - {item.count} Institutions
              </Badge>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "University of Melbourne",
                location: "Italy, Rome",
                description:
                  "The University of Melbourne is one of the top 50 universities in the world and a leader in education.",
              },
              {
                title: "IIT - India Institute",
                location: "India, New-Delhi",
                description:
                  "The Indian Institutes of Technology are autonomous public institutions of higher learning.",
              },
              {
                title: "The University of Cambridge",
                location: "England, Cambridge",
                description:
                  "The University of Cambridge is one of the world's oldest universities and leading academic centres.",
              },
              {
                title: "MIT - Massachusetts Institute",
                location: "USA, Massachusetts",
                description: "Massachusetts Institute of Technology is a private research university in Cambridge.",
              },
            ].map((institution, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src="/university-campus.png" alt={institution.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">{institution.location}</h3>
                      <h4 className="mb-3 text-lg font-bold text-gray-900">{institution.title}</h4>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{institution.description}</p>
                  <Button variant="link" className="p-0 text-emerald-600">
                    Read →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
              View All Institutions
            </Button>
          </div>
        </div>
      </section>

      {/* Smart System Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Manage Everything in One <span className="text-emerald-600">Smart System</span>
          </h2>
          <p className="mb-12 text-center text-gray-600">
            An efficient, inclusive, innovative, and high quality educational system with no hassle
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Multi-School Admin Access</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Manage multiple school branches from one central dashboard with role-based permissions and
                  comprehensive oversight.
                </p>
                <Button variant="link" className="p-0 text-purple-600">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Track Progress Reports</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Generate detailed reports on student performance, attendance, and growth metrics with automated
                  insights.
                </p>
                <Button variant="link" className="p-0 text-orange-600">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Smart Attendance Tracking</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Automated attendance tracking with real-time notifications and comprehensive reporting for parents and
                  admins.
                </p>
                <Button variant="link" className="p-0 text-emerald-600">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center md:col-span-2 lg:col-span-1">
              <Image
                src="/news-thumbnail-3.png"
                alt="Smart system"
                width={400}
                height={300}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Online Class & Timetable Management</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Schedule and conduct virtual classes with integrated timetable management and automated reminders.
                </p>
                <Button variant="link" className="p-0 text-blue-600">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Parent-Teacher Communication Hub</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  Seamless communication platform connecting parents, teachers, and students with instant messaging.
                </p>
                <Button variant="link" className="p-0 text-indigo-600">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Powerful Features for Modern Schools
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <CardContent className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Multi-Tenant School Portal with Complete Admin Panel</h3>
                  <p className="mb-6 leading-relaxed opacity-90">
                    Powerful admin dashboard to manage multiple schools, users, and all academic operations in one
                    place.
                  </p>
                  <Button className="bg-white text-purple-700 hover:bg-gray-100">Learn More</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/admin-dashboard-illustration.png"
                    alt="Admin panel"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-br from-amber-400 to-amber-600 text-white">
              <CardContent className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Powerful School Management Dashboard</h3>
                  <p className="mb-6 leading-relaxed opacity-90">
                    Complete oversight of academic, administrative, and financial operations with real-time analytics.
                  </p>
                  <Button className="bg-white text-amber-700 hover:bg-gray-100">Learn More</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/school-dashboard-charts-illustration.jpg"
                    alt="School dashboard"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <CardContent className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Student & Parent Mobile App</h3>
                  <p className="mb-6 leading-relaxed opacity-90">
                    Native mobile apps for students and parents to access assignments, grades, and communicate with
                    teachers.
                  </p>
                  <Button className="bg-white text-blue-700 hover:bg-gray-100">Learn More</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/mobile-app-students-illustration.jpg"
                    alt="Mobile app"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
              <CardContent className="grid gap-6 p-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Smart Attendance, Exams, Report Cards & Payroll</h3>
                  <p className="mb-6 leading-relaxed opacity-90">
                    Automated systems for attendance, examination management, grading, and staff payroll processing.
                  </p>
                  <Button className="bg-white text-emerald-700 hover:bg-gray-100">Learn More</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/report-cards-and-attendance-illustration.jpg"
                    alt="Smart features"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
