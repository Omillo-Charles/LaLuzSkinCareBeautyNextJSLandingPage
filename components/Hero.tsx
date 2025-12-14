"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleServicesClick = () => {
    // Placeholder for modal logic or smooth scroll fallback
    const announcement = document.getElementById("a11y-announcer");
    if (announcement) {
      announcement.textContent = "Navigating to services section";
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden hero-min-h flex flex-col md:flex-row items-center justify-center bg-[var(--hero-gradient)] pt-32 md:pt-40"
      aria-label="Hero Section"
      data-testid="hero"
    >
      {/* Decorative Background Elements (Simple gradients/shapes) */}
      <div className="absolute top-0 right-0 -z-10 w-3/4 h-3/4 bg-gradient-to-br from-purple-100/30 to-rose-50/30 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-2/3 h-2/3 bg-gradient-to-tr from-amber-50/40 to-white/40 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      {/* Visually Hidden Announcer for interactions */}
      <div
        id="a11y-announcer"
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      ></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10 w-full h-full">
        {/* Left Column: Text */}
        <div
          className={`w-full md:w-1/2 flex flex-col items-start space-y-6 md:space-y-8 text-center md:text-left transition-all duration-1000 ease-out ${
            mounted
              ? "opacity-100 translate-y-0 motion-safe:animate-fade-up"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.15]"
            data-testid="hero-heading"
          >
            LaLuz — Radiant Skin,{" "}
            <span className="text-gray-900 font-normal">Naturally.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-700 max-w-lg font-light leading-relaxed"
            data-testid="hero-sub"
          >
            Luxury skincare treatments & curated products in Nairobi —
            personalized, professional, and gentle on every skin.
          </p>

          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
            {[
              "Personalized consultations",
              "Clinically-trusted treatments",
              "Natural, nourishing products",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="mr-2 text-rose-400">●</span> {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
            <a
              href="#book"
              className="w-full sm:w-auto px-8 py-3.5 bg-rose-500 text-white rounded-full font-medium shadow-md hover:bg-rose-600 hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 text-center"
              data-testid="hero-cta-book"
            >
              Book Now
            </a>
            <a
              href="#services"
              onClick={handleServicesClick}
              className="w-full sm:w-auto px-8 py-3.5 border border-gray-900/10 text-gray-800 rounded-full font-medium hover:bg-white/50 hover:border-gray-900/30 transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-center"
              data-testid="hero-cta-services"
            >
              View Services
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center md:justify-start opacity-90">
            <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Trusted by Nairobi clients • 5⭐ service
            </span>
          </div>
        </div>

        {/* Right Column: Decorative Panel (SVG Illustration) */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end relative">
          <div
            className={`relative w-full max-w-md aspect-[4/5] md:aspect-square flex items-center justify-center transition-all duration-1000 delay-200 ease-out ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Glass Panel Background */}
            <div className="absolute inset-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2rem] shadow-2xl rotate-3" />

            {/* Decorative SVG Illustration */}
            <svg
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 w-full h-full p-8"
              aria-hidden="true"
            >
              {/* Organic Shape 1 */}
              <path
                d="M428.5 220.5C445 285 410.5 365 348 409C285.5 453 195 461 129.5 417C64 373 23.5 277 48.5 204C73.5 131 164 81 235 72C306 63 412 156 428.5 220.5Z"
                fill="url(#paint0_linear)"
                className="animate-[pulse_8s_ease-in-out_infinite]"
              />
              {/* Organic Shape 2 */}
              <path
                d="M380 150C410 200 390 280 340 330C290 380 200 370 150 320C100 270 90 180 130 120C170 60 350 100 380 150Z"
                fill="url(#paint1_linear)"
                className="opacity-80 mix-blend-multiply animate-[pulse_10s_ease-in-out_infinite_reverse]"
              />

              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="70"
                  y1="70"
                  x2="430"
                  y2="430"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FDE68A" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#F43F5E" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="100"
                  y1="100"
                  x2="350"
                  y2="350"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F9A8D4" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#E11D48" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
