"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Facebook, Instagram, Twitter } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#73DA5940] shadow-sm ">
      {/* Top Row - Social Icons and Action Buttons */}
      <div className="bg-[#73DA5940]">
        <div className="container mx-auto flex h-12 items-center justify-between px-5 md:px-0">
          {/* Social Icons - Left */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full p-2 text-[#059669]">
              <Search className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button className="rounded-full p-2 text-[#059669]">
              <Facebook className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button className="rounded-full p-2 text-[#059669]">
              <Instagram className="h-5 w-5" strokeWidth={2.5} />
            </button>
            <button className="rounded-full p-2 text-[#059669]">
              <Twitter className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Empty space for mobile */}
          <div className="md:hidden"></div>

          {/* Action Buttons - Right */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-2 border-[#059669] bg-transparent px-4 py-1 text-sm font-medium text-[#059669] transition-all hover:bg-white hover:text-[#059669]"
            >
              <Link href="/contact">Request Information</Link>
            </Button>
            <Button
              asChild
              className="rounded-lg bg-[#059669] px-4 py-1 text-sm font-medium text-white transition-all"
            >
              <Link href="/auth/signin">Student Hub</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-[#059669] transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Middle Row - Logo & Text */}
      <div className="border-b border-[#059669] bg-[#73DA5940]">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-4 md:px-0">
          <Link href="/" className="flex flex-col items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Scholastika Logo"
              width={240}
              height={120}
              className="h-14 w-auto md:h-16 -mt-10"
              priority
            />
            <div className="flex flex-col items-center gap-0.5">
              <h1 className="text-xl font-bold text-[#059669] md:text-4xl">SCHOLARSTIKA</h1>
              <p className="text-xs font-medium text-gray-900 md:text-sm">Multi-Tenant School Management System</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Row - Navigation Menu */}
      <div className="hidden md:block bg-[#73DA5940]">
        <div className="container mx-auto">
          <nav className="flex items-center justify-center gap-1 px-5 md:px-0">
            <Link
              href="/"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-[#059669] xl:px-6 xl:text-base"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-[#059669] xl:px-6 xl:text-base"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-[#059669] xl:px-6 xl:text-base"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-[#059669] xl:px-6 xl:text-base"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-[#059669] xl:px-6 xl:text-base"
            >
              Contact
            </Link>
            <Link
              href="/auth/signin"
              className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-[#059669] xl:px-6 xl:text-base"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="ml-2 rounded-lg bg-[#059669] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:text-[#059669] xl:px-6"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Navigation */}
          <nav className="fixed left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-white shadow-lg md:hidden">
            <div className="flex flex-col gap-1 p-4 sm:gap-2 sm:p-6">
              {/* Social Icons */}
              <div className="mb-4 flex items-center justify-center gap-4">
                <button className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100">
                  <Search className="h-5 w-5" />
                </button>
                <button className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100">
                  <Twitter className="h-5 w-5" />
                </button>
              </div>

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

              {/* Action Buttons */}
              {/* <div className="mt-4 flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-lg border-2 border-[#059669] bg-transparent px-6 py-6 text-base font-medium text-[#059669] transition-all hover:bg-[#059669] hover:text-white"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request Information
                  </Link>
                </Button>
                <Button
                  asChild
                  className="rounded-lg bg-[#059669] px-6 py-6 text-base font-medium text-white transition-all hover:bg-[#047857]"
                >
                  <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                    Student Hub
                  </Link>
                </Button>
              </div> */}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
