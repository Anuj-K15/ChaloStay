"use client";

import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Container from "./Container";
import Link from "next/link";
import Logo from "./navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col space-y-4">
            <div className="bg-white rounded-lg inline-block p-2 self-start">
              <Logo footer={true} />
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Discover your perfect getaway with ChaloStay. Beautiful vacation
              rentals for every type of traveler.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://instagram.com"
                className="text-white hover:text-rose-500/80 transition"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-white hover:text-rose-500/80 transition"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-white hover:text-rose-500/80 transition"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-white hover:text-rose-500/80 transition"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-rose-500/80 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/trips">My Trips</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/favorites">Favorites</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/properties">My Properties</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
              Support
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-rose-500/80 transition">
                <Link href="/help">Help Center</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/safety">Safety Information</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/cancellation">Cancellation Options</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/covid">COVID-19 Response</Link>
              </li>
              <li className="hover:text-rose-500/80 transition">
                <Link href="/support-disabled">Accessibility Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <MdLocationOn
                  size={20}
                  className="text-rose-500 mt-1 flex-shrink-0"
                />
                <span>Airoli, Navi Mumbai, 400708</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone size={20} className="text-rose-500 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail size={20} className="text-rose-500 flex-shrink-0" />
                <span>contact@chalostay.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 text-sm">
                Stay updated with our latest offers and news
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-rose w-full sm:w-auto"
              />
              <button className="bg-rose hover:bg-rose transition rounded-r-lg px-4 py-2 text-white font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ChaloStay. All rights reserved.
          </p>
          <div className="mt-2 text-xs flex justify-center space-x-4 text-gray-500">
            <Link href="/terms" className="hover:text-rose-500/80 transition">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-rose-500/80 transition">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-rose-500/80 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
