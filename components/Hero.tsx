import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-black min-h-[600px] lg:min-h-[700px]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95 z-0">
        {/* Future: Background image can go here */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-blue text-base font-bold uppercase tracking-wider mb-4">
            FREE ATM PLACEMENT FOR YOUR BUSINESS
          </p>

          {/* Main headline */}
          <h1 className="text-white font-heading text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] mb-6">
            BOOST REVENUE WITH
            <br />
            ZERO UPFRONT COST
          </h1>

          {/* Subheadline */}
          <p className="text-gray text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed">
            Fast ATM installation, cash loading, and 24/7 support across Southwestern Ontario. Start earning passive income today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-blue text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors text-center"
            >
              Get a Free ATM
            </Link>
            <Link
              href="/services#calculator"
              className="bg-transparent border-2 border-blue text-blue px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-blue hover:text-black transition-colors text-center"
            >
              Calculate Your Revenue
            </Link>
          </div>

          {/* Quick trust signals */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue rounded-full"></div>
              <span className="text-gray">Zero Upfront Cost</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue rounded-full"></div>
              <span className="text-gray">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue rounded-full"></div>
              <span className="text-gray">Fast Installation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue rounded-full"></div>
              <span className="text-gray">Ontario-Wide Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
