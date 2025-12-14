"use client";

import Link from "next/link";
import Image from "next/image";

export default function Collections() {
  const collections = [
    {
      id: 1,
      name: "Skincare",
      description:
        "Nourish and protect your skin with our premium skincare collection featuring cleansers, moisturizers, and anti-aging treatments.",
      image: "/collections/skincare.jpg",
      href: "/skincare",
      shopLink: "/skincare",
      inquiryLink: "/inquiry?category=skincare",
    },
    {
      id: 2,
      name: "Haircare",
      description:
        "Transform your hair with our luxurious haircare range including shampoos, conditioners, oils, and styling products.",
      image: "/collections/haircare.jpg",
      href: "/haircare",
      shopLink: "/haircare",
      inquiryLink: "/inquiry?category=haircare",
    },
    {
      id: 3,
      name: "Makeup",
      description:
        "Express your beauty with our curated makeup collection featuring foundations, lipsticks, eyeshadows, and more.",
      image: "/collections/makeup.jpg",
      href: "/makeup",
      shopLink: "/makeup",
      inquiryLink: "/inquiry?category=makeup",
    },
    {
      id: 4,
      name: "Fragrance",
      description:
        "Discover your signature scent with our exquisite collection of perfumes, colognes, and body sprays.",
      image: "/collections/fragrance.jpg",
      href: "/fragrance",
      shopLink: "/fragrance",
      inquiryLink: "/inquiry?category=fragrance",
    },
    {
      id: 5,
      name: "Brands",
      description:
        "Explore premium beauty brands from around the world, featuring both international favorites and local treasures.",
      image: "/collections/brands.jpg",
      href: "/brands",
      shopLink: "/brands",
      inquiryLink: "/inquiry?category=brands",
    },
    {
      id: 6,
      name: "More",
      description:
        "Discover beauty tools, gift sets, travel-size products, and exclusive deals in our special collections.",
      image: "/collections/more.jpg",
      href: "/more",
      shopLink: "/more",
      inquiryLink: "/inquiry?category=more",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated beauty collections designed to
            enhance your natural radiance
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {collection.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {collection.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={collection.shopLink}
                    className="flex-1 bg-rose-500 hover:bg-rose-600 text-white text-center py-3 px-4 rounded-full font-medium transition-colors duration-200 hover:shadow-md"
                  >
                    Shop Now
                  </Link>
                  <Link
                    href={collection.inquiryLink}
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-center py-3 px-4 rounded-full font-medium transition-colors duration-200 hover:bg-gray-50"
                  >
                    Make Inquiry
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 hover:shadow-lg"
          >
            Contact Our Beauty Experts
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
