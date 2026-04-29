import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function CTABanner({
  title = "Ready to Add an ATM to Your Business?",
  description = "Get started today with zero upfront costs. Fast installation and 24/7 support included.",
  primaryCTA = { text: "Get a Free ATM", href: "/contact" },
  secondaryCTA = { text: "Calculate Your Revenue", href: "/services#calculator" },
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white font-heading text-4xl lg:text-5xl uppercase mb-4">
          {title}
        </h2>
        <p className="text-gray text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="bg-green text-black px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-gold hover:text-white transition-colors w-full sm:w-auto"
          >
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold uppercase text-base hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
