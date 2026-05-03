import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import HomepageContactForm from "@/components/HomepageContactForm";
import Footer from "@/components/Footer";
import { 
  Banknote, 
  Clock, 
  Wrench, 
  TrendingUp,
  CheckCircle2,
  Users,
  DollarSign,
  Zap,
  Shield,
  Beer,
  Store,
  Fuel,
  UtensilsCrossed,
  Hotel,
  Calendar,
  ShoppingBag,
  Building,
  MapPin,
  Handshake,
  Award,
  Settings
} from "lucide-react";

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

        {/* Why Add an ATM to Your Business */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Benefits"
              title="Why Add an ATM to Your Business"
              description="Provide convenience to your customers while generating additional revenue."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue/10 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-black font-heading text-xl uppercase mb-2">
                    Convenient Cash Access
                  </h3>
                  <p className="text-gray text-base leading-relaxed">
                    Customers get convenient access to cash right where they need it.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue/10 p-3 rounded-lg flex-shrink-0">
                  <Users className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-black font-heading text-xl uppercase mb-2">
                    Keep Customers Inside
                  </h3>
                  <p className="text-gray text-base leading-relaxed">
                    Customers stay inside the business instead of leaving to find cash.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue/10 p-3 rounded-lg flex-shrink-0">
                  <DollarSign className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-black font-heading text-xl uppercase mb-2">
                    Extra Monthly Revenue
                  </h3>
                  <p className="text-gray text-base leading-relaxed">
                    The business may earn extra monthly revenue from ATM transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue/10 p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-black font-heading text-xl uppercase mb-2">
                    Increase Spending
                  </h3>
                  <p className="text-gray text-base leading-relaxed">
                    Cash access can help support more spending on site.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue/10 p-3 rounded-lg flex-shrink-0">
                  <Zap className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-black font-heading text-xl uppercase mb-2">
                    Zero Hassle
                  </h3>
                  <p className="text-gray text-base leading-relaxed">
                    SecurX handles the ATM work from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What SecurX Handles */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Full-Service Support"
              title="What SecurX Handles"
              description="We take care of everything so you can focus on running your business."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={Settings}
                title="ATM Installation"
                description="Professional setup and configuration at your location. We handle all technical requirements."
              />
              <ServiceCard
                icon={Banknote}
                title="Cash Loading"
                description="Regular cash replenishment on schedule. You never worry about running out of funds."
              />
              <ServiceCard
                icon={Wrench}
                title="Maintenance, Repairs & Upgrades"
                description="Complete maintenance and repair services. Equipment upgrades or replacements when needed. Always using current technology."
              />
              <ServiceCard
                icon={Clock}
                title="Receipt Paper"
                description="We supply and replace receipt paper as needed. One less thing to manage."
              />
              <ServiceCard
                icon={Shield}
                title="Technical Support"
                description="24/7 Ontario-based technical support available. Quick resolution when you need help."
              />
              <ServiceCard
                icon={Award}
                title="Monthly Reporting"
                description="Detailed transaction reports and earnings statements delivered monthly."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Simple Process"
              title="How It Works"
              description="Get your ATM installed in five easy steps."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  1
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  Tell Us About Your Business
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Share your business details and location with us.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  2
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  We Review the Location
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Our team assesses your site and determines the best ATM solution.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  3
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  We Install and Set Up
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Professional installation and complete setup at your location.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  4
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  We Load and Maintain
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Regular cash loading and ongoing maintenance handled by us.
                </p>
              </div>

              {/* Step 5 */}
              <div className="text-center">
                <div className="bg-blue text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-heading mx-auto mb-6">
                  5
                </div>
                <h3 className="text-black font-heading text-xl uppercase mb-4">
                  Start Earning Revenue
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Provide customer convenience and earn monthly revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Locations for Our ATMs */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Perfect For"
              title="Best Locations for Our ATMs"
              description="We serve a wide variety of businesses across Southwestern Ontario."
              centered
            />

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beer className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Bars & Nightclubs
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Convenience Stores
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fuel className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Gas Stations
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Restaurants
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hotel className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Hotels & Motels
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Event Venues
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Retail Stores
                </h3>
              </div>

              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-lg uppercase">
                  Private Clubs
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SecurX */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Promise"
              title="Why Choose SecurX"
              description="Local service, direct support, and long-term partnerships."
              centered
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-light-bg p-8 rounded-lg">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Local Company
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Southwestern Ontario based. We understand the local market and serve our community.
                </p>
              </div>

              <div className="bg-light-bg p-8 rounded-lg">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Direct Owner Involvement
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Work directly with the owners. Personal attention to your business needs.
                </p>
              </div>

              <div className="bg-light-bg p-8 rounded-lg">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Fast Response
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Quick response times for service and support. We're here when you need us.
                </p>
              </div>

              <div className="bg-light-bg p-8 rounded-lg">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Settings className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Flexible Programs
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Customized solutions to fit your specific business and location needs.
                </p>
              </div>

              <div className="bg-light-bg p-8 rounded-lg">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Full-Service Support
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  Complete ATM management from installation to maintenance. No corporate runaround.
                </p>
              </div>

              <div className="bg-light-bg p-8 rounded-lg">
                <div className="bg-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-blue" size={28} />
                </div>
                <h3 className="text-black font-heading text-2xl uppercase mb-3">
                  Long-Term Relationships
                </h3>
                <p className="text-gray text-base leading-relaxed">
                  We build lasting partnerships with our clients. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="bg-light-bg py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Trusted Partners"
              title="Our Clients"
              description="Proudly serving businesses across Southwestern Ontario."
              centered
            />

            <div className="mt-16">
              <div className="bg-white p-12 rounded-lg text-center">
                <Building className="text-blue mx-auto mb-6" size={64} />
                <p className="text-gray text-lg max-w-2xl mx-auto">
                  We partner with a diverse range of businesses to provide reliable ATM services. 
                  From bars and restaurants to retail stores and event venues, our clients trust us 
                  to deliver exceptional service and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Get Started Today"
              title="Get Your Free ATM"
              description="Fill out the form below and we'll contact you within 24 hours to discuss your ATM placement."
              centered
            />

            <div className="mt-12">
              <HomepageContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
