import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import RevenueCalculator from "@/components/RevenueCalculator";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "ATM Solutions for Bars & Nightclubs | SecurX Financial Ontario",
  description: "Free ATM placement for bars and nightclubs across Ontario. Increase revenue, reduce wait times, keep customers longer. 24/7 support.",
  keywords: "ATM for bars, nightclub ATM, bar ATM placement Ontario, free ATM bars",
};

export default function BarsATMPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue text-sm font-bold uppercase tracking-wider mb-4">
              ATMs for Bars & Nightclubs
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Keep Customers In Your Bar — Not At The Bank
            </h1>
            <p className="text-gray text-xl lg:text-2xl mb-8 max-w-3xl">
              Free ATM placement for Ontario bars and nightclubs. Increase drink sales, reduce wait
              times, and earn passive income — all with zero upfront cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-blue text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors text-center"
              >
                Get a Free ATM
              </a>
              <a
                href="#calculator"
                className="bg-transparent border-2 border-blue text-blue px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-blue hover:text-black transition-colors text-center"
              >
                Calculate Your Revenue
              </a>
            </div>
          </div>
        </section>

        {/* Why Bars Need ATMs */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Problem"
              title="Why Bars & Nightclubs Need ATMs"
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Without ATM */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-black font-heading text-2xl uppercase mb-6 text-center">
                  Without an ATM
                </h3>
                <ul className="space-y-4 text-gray">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Customers leave to find cash and never come back</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Lost drink sales every single night</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>High credit card processing fees (2-3% per transaction)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Slower bar service with card-only payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl">✗</span>
                    <span>Customers spend less when using cards</span>
                  </li>
                </ul>
              </div>

              {/* With ATM */}
              <div className="bg-blue/5 p-8 rounded-lg border-2 border-blue">
                <h3 className="text-black font-heading text-2xl uppercase mb-6 text-center">
                  With a SecurX ATM
                </h3>
                <ul className="space-y-4 text-gray">
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Customers stay and keep buying drinks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Increased revenue — cash customers spend more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Reduced credit card fees (save thousands annually)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Faster bar service with cash transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue mr-3 text-xl">✓</span>
                    <span>Earn passive ATM revenue (avg. $500-$1,200/month)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Bars */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Bar Benefits"
              title="Designed for High-Traffic Venues"
              description="Our ATMs are built for busy bar environments. Reliable, fast, and profitable."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue text-4xl font-heading mb-4">01</div>
                <h3 className="text-black font-heading text-xl uppercase mb-3">
                  Peak Hour Ready
                </h3>
                <p className="text-gray text-base">
                  High-capacity machines that handle busy Friday and Saturday nights without
                  downtime.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue text-4xl font-heading mb-4">02</div>
                <h3 className="text-black font-heading text-xl uppercase mb-3">
                  Zero Maintenance
                </h3>
                <p className="text-gray text-base">
                  We load the cash, fix any issues, and handle all maintenance. You never touch the
                  machine.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-blue text-4xl font-heading mb-4">03</div>
                <h3 className="text-black font-heading text-xl uppercase mb-3">
                  Late-Night Support
                </h3>
                <p className="text-gray text-base">
                  24/7 technical support for those rare times something goes wrong during peak
                  hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Calculator */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Estimate Your Earnings"
              title="How Much Can Your Bar Earn?"
              description="See your potential monthly revenue from ATM surcharges."
              centered
            />
            <div className="mt-12">
              <RevenueCalculator />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-light-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 lg:p-12 rounded-lg shadow-xl">
              <div className="text-blue text-6xl mb-4">"</div>
              <p className="text-gray text-xl lg:text-2xl leading-relaxed mb-8">
                The ATM has been a game-changer for our bar. Customers aren't leaving to find cash
                anymore, and we're earning an extra $800-$900 per month. Best part? We don't do
                anything — SecurX handles it all.
              </p>
              <div className="border-t border-gray-300 pt-6">
                <p className="text-black font-semibold text-xl">Mike T.</p>
                <p className="text-blue text-base font-semibold">Bar Owner, London</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Keep Customers In Your Bar?"
          description="Free installation. Zero upfront cost. Start earning in 48-72 hours."
        />
      </main>
      <Footer />
    </>
  );
}
