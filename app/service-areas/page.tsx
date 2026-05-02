import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Service Areas - Southwestern Ontario | SecurX Financial",
  description: "SecurX Financial provides ATM placement services across Southwestern Ontario including London, Kitchener, Hamilton, and surrounding cities.",
};

export default function ServiceAreasPage() {
  const serviceAreas = [
    {
      city: "London",
      region: "Middlesex County",
      description: "Primary service hub with fastest response times.",
      businesses: "50+",
    },
    {
      city: "Woodstock",
      region: "Oxford County",
      description: "Serving local businesses with dedicated support.",
      businesses: "25+",
    },
    {
      city: "Brantford",
      region: "Brant County",
      description: "Comprehensive ATM solutions for the Greater Brantford area.",
      businesses: "30+",
    },
    {
      city: "Kitchener",
      region: "Waterloo Region",
      description: "Supporting the thriving business community in Kitchener-Waterloo.",
      businesses: "40+",
    },
    {
      city: "Hamilton",
      region: "Hamilton-Wentworth",
      description: "Full-service ATM placement across Hamilton and surrounding areas.",
      businesses: "35+",
    },
    {
      city: "Cambridge",
      region: "Waterloo Region",
      description: "Reliable ATM services for Cambridge businesses.",
      businesses: "20+",
    },
    {
      city: "Guelph",
      region: "Wellington County",
      description: "Fast installation and support for Guelph-area locations.",
      businesses: "18+",
    },
    {
      city: "St. Thomas",
      region: "Elgin County",
      description: "Expanding service to St. Thomas and Elgin County.",
      businesses: "12+",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue text-sm font-bold uppercase tracking-wider mb-4">
              Where We Serve
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Southwestern Ontario Coverage
            </h1>
            <p className="text-gray text-xl">
              Fast, local support across the region. Your dedicated ATM partner in Ontario.
            </p>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Coverage"
              title="Cities We Serve"
              description="Local presence, local support. We're proud to serve businesses across Southwestern Ontario."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area) => (
                <div
                  key={area.city}
                  className="bg-light-bg p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue/10 p-2 rounded-lg">
                      <MapPin className="text-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black font-heading text-2xl uppercase">
                        {area.city}
                      </h3>
                      <p className="text-gray text-sm">{area.region}</p>
                    </div>
                  </div>

                  <p className="text-gray text-base leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="pt-4 border-t border-gray-300">
                    <p className="text-blue text-2xl font-heading">
                      {area.businesses}
                    </p>
                    <p className="text-gray text-sm">Businesses Served</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Local Advantage"
              title="Why Local Service Matters"
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6 text-black">
                  1
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  Fast Response
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Local technicians mean faster service. Most issues resolved same-day or next-day.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6 text-black">
                  2
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  Regional Expertise
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  We understand Southwestern Ontario businesses. Local knowledge, tailored solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6 text-black">
                  3
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  Community Focus
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  We're invested in the communities we serve. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Coverage Map"
              title="Our Service Territory"
              centered
            />

            <div className="mt-12 bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin size={64} className="mx-auto mb-4" />
                <p className="text-lg">Interactive Ontario map coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expanding */}
        <section className="bg-light-bg py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-black font-heading text-3xl uppercase mb-4">
              Don't See Your City?
            </h2>
            <p className="text-gray text-lg mb-8">
              We're always expanding our service area. Contact us to discuss ATM placement in your
              location — we may already serve your area or be planning to expand there soon.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Add an ATM?"
          description="Fast local service across Southwestern Ontario. Get started today."
        />
      </main>
      <Footer />
    </>
  );
}
