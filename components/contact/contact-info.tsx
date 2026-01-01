import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function ContactInfo() {
    return (
        <div className="space-y-6">
            {/* Email */}
            <Card className="shadow-md transition-all hover:shadow-xl">
                <CardContent className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                        <Mail className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">support@scholarstika.com</p>
                    <p className="text-gray-600">info@scholarstika.com</p>
                </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-md transition-all hover:shadow-xl">
                <CardContent className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                        <Phone className="h-7 w-7 text-amber-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+880 1234 567 890</p>
                    <p className="text-gray-600">+880 9876 543 210</p>
                </CardContent>
            </Card>
        </div>
    )
}
