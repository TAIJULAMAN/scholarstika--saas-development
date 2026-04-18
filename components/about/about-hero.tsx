import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutHero() {
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-emerald-500 to-amber-400"
      style={{
        backgroundImage: "url('/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-amber-400/90" />
      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Building the Future of Modern School Management.
            </h1>
            <p className="mb-8 text-lg leading-relaxed md:text-xl">
              Scholarstika is a modern school management platform designed to
              help schools manage academics, administration, communication, fee
              tracking, reporting, and daily operations through one connected
              system. Built for both web and mobile use, Scholarstika supports
              single schools, multi-branch schools, and growing education
              networks with a smarter, more organized way to operate in the
              digital age.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white px-8 text-emerald-600 hover:bg-gray-100"
              >
                <Link href="/auth/signup">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/aboutus.png"
                alt="Students collaborating with technology"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
