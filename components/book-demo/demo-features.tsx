import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react"

export function DemoFeatures() {
    return (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-10 shadow">
                <div className="rounded-full bg-emerald-100 p-2">
                    <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                    <h3 className="mb-1 font-semibold text-gray-900">30-Minute Demo</h3>
                    <p className="text-sm text-gray-600">
                        Quick and comprehensive product walkthrough
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-10 shadow">
                <div className="rounded-full bg-blue-100 p-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Online Meeting</h3>
                    <p className="text-sm text-gray-600">
                        Join from anywhere via video call
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-10 shadow">
                <div className="rounded-full bg-purple-100 p-2">
                    <CalendarIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Flexible Scheduling</h3>
                    <p className="text-sm text-gray-600">
                        Choose a time that works best for you
                    </p>
                </div>
            </div>
        </div>
    )
}
