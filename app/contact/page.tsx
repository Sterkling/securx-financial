import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | SecurX Financial",
  description: "Get in touch with SecurX Financial for free ATM placement. Call 519-281-9923 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-green text-sm font-bold uppercase tracking-wider mb-4">
              Get In Touch
            </p>
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-6">
              Contact Us
            </h1>
            <p className="text-gray text-xl">
              Ready to add an ATM to your business? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <SectionHeading
                  eyebrow="Request Info"
                  title="Get a Free ATM"
                  description="Fill out the form below and we'll contact you within 24 hours to discuss your ATM placement."
                />

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <SectionHeading
                  eyebrow="Direct Contact"
                  title="Reach Out Anytime"
                  description="Prefer to call or email? We're available to answer your questions."
                />

                <div className="mt-8 space-y-8">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green/10 p-3 rounded-lg">
                      <Phone className="text-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold text-lg mb-2">
                        Call Us
                      </h3>
                      <a
                        href="tel:+15192819923"
                        className="text-gray hover:text-green transition-colors block text-lg"
                      >
                        Demetri: 519-281-9923
                      </a>
                      <a
                        href="tel:+15195358309"
                        className="text-gray hover:text-green transition-colors block text-lg"
                      >
                        Eleas: 519-535-8309
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green/10 p-3 rounded-lg">
                      <Mail className="text-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold text-lg mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:securxf@gmail.com"
                        className="text-gray hover:text-green transition-colors text-lg"
                      >
                        securxf@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green/10 p-3 rounded-lg">
                      <MapPin className="text-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold text-lg mb-2">
                        Service Area
                      </h3>
                      <p className="text-gray text-lg">London, ON</p>
                      <p className="text-gray text-base mt-1">
                        Serving Southwestern Ontario
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green/10 p-3 rounded-lg">
                      <Clock className="text-green" size={24} />
                    </div>
                    <div>
                      <h3 className="text-black font-semibold text-lg mb-2">
                        Support Hours
                      </h3>
                      <p className="text-gray text-lg">24/7 Technical Support</p>
                      <p className="text-gray text-base mt-1">
                        Sales: Mon-Fri 9am-6pm
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 bg-gray-200 rounded-lg overflow-hidden h-64">
                  {/* Google Maps embed would go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p>Map coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Preview */}
        <section className="bg-light-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-black font-heading text-3xl uppercase mb-6">
              We Serve Southwestern Ontario
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-gray text-lg">
              <span>London</span>
              <span>•</span>
              <span>Woodstock</span>
              <span>•</span>
              <span>Brantford</span>
              <span>•</span>
              <span>Kitchener</span>
              <span>•</span>
              <span>Hamilton</span>
              <span>•</span>
              <span>Cambridge</span>
              <span>•</span>
              <span>Guelph</span>
            </div>
            <div className="mt-6">
              <a
                href="/service-areas"
                className="text-green hover:text-gold font-semibold transition-colors"
              >
                View All Service Areas →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
