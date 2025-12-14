"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryLinks = [
    {
      name: "Skincare",
      href: "/skincare",
      sublinks: [
        { name: "Cleansers", href: "/skincare/cleansers" },
        { name: "Moisturizers", href: "/skincare/moisturizers" },
        { name: "Serums", href: "/skincare/serums" },
        { name: "Sunscreen", href: "/skincare/sunscreen" },
        { name: "Anti-Aging", href: "/skincare/anti-aging" },
      ],
    },
    {
      name: "Haircare",
      href: "/haircare",
      sublinks: [
        { name: "Shampoos", href: "/haircare/shampoos" },
        { name: "Conditioners", href: "/haircare/conditioners" },
        { name: "Hair Oils", href: "/haircare/oils" },
        { name: "Styling", href: "/haircare/styling" },
        { name: "Treatments", href: "/haircare/treatments" },
      ],
    },
    {
      name: "Makeup",
      href: "/makeup",
      sublinks: [
        { name: "Foundation", href: "/makeup/foundation" },
        { name: "Lipstick", href: "/makeup/lipstick" },
        { name: "Eyeshadow", href: "/makeup/eyeshadow" },
        { name: "Mascara", href: "/makeup/mascara" },
        { name: "Blush", href: "/makeup/blush" },
      ],
    },
    {
      name: "Fragrance",
      href: "/fragrance",
      sublinks: [
        { name: "Women's Perfume", href: "/fragrance/womens" },
        { name: "Men's Cologne", href: "/fragrance/mens" },
        { name: "Unisex", href: "/fragrance/unisex" },
        { name: "Body Sprays", href: "/fragrance/body-sprays" },
        { name: "Gift Sets", href: "/fragrance/gift-sets" },
      ],
    },
    {
      name: "Brands",
      href: "/brands",
      sublinks: [
        { name: "Premium Brands", href: "/brands/premium" },
        { name: "Natural & Organic", href: "/brands/natural" },
        { name: "K-Beauty", href: "/brands/k-beauty" },
        { name: "Local Brands", href: "/brands/local" },
        { name: "New Arrivals", href: "/brands/new" },
      ],
    },
    {
      name: "More",
      href: "/more",
      sublinks: [
        { name: "Gift Cards", href: "/gift-cards" },
        { name: "Beauty Tools", href: "/tools" },
        { name: "Travel Size", href: "/travel" },
        { name: "Sale", href: "/sale" },
        { name: "Blog", href: "/blog" },
      ],
    },
  ];

  return (
    <>
      {/* Top Navbar - Contact & Info (scrolls away) */}
      <div
        className={`fixed top-0 left-0 right-0 bg-gray-900 text-white py-2 text-sm z-50 transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-6">
              <span className="flex items-center">
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +254742927569
              </span>
              <span className="flex items-center">
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Free shipping on orders over KSh 5,000
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/faq"
                className="hover:text-gray-300 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 ml-6 border-l border-gray-600 pl-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle & Bottom Navbar - Fixed */}
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-lg"
            : "top-10 bg-white"
        }`}
      >
        {/* Middle Navbar - Logo, Search, Cart, Auth */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/laluzlogo.png"
                    alt="LaLuz Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto border border-rose-500 rounded-lg px-2 py-1"
                  />
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex flex-1 max-w-lg mx-4 md:mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 text-sm md:px-4 md:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Cart & Auth Buttons */}
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                <Link
                  href="/login"
                  className="hidden md:block px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="hidden md:block px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
                >
                  Sign Up
                </Link>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navbar - Category Links */}
        <div className="hidden md:block bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              {categoryLinks.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(category.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={category.href}
                    className="flex items-center text-gray-700 hover:text-rose-500 font-medium transition-colors duration-200 py-2"
                  >
                    {category.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === category.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                      activeDropdown === category.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <div className="py-2">
                      {category.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-rose-500 transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-200 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Categories */}
            {categoryLinks.map((category) => (
              <div
                key={category.name}
                className="border-b border-gray-100 pb-2"
              >
                <Link
                  href={category.href}
                  className="block font-medium text-gray-900 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
                <div className="ml-4 space-y-1">
                  {category.sublinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className="block text-sm text-gray-600 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex space-x-4 pt-4">
              <Link
                href="/login"
                className="flex-1 text-center py-2 border border-gray-300 rounded-full"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex-1 text-center py-2 bg-rose-500 text-white rounded-full"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
