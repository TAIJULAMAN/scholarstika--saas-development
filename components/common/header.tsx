"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b bg-[#f5f5f5] shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Scholastika Logo"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-10 md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          <Link
            href="/"
            className="rounded-full bg-[#059669] px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-[#047857] hover:shadow-md xl:px-6 xl:py-2"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#059669] xl:text-base"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#059669] xl:text-base"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#059669] xl:text-base"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#059669] xl:text-base"
          >
            Contact
          </Link>
          <Link
            href="/auth/signin"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-[#059669] xl:text-base"
          >
            Login
          </Link>
          <Button
            asChild
            className="rounded-lg bg-[#059669] px-4 text-sm text-white transition-all hover:bg-[#047857] hover:shadow-md xl:px-6"
          >
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-200 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 bg-black/20 backdrop-blur-sm sm:top-16 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Navigation */}
          <nav className="fixed left-0 right-0 top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t bg-white shadow-lg sm:top-16 sm:max-h-[calc(100vh-4rem)] lg:hidden">
            <div className="flex flex-col gap-1 p-4 sm:gap-2 sm:p-6">
              <Link
                href="/"
                className="rounded-lg bg-[#059669] px-6 py-3 text-center text-base font-medium text-white transition-all hover:bg-[#047857] active:scale-95 sm:text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className="rounded-lg px-6 py-3 text-center text-base font-medium text-gray-700 transition-all hover:bg-gray-100 active:scale-95 sm:text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg px-6 py-3 text-center text-base font-medium text-gray-700 transition-all hover:bg-gray-100 active:scale-95 sm:text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-6 py-3 text-center text-base font-medium text-gray-700 transition-all hover:bg-gray-100 active:scale-95 sm:text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-6 py-3 text-center text-base font-medium text-gray-700 transition-all hover:bg-gray-100 active:scale-95 sm:text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Divider */}
              <div className="my-2 border-t border-gray-200" />

              <Link
                href="/auth/signin"
                className="rounded-lg border-2 border-[#059669] px-6 py-3 text-center text-base font-medium text-[#059669] transition-all hover:bg-[#059669] hover:text-white active:scale-95 sm:text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Button
                asChild
                className="rounded-lg bg-[#059669] px-6 py-6 text-base font-medium text-white transition-all hover:bg-[#047857] active:scale-95 sm:text-lg"
              >
                <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
