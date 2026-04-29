import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | SecurX Financial",
  description: "SecurX Financial privacy policy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-black py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white font-heading text-5xl lg:text-6xl uppercase mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <div className="space-y-8 text-gray">
              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Introduction
                </h2>
                <p>
                  SecurX Financial Inc. ("we," "us," or "our") respects your privacy and is
                  committed to protecting your personal information. This Privacy Policy explains
                  how we collect, use, and safeguard your information when you visit our website or
                  use our services.
                </p>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Information We Collect
                </h2>
                <p>
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Business name and type</li>
                  <li>Messages and inquiries you submit through our forms</li>
                  <li>Location information when you request service</li>
                </ul>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process ATM placement requests</li>
                  <li>Send you service updates and communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our business operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Your Rights
                </h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Cookies
                </h2>
                <p>
                  Our website may use cookies to enhance your browsing experience. You can control
                  cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please
                  contact us:
                </p>
                <p className="mt-4">
                  <strong>SecurX Financial Inc.</strong>
                  <br />
                  Email:{" "}
                  <a href="mailto:securxf@gmail.com" className="text-green hover:text-gold">
                    securxf@gmail.com
                  </a>
                  <br />
                  Phone: 519-281-9923
                </p>
              </div>

              <div>
                <h2 className="text-black font-heading text-2xl uppercase mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page with an updated "Last
                  updated" date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
