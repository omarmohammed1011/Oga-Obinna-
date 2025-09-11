"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // If not on homepage, navigate to homepage first then scroll
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Media", href: "/media" },
    { name: "Merchandise", href: "/merchandise" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm lg:text-base">OO</span>
            </div>
            <span className="text-white font-bold text-lg lg:text-xl">Oga Obinna</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-amber-400 transition-colors duration-300 font-medium ${
                  pathname === item.href ? "text-amber-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => scrollToSection("book-obinna")}
              className="bg-amber-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors duration-300"
            >
              Book Obinna
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-white hover:text-amber-400 transition-colors duration-300 font-medium py-2 ${
                    pathname === item.href ? "text-amber-400" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => scrollToSection("book-obinna")}
                className="w-full bg-amber-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors duration-300 mt-4"
              >
                Book Obinna
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
