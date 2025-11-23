export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Find Your Perfect Foil Setup
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Foil Finder helps riders compare wings, masts, boards, and accessories
            based on skill level, weight, and riding style — so they can get out 
            on the water with confidence.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#start"
              className="rounded-xl bg-foreground text-background px-6 py-3 text-base font-semibold hover:opacity-80 transition"
            >
              Get Started
            </a>

            <a
              href="#learn"
              className="rounded-xl border border-foreground px-6 py-3 text-base font-semibold hover:bg-foreground/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="learn" className="bg-foreground/5 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-xl bg-background shadow">
              <h3 className="font-semibold text-xl">Smart Filters</h3>
              <p className="mt-2 text-foreground/70">
                Compare gear by rider weight, skill level, foil type, and water conditions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow">
              <h3 className="font-semibold text-xl">Beginner Friendly</h3>
              <p className="mt-2 text-foreground/70">
                We break down wings, masts, and lift characteristics in plain, simple language.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow">
              <h3 className="font-semibold text-xl">Brand Links</h3>
              <p className="mt-2 text-foreground/70">
                Direct links to companies so riders can explore real gear from top manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Explore?</h2>
          <p className="mt-4 text-foreground/70">
            Start browsing foil gear options tailored to your riding style.
          </p>

          <button className="mt-10 rounded-xl bg-foreground text-background px-8 py-4 text-lg font-semibold hover:opacity-80 transition">
            Launch Foil Finder
          </button>
        </div>
      </section>
    </main>
  );
}
