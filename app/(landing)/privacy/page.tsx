export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 text-white">
                <div className="container mx-auto px-6 text-center lg:px-12">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
                    <p className="text-lg">Last Updated: December 20, 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto max-w-4xl px-6 lg:px-12">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Introduction</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            Welcome to Scholarstika. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">2. Information We Collect</h2>
                        <p className="mb-4 leading-relaxed text-gray-600">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website and services</li>
                            <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us</li>
                        </ul>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                        <p className="mb-4 leading-relaxed text-gray-600">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                            <li>To provide and maintain our service</li>
                            <li>To notify you about changes to our service</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information so that we can improve our service</li>
                            <li>To monitor the usage of our service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Data Security</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Data Retention</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Your Legal Rights</h2>
                        <p className="mb-4 leading-relaxed text-gray-600">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                        </p>
                        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-600">
                            <li>Request access to your personal data</li>
                            <li>Request correction of your personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing your personal data</li>
                            <li>Request transfer of your personal data</li>
                            <li>Right to withdraw consent</li>
                        </ul>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Cookies</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Third-Party Links</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Changes to This Privacy Policy</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                        </p>

                        <h2 className="mb-4 text-2xl font-bold text-gray-900">10. Contact Us</h2>
                        <p className="mb-6 leading-relaxed text-gray-600">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <ul className="mb-6 list-none space-y-2 text-gray-600">
                            <li>Email: privacy@scholarstika.com</li>
                            <li>Phone: +880 1234 567 890</li>
                            <li>Address: 123 Education Street, Dhaka 1000, Bangladesh</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
