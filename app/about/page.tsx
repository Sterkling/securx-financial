import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { Phone, Mail } from "lucide-react";

export const metadata = {
  title: "About Us | SecurX Financial",
  description: "Learn about SecurX Financial - your trusted ATM placement partner serving Southwestern Ontario since 2016.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-green text-sm font-bold uppercase tracking-wider mb-4">
              About SecurX Financial
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Your Trusted ATM Partner
            </h1>
            <p className="text-gray text-xl">
              Serving businesses across Southwestern Ontario with reliable ATM solutions since 2016.
            </p>
          </div>
        </section>

        {/* Mission & Story */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Mission"
              title="Fast, Reliable ATM Solutions"
              centered
            />

            <div className="mt-12 space-y-6 text-gray text-lg leading-relaxed">
              <p>
                At SecurX Financial, our mission is simple: provide fast, reliable ATM solutions that help businesses earn more while giving customers easy access to cash.
              </p>
              <p>
                We focus on three core principles: exceptional service, uncompromising security, and long-term partnerships with our clients.
              </p>
              <p>
                Whether you operate a bar, restaurant, convenience store, or any cash-friendly business, we make it easy to add an ATM with zero upfront cost. We handle everything — installation, cash loading, maintenance, and support — so you can focus on running your business.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What We Stand For"
              title="Our Values"
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Service */}
              <div className="text-center">
                <div className="bg-green w-20 h-20 rounded-full flex items-center justify-center text-4xl font-heading mx-auto mb-6 text-black">
                  S
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-4">
                  Service
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  24/7 Ontario-based support. Fast response times. We're here when you need us, every single time.
                </p>
              </div>

              {/* Security */}
              <div className="text-center">
                <div className="bg-green w-20 h-20 rounded-full flex items-center justify-center text-4xl font-heading mx-auto mb-6 text-black">
                  S
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-4">
                  Security
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Secure machines, reliable cash management, and full compliance. Your peace of mind is our priority.
                </p>
              </div>

              {/* Partnership */}
              <div className="text-center">
                <div className="bg-green w-20 h-20 rounded-full flex items-center justify-center text-4xl font-heading mx-auto mb-6 text-black">
                  P
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-4">
                  Partnership
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  We build long-term relationships. Your success is our success. We're in this together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Meet the Team"
              title="Leadership"
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Demetri */}
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for team photo */}
                  <span className="text-gray-400 text-6xl font-heading">D</span>
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-2">
                  Demetri
                </h3>
                <p className="text-green text-sm font-semibold uppercase tracking-wide mb-4">
                  Co-Founder
                </p>
                <p className="text-gray text-base mb-4">
                  Leading SecurX's operations and client relationships across Southwestern Ontario.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <a href="tel:+15192819923" className="flex items-center space-x-2 text-green hover:text-gold transition-colors">
                    <Phone size={16} />
                    <span>519-281-9923</span>
                  </a>
                </div>
              </div>

              {/* Eleas */}
              <div className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for team photo */}
                  <span className="text-gray-400 text-6xl font-heading">E</span>
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-2">
                  Eleas
                </h3>
                <p className="text-green text-sm font-semibold uppercase tracking-wide mb-4">
                  Co-Founder
                </p>
                <p className="text-gray text-base mb-4">
                  Managing technical operations, installations, and support services for all SecurX locations.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <a href="tel:+15195358309" className="flex items-center space-x-2 text-green hover:text-gold transition-colors">
                    <Phone size={16} />
                    <span>519-535-8309</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="mailto:securxf@gmail.com"
                className="inline-flex items-center space-x-2 text-green hover:text-gold transition-colors"
              >
                <Mail size={20} />
                <span className="text-lg font-semibold">securxf@gmail.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Where We Serve"
              title="Southwestern Ontario Coverage"
              description="We proudly serve businesses across the region with fast, local support."
              centered
            />

            <div className="mt-12 text-center">
              <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-6 text-gray text-lg">
                <div>London</div>
                <div>Woodstock</div>
                <div>Brantford</div>
                <div>Kitchener</div>
                <div>Hamilton</div>
                <div>Cambridge</div>
                <div>Guelph</div>
                <div>And more...</div>
              </div>
              <div className="mt-8">
                <a
                  href="/service-areas"
                  className="text-green hover:text-gold font-semibold transition-colors"
                >
                  View All Service Areas →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Partner with SecurX?"
          description="Join hundreds of businesses earning passive income with our free ATM placement program."
        />
      </main>
      <Footer />
    </>
  );
}
