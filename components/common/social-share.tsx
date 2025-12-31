import { Button } from "@/components/ui/button"
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"

export function SocialShare() {
    return (
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
    )
}
