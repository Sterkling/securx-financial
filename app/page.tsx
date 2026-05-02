import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { Banknote, Clock, Wrench, TrendingUp } from "lucide-react";

export default function Home() {
  const stats = [
    { value: 150, label: "ATMs Installed", suffix: "+" },
    { value: 8, label: "Years in Business", suffix: "+" },
    { value: 7, label: "Cities Served" },
    { value: 500, label: "Avg Monthly Revenue", prefix: "$", suffix: "+" },
  ];

  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* Stats Section */}
        <section className="bg-light-bg py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsCounter stats={stats} />
          </div>
        </section>

        {/* Service Highlights */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What We Offer"
              title="Complete ATM Solutions"
              description="Everything you need to provide convenient cash access to your customers — with zero cost to you."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                icon={Banknote}
                title="Free Placement"
                description="We install and maintain the ATM at no cost to you. Start earning passive income immediately."
              />
              <ServiceCard
                icon={Clock}
                title="Cash Loading"
                description="We handle all cash replenishment. You never worry about running out of funds."
              />
              <ServiceCard
                icon={Wrench}
                title="24/7 Support"
                description="Ontario-based technical support available around the clock. Fast response times guaranteed."
              />
              <ServiceCard
                icon={TrendingUp}
                title="Revenue Sharing"
                description="Earn a percentage of every transaction. Additional income with zero effort required."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Simple Process"
              title="How It Works"
              description="Get your ATM installed in three easy steps."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  1
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-4">
                  Contact Us
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Call or fill out our form. We'll assess your location and discuss the best ATM solution for your business.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  2
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-4">
                  Fast Installation
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  We handle everything — installation, setup, and training. Most locations are live within 48-72 hours.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  3
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-4">
                  Start Earning
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Your ATM is now generating revenue. We maintain it, load the cash, and send you monthly earnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Preview Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Trusted by Businesses"
              title="What Our Clients Say"
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-light-bg p-8 rounded-lg">
                <div className="text-blue text-4xl mb-4">"</div>
                <p className="text-gray text-base mb-6">
                  The ATM has been a great addition to our bar. Customers love the convenience, and we earn extra income every month.
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-black font-semibold">Mike T.</p>
                  <p className="text-gray text-sm">Bar Owner, London</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-light-bg p-8 rounded-lg">
                <div className="text-blue text-4xl mb-4">"</div>
                <p className="text-gray text-base mb-6">
                  Fast service, professional installation. The support team is always available when we need them.
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-black font-semibold">Sarah K.</p>
                  <p className="text-gray text-sm">Convenience Store, Kitchener</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-light-bg p-8 rounded-lg">
                <div className="text-blue text-4xl mb-4">"</div>
                <p className="text-gray text-base mb-6">
                  Zero upfront cost was the selling point for us. The machine pays for itself and then some.
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-black font-semibold">John P.</p>
                  <p className="text-gray text-sm">Restaurant Owner, Woodstock</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
