"use client"

import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Merchandise", href: "/merchandise" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">OO</span>
              </div>
              <span className="text-white font-bold text-xl">Oga Obinna</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Kenya's premier entertainment icon, bringing laughter, energy, and unforgettable experiences to events,
              brands, and audiences across the nation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch with Obinna</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Hillcrest Court, Westlands,
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:bookings@obinnatvstudios.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  bookings@obinnatvstudios.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="tel:+254798663936"
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  +254 798 663936
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Monday - Friday: 9:00 AM - 4:30 PM</p>
                  <p className="font-medium">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">© {currentYear} Oga Obinna. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
