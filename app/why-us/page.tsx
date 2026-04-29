import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { Shield, Clock, DollarSign, Zap, Wrench, Users } from "lucide-react";

export const metadata = {
  title: "Why Choose SecurX Financial | Free ATM Placement Ontario",
  description: "Choose SecurX for zero-cost ATM placement, 24/7 support, and reliable revenue. Local service across Southwestern Ontario.",
};

export default function WhyUsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-green text-sm font-bold uppercase tracking-wider mb-4">
              The SecurX Difference
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Why Businesses Choose Us
            </h1>
            <p className="text-gray text-xl">
              More than just an ATM provider — a long-term partner in your business success.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Advantages"
              title="What Sets Us Apart"
              description="Real benefits that make a difference for your business."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Zero Cost */}
              <div className="bg-light-bg p-8 rounded-lg shadow-lg">
                <div className="bg-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign size={32} className="text-green" />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Zero Upfront Cost
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  No installation fees, no equipment costs, no maintenance charges. We cover
                  everything. You start earning immediately.
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-light-bg p-8 rounded-lg shadow-lg">
                <div className="bg-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Clock size={32} className="text-green" />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  24/7 Ontario Support
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Local, Ontario-based technical support available around the clock. Fast response
                  times with technicians who understand your region.
                </p>
              </div>

              {/* Fast Installation */}
              <div className="bg-light-bg p-8 rounded-lg shadow-lg">
                <div className="bg-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={32} className="text-green" />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  48-72 Hour Install
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Most locations are live within 48-72 hours. We handle permits, setup, and
                  training. No delays, no hassle.
                </p>
              </div>

              {/* Full Maintenance */}
              <div className="bg-light-bg p-8 rounded-lg shadow-lg">
                <div className="bg-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Wrench size={32} className="text-green" />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Complete Maintenance
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  All repairs, software updates, and hardware maintenance included. Cash loading on
                  schedule. You never lift a finger.
                </p>
              </div>

              {/* Fair Revenue */}
              <div className="bg-light-bg p-8 rounded-lg shadow-lg">
                <div className="bg-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Shield size={32} className="text-green" />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Fair Revenue Share
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  50% of surcharge revenue goes to you. Transparent reporting. Monthly payments you
                  can count on.
                </p>
              </div>

              {/* Partnership */}
              <div className="bg-light-bg p-8 rounded-lg shadow-lg">
                <div className="bg-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Users size={32} className="text-green" />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Long-Term Partnership
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  We're invested in your success. Personal service, not corporate bureaucracy.
                  Local team that knows your name.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Compare"
              title="SecurX vs. Typical ATM Companies"
              centered
            />

            <div className="mt-16 overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-black">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-heading text-lg uppercase">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-green font-heading text-lg uppercase">
                      SecurX
                    </th>
                    <th className="px-6 py-4 text-center text-gray font-heading text-lg uppercase">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-black font-semibold">Upfront Cost</td>
                    <td className="px-6 py-4 text-center text-green font-bold">$0</td>
                    <td className="px-6 py-4 text-center text-gray">$500-$2,000</td>
                  </tr>
                  <tr className="bg-light-bg">
                    <td className="px-6 py-4 text-black font-semibold">Installation Time</td>
                    <td className="px-6 py-4 text-center text-green font-bold">48-72 hours</td>
                    <td className="px-6 py-4 text-center text-gray">1-2 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-black font-semibold">Support Hours</td>
                    <td className="px-6 py-4 text-center text-green font-bold">24/7 Local</td>
                    <td className="px-6 py-4 text-center text-gray">Business Hours Only</td>
                  </tr>
                  <tr className="bg-light-bg">
                    <td className="px-6 py-4 text-black font-semibold">Cash Loading</td>
                    <td className="px-6 py-4 text-center text-green font-bold">We Handle It</td>
                    <td className="px-6 py-4 text-center text-gray">You Handle It</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-black font-semibold">Maintenance Fees</td>
                    <td className="px-6 py-4 text-center text-green font-bold">Included</td>
                    <td className="px-6 py-4 text-center text-gray">$50-$100/month</td>
                  </tr>
                  <tr className="bg-light-bg">
                    <td className="px-6 py-4 text-black font-semibold">Revenue Share</td>
                    <td className="px-6 py-4 text-center text-green font-bold">50%</td>
                    <td className="px-6 py-4 text-center text-gray">30-40%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-black font-semibold">Contract Terms</td>
                    <td className="px-6 py-4 text-center text-green font-bold">Flexible</td>
                    <td className="px-6 py-4 text-center text-gray">2-3 Year Lock-in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              eyebrow="Track Record"
              title="Trusted Results"
              centered
            />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-heading text-green mb-2">150+</div>
                <div className="text-gray text-sm uppercase">ATMs Installed</div>
              </div>
              <div>
                <div className="text-5xl font-heading text-green mb-2">8+</div>
                <div className="text-gray text-sm uppercase">Years in Business</div>
              </div>
              <div>
                <div className="text-5xl font-heading text-green mb-2">7</div>
                <div className="text-gray text-sm uppercase">Cities Served</div>
              </div>
              <div>
                <div className="text-5xl font-heading text-green mb-2">95%</div>
                <div className="text-gray text-sm uppercase">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Experience the SecurX Difference"
          description="Join hundreds of businesses earning passive income with zero upfront cost."
        />
      </main>
      <Footer />
    </>
  );
}
