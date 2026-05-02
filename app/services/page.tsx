import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import RevenueCalculator from "@/components/RevenueCalculator";
import CTABanner from "@/components/CTABanner";
import { Banknote, Clock, Wrench, TrendingUp, Zap, Shield } from "lucide-react";

export const metadata = {
  title: "ATM Services & Programs | SecurX Financial",
  description: "Free ATM placement, cash loading, 24/7 support, and revenue sharing. Choose the program that fits your business needs.",
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue text-sm font-bold uppercase tracking-wider mb-4">
              Complete ATM Solutions
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Services & Programs
            </h1>
            <p className="text-gray text-xl">
              Everything you need to offer convenient cash access — with zero upfront cost.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Complete ATM Service"
              description="From installation to maintenance, we handle everything so you can focus on your business."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={Zap}
                title="Fast Installation"
                description="Most locations are up and running within 48-72 hours. We handle permits, setup, and staff training."
              />
              <ServiceCard
                icon={Banknote}
                title="Cash Loading"
                description="We manage all cash replenishment on a regular schedule. You never worry about running out of funds."
              />
              <ServiceCard
                icon={Wrench}
                title="24/7 Technical Support"
                description="Ontario-based support team available around the clock. Fast response times with local technicians."
              />
              <ServiceCard
                icon={Shield}
                title="Full Maintenance"
                description="All repairs, software updates, and hardware maintenance included at no additional cost."
              />
              <ServiceCard
                icon={TrendingUp}
                title="Revenue Sharing"
                description="Earn 50% of surcharge revenue. Passive income with zero effort required from you."
              />
              <ServiceCard
                icon={Clock}
                title="Monthly Reporting"
                description="Detailed transaction reports and earnings statements delivered monthly."
              />
            </div>
          </div>
        </section>

        {/* Program Options */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Choose Your Program"
              title="Flexible Placement Options"
              description="We offer programs to fit every business need and location type."
              centered
            />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Free Placement */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue">
                <div className="bg-blue text-black px-4 py-2 rounded-lg inline-block text-sm font-bold uppercase mb-4">
                  Most Popular
                </div>
                <h3 className="text-black font-heading text-3xl uppercase mb-4">
                  Free Placement
                </h3>
                <p className="text-gray text-base mb-6">
                  Best for high-traffic locations. We own and operate the machine — you earn passive income.
                </p>
                <ul className="space-y-3 text-gray text-sm mb-8">
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Zero upfront cost
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    We handle all maintenance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    We load the cash
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    50% revenue share
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    24/7 support included
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center bg-blue text-black px-6 py-3 rounded-lg font-bold uppercase text-sm hover:bg-gold hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* ATM Rental */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-black font-heading text-3xl uppercase mb-4 mt-10">
                  ATM Rental
                </h3>
                <p className="text-gray text-base mb-6">
                  Rent the machine, keep 100% of surcharge revenue. Great for seasonal locations.
                </p>
                <ul className="space-y-3 text-gray text-sm mb-8">
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Low monthly rental fee
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Keep 100% of revenue
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Maintenance included
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    You load the cash
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Flexible terms
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Purchase */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-black font-heading text-3xl uppercase mb-4 mt-10">
                  ATM Purchase
                </h3>
                <p className="text-gray text-base mb-6">
                  Own the machine outright. Maximum control and long-term profitability.
                </p>
                <ul className="space-y-3 text-gray text-sm mb-8">
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    One-time purchase
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Keep 100% of revenue
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Full ownership
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Support packages available
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-2">✓</span>
                    Best long-term ROI
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Calculator */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Estimate Your Earnings"
              title="Calculate Your Revenue"
              description="See how much passive income your business could generate with a SecurX ATM."
              centered
            />

            <div className="mt-12">
              <RevenueCalculator />
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The SecurX Difference"
              title="With vs. Without an ATM"
              centered
            />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Without ATM */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-black font-heading text-2xl uppercase mb-6 text-center">
                  Without an ATM
                </h3>
                <ul className="space-y-4 text-gray">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Customers leave to find cash</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Lost sales to competitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>High credit card processing fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>No additional revenue streams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Shorter customer visits</span>
                  </li>
                </ul>
              </div>

              {/* With ATM */}
              <div className="bg-blue/5 p-8 rounded-lg shadow-lg border-2 border-blue">
                <h3 className="text-black font-heading text-2xl uppercase mb-6 text-center">
                  With a SecurX ATM
                </h3>
                <ul className="space-y-4 text-gray">
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Customers stay and spend more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Increased foot traffic and sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Reduced credit card fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Earn passive income monthly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Customers linger longer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Boost Your Revenue?"
          description="Get your free ATM installed in 48-72 hours. Zero upfront cost, zero hassle."
        />
      </main>
      <Footer />
    </>
  );
}
