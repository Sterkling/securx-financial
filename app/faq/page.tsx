import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "FAQ - Common Questions | SecurX Financial",
  description: "Answers to common questions about ATM placement, costs, revenue, and maintenance for your business.",
};

export default function FAQPage() {
  const gettingStartedFAQs = [
    {
      question: "How much does it cost to get an ATM for my business?",
      answer: "With our Free Placement program, there is zero upfront cost. We install, maintain, and service the ATM at no charge to you. You simply provide the space and electrical outlet, and we handle everything else.",
    },
    {
      question: "How long does installation take?",
      answer: "Most installations are completed within 48-72 hours from approval. We handle all permits, setup, and staff training to ensure a smooth launch.",
    },
    {
      question: "What type of businesses benefit from an ATM?",
      answer: "Any cash-friendly business benefits — bars, restaurants, convenience stores, gas stations, cannabis dispensaries, event venues, bowling alleys, and more. High foot traffic locations see the best results.",
    },
    {
      question: "Do I need a phone line or internet connection?",
      answer: "Yes, the ATM requires either a dedicated phone line or an internet connection. We can discuss the best option for your location during setup.",
    },
  ];

  const costsFAQs = [
    {
      question: "How much revenue can I expect?",
      answer: "Revenue varies by location and foot traffic. On average, our clients earn $300-$800 per month. High-traffic locations like bars and dispensaries often exceed $1,000/month. Use our Revenue Calculator on the Services page for a custom estimate.",
    },
    {
      question: "How does revenue sharing work?",
      answer: "With our Free Placement program, you earn 50% of the ATM surcharge revenue. For example, if the surcharge is $3.00 per transaction, you earn $1.50 per transaction. Payments are made monthly.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No. With Free Placement, there are no installation fees, no maintenance fees, and no repair costs. We cover everything. You simply earn your share of the surcharge revenue.",
    },
    {
      question: "Can I set the surcharge amount?",
      answer: "Surcharge amounts are set based on location type and market rates to maximize usage. We work with you to find the optimal balance between customer satisfaction and revenue.",
    },
  ];

  const maintenanceFAQs = [
    {
      question: "Who loads the cash into the ATM?",
      answer: "We handle all cash loading on a regular schedule based on transaction volume. You never need to worry about replenishing funds — that's our responsibility.",
    },
    {
      question: "What happens if the ATM breaks down?",
      answer: "We provide 24/7 technical support with fast response times. If there's an issue, our local technicians will repair or replace the machine quickly to minimize downtime.",
    },
    {
      question: "Do I need to do anything to maintain the ATM?",
      answer: "No. We handle all maintenance, software updates, receipt paper, and repairs. Your only responsibility is to provide the space and keep the area accessible.",
    },
    {
      question: "How often will someone come to service the machine?",
      answer: "Cash loading frequency depends on transaction volume — typically weekly or bi-weekly. Routine maintenance and software updates are performed remotely or during scheduled visits.",
    },
  ];

  const programFAQs = [
    {
      question: "What's the difference between Free Placement and Rental?",
      answer: "Free Placement: We own the machine, you earn 50% of revenue with zero cost. Rental: You rent the machine for a monthly fee, keep 100% of revenue, and handle cash loading yourself. Purchase: You buy the machine outright and keep all revenue.",
    },
    {
      question: "Can I switch programs later?",
      answer: "Yes, we offer flexible terms. If your needs change, we can discuss transitioning to a different program that better suits your business.",
    },
    {
      question: "What if I want to remove the ATM?",
      answer: "You can request removal at any time with reasonable notice (typically 30 days). There are no penalties or termination fees for Free Placement.",
    },
    {
      question: "Do you offer seasonal ATM placement?",
      answer: "Yes, we can provide temporary ATM placement for events, festivals, or seasonal businesses. Contact us to discuss short-term rental options.",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-green text-sm font-bold uppercase tracking-wider mb-4">
              Frequently Asked Questions
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Have Questions?
            </h1>
            <p className="text-gray text-xl">
              Find answers to common questions about our ATM placement services.
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Basics"
              title="Getting Started"
              centered
            />
            <div className="mt-12">
              <FAQAccordion items={gettingStartedFAQs} />
            </div>
          </div>
        </section>

        {/* Costs & Revenue */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Money Matters"
              title="Costs & Revenue"
              centered
            />
            <div className="mt-12">
              <FAQAccordion items={costsFAQs} />
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Service & Support"
              title="Maintenance"
              centered
            />
            <div className="mt-12">
              <FAQAccordion items={maintenanceFAQs} />
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Flexibility"
              title="Programs & Options"
              centered
            />
            <div className="mt-12">
              <FAQAccordion items={programFAQs} />
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-black font-heading text-3xl uppercase mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray text-lg mb-8">
              We're here to help. Contact us directly and we'll get you answers fast.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15192819923"
                className="bg-green text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors"
              >
                Call 519-281-9923
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-black hover:text-white transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          title="Ready to Get Started?"
          description="Join hundreds of businesses earning passive income with zero upfront cost."
        />
      </main>
      <Footer />
    </>
  );
}
