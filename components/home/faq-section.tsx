"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function FaqSection() {
    const faqs = [
        {
            question: "How do I make a new account on this platform or in Scholarstika?",
            answer: "To create a new account, click on the 'Sign Up' button in the top right corner. Fill in your details including name, email, and password. You'll receive a verification email to activate your account. Once verified, you can log in and start using all features of Scholarstika."
        },
        {
            question: "Can any school available on our system join Scholarstika?",
            answer: "Yes! Scholarstika is designed to accommodate schools of all sizes and types. Whether you're a small private institution or a large public school system, our multi-tenant platform can be customized to meet your specific needs. Contact our team to discuss your requirements and get started."
        },
        {
            question: "Is my data safe or how do you handle my valuable data in Scholarstika?",
            answer: "We take data security very seriously. All data is encrypted both in transit and at rest using industry-standard encryption protocols. We implement strict access controls, regular security audits, and comply with international data protection regulations including GDPR. Each school's data is completely isolated in our multi-tenant architecture."
        },
        {
            question: "I recently enrolled in a class, but can't access it after fee payment?",
            answer: "If you've completed your fee payment but still can't access your class, please allow up to 24 hours for payment verification. If the issue persists, contact your school administrator or our support team with your payment receipt. They can manually verify and grant you immediate access to your enrolled classes."
        },
        {
            question: "How do students interact with the management desk or send messages?",
            answer: "Students can communicate with the management desk through our integrated messaging system. Simply navigate to the 'Messages' section in your dashboard, select 'Contact Administration', and compose your message. You can also use the Parent-Teacher Communication Hub for direct communication with teachers and staff."
        },
    ]

    return (
        <section id="faq" className="bg-white py-16">
            <div className="container mx-auto max-w-7xl px-5 lg:px-0">
                {/* Header */}
                <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    Frequently Asked Questions
                </h2>
                <p className="mb-12 text-center text-gray-600">
                    Find quick answers to common questions about our platform and its features
                </p>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <Card key={idx} className="overflow-hidden border border-gray-200 transition-all hover:border-emerald-300 hover:shadow-md">
                            <details className="group">
                                <summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-gray-900 transition-all hover:bg-gray-50">
                                    <span className="text-base font-semibold">{faq.question}</span>
                                    <Plus className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-45" />
                                </summary>
                                <div className="border-t border-gray-100 bg-gray-50 px-5 pb-5 pt-4">
                                    <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                                </div>
                            </details>
                        </Card>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-amber-50 p-8 text-center">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">Still have questions?</h3>
                    <p className="mb-6 text-gray-600">
                        Can't find the answer you're looking for? Please chat with our friendly team.
                    </p>
                    <Button size="lg" className="bg-amber-500 px-8 text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg">
                        Get in touch
                    </Button>
                </div>
            </div>
        </section>
    )
}
