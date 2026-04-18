export function MissionSection() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-16">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          Our{" "}
          <span className="relative">
            Mission
            <span className="absolute bottom-0 left-0 h-1 w-full bg-amber-400"></span>
          </span>
        </h2>
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Helping Schools Manage Better in the Digital Age.
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">
                At Scholarstika, our mission is to help schools operate with
                greater clarity, efficiency, and confidence through one modern
                connected platform. We are building a system that helps
                educational institutions manage academics, administration,
                communication, fee tracking, reporting, and daily school
                operations in a more organized and dependable way.
              </p>
              <p className="mb-4 leading-relaxed text-gray-600">
                We believe schools should not have to rely on scattered
                spreadsheets, paper-heavy processes, and disconnected
                communication tools to function effectively. Scholarstika exists
                to provide a smarter alternative — one that is practical,
                accessible, and built for the realities of modern school
                management.
              </p>
              <p className="leading-relaxed text-gray-600">
                Our goal is to support schools of different sizes with
                technology that simplifies operations, strengthens coordination,
                improves visibility, and helps leaders make better decisions as
                their institutions grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
