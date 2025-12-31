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
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Row - Social Icons and Action Buttons */}
      <div className="bg-emerald-950 text-white shadow-sm">
        <div className="container mx-auto flex h-12 items-center justify-between px-5 md:px-0">
          {/* Social Icons - Left */}
          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-full p-2 text-emerald-300 transition-colors hover:bg-white/10 hover:text-white">
              <Search className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button className="rounded-full p-2 text-emerald-300 transition-colors hover:bg-white/10 hover:text-white">
              <Facebook className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button className="rounded-full p-2 text-emerald-300 transition-colors hover:bg-white/10 hover:text-white">
              <Instagram className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button className="rounded-full p-2 text-emerald-300 transition-colors hover:bg-white/10 hover:text-white">
              <Twitter className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>

          {/* Empty space for mobile */}
          <div className="md:hidden"></div>

          {/* Action Buttons - Right */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="ghost"
              className="h-8 rounded-full text-xs font-semibold text-emerald-100 hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Request Information</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-8 rounded-full text-xs font-semibold text-emerald-100 hover:bg-white/10 hover:text-white"
            >
              <Link href="/auth/signin">Student Hub</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-emerald-100 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Bottom Row - Logo, Navigation, Auth */}
      <div className="border-b border-emerald-100 bg-white/95 backdrop-blur-md shadow-sm transition-all">
        <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-0">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Scholastika Logo"
              width={240}
              height={120}
              className="h-14 w-auto md:h-16"
              priority
            />
            <div className="flex flex-col items-center gap-0.5">
              <h1 className="text-xl font-extrabold tracking-tight text-emerald-900 md:text-3xl">SCHOLARSTIKA</h1>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600/80 md:text-xs">Multi-Tenant School Management</p>
            </div>
          </Link>

          {/* Middle - Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 xl:px-5 xl:text-base"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 xl:px-5 xl:text-base"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 xl:px-5 xl:text-base"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 xl:px-5 xl:text-base"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700 xl:px-5 xl:text-base"
            >
              Contact
            </Link>
          </nav>

          {/* Right - Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/auth/signin"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-12 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <nav className="fixed left-0 right-0 top-12 z-50 h-[calc(100vh-3rem)] overflow-y-auto bg-white/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Divider */}
              <div className="my-2 border-t border-gray-100" />

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/auth/signin"
                  className="flex w-full items-center justify-center rounded-full bg-gray-100 px-4 py-3 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>

              {/* Secondary Actions */}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50/50 px-3 py-2 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Info
                </Link>
                <Link
                  href="/auth/signin"
                  className="flex items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50/50 px-3 py-2 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Student Hub
                </Link>
              </div>

              {/* Social Icons */}
              <div className="mt-4 flex items-center justify-center gap-6 text-gray-400">
                <button className="transition-colors hover:text-emerald-600">
                  <Search className="h-5 w-5" strokeWidth={2.5} />
                </button>
                <button className="transition-colors hover:text-emerald-600">
                  <Facebook className="h-5 w-5" strokeWidth={2.5} />
                </button>
                <button className="transition-colors hover:text-emerald-600">
                  <Instagram className="h-5 w-5" strokeWidth={2.5} />
                </button>
                <button className="transition-colors hover:text-emerald-600">
                  <Twitter className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
