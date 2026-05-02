import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StatsCounter from "@/components/StatsCounter";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Client Testimonials | SecurX Financial",
  description: "See what business owners across Ontario say about SecurX Financial's ATM placement services.",
};

export default function TestimonialsPage() {
  const stats = [
    { value: 150, label: "ATMs Installed", suffix: "+" },
    { value: 8, label: "Years in Business", suffix: "+" },
    { value: 7, label: "Cities Served" },
    { value: 95, label: "Client Satisfaction", suffix: "%" },
  ];

  const testimonials = [
    {
      quote:
        "The ATM has been a great addition to our bar. Customers love the convenience, and we earn extra income every month without any effort on our part.",
      author: "Mike T.",
      business: "Bar Owner",
      location: "London, ON",
    },
    {
      quote:
        "Fast service, professional installation. The support team is always available when we need them. Best decision we made for our convenience store.",
      author: "Sarah K.",
      business: "Convenience Store",
      location: "Kitchener, ON",
    },
    {
      quote:
        "Zero upfront cost was the selling point for us. The machine pays for itself and then some. Our customers appreciate having cash available.",
      author: "John P.",
      business: "Restaurant Owner",
      location: "Woodstock, ON",
    },
    {
      quote:
        "SecurX handles everything — installation, cash loading, maintenance. We just collect the revenue check every month. It's passive income at its best.",
      author: "Lisa M.",
      business: "Cannabis Dispensary",
      location: "Hamilton, ON",
    },
    {
      quote:
        "Our gas station sees a lot of traffic, and the ATM gets used constantly. The revenue sharing model is fair and the support is top-notch.",
      author: "David R.",
      business: "Gas Station Owner",
      location: "Cambridge, ON",
    },
    {
      quote:
        "We were hesitant at first, but the free placement program made it a no-brainer. Now we wonder why we didn't do this sooner.",
      author: "Karen W.",
      business: "Event Venue",
      location: "Brantford, ON",
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
              Client Success Stories
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Testimonials
            </h1>
            <p className="text-gray text-xl">
              Trusted by businesses across Southwestern Ontario.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-light-bg py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsCounter stats={stats} />
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Real Stories"
              title="What Our Clients Say"
              description="Hear from business owners who've added ATMs to their locations."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-light-bg p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue text-5xl mb-4">"</div>
                  <p className="text-gray text-base leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-black font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-blue text-sm font-semibold">
                      {testimonial.business}
                    </p>
                    <p className="text-gray text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Placeholder */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Installations"
              title="ATMs in Action"
              description="See our ATMs installed at locations across Ontario."
              centered
            />

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">Photo {index + 1}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray text-sm mt-8">
              Installation photos coming soon
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Join Our Happy Clients"
          description="Experience the same success with zero upfront cost. Get your free ATM today."
        />
      </main>
      <Footer />
    </>
  );
}
