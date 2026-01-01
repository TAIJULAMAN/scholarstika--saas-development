import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
    return (
        <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">Send us a Message</h2>
                <form className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                className="h-12"
                            />
                        </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+880 1234 567 890"
                                className="h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="How can we help?"
                                className="h-12"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            className="resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full bg-emerald-600 py-6 text-lg hover:bg-emerald-700 md:w-auto md:px-12">
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
