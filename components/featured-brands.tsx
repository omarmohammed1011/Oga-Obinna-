"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export function FeaturedBrands() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const brands = [
    {
      name: "Zinco Mabati",
      logo: "/placeholder.svg?height=80&width=200&text=Zinco+Mabati",
      description: "Leading roofing solutions provider in Kenya",
    },
    {
      name: "Mozzart",
      logo: "/placeholder.svg?height=80&width=200&text=Mozzart",
      description: "Premier sports betting and entertainment platform",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Partnering with Kenya's most innovative companies to create memorable brand experiences
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`luxury-card p-8 text-center group hover:shadow-xl transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-16 sm:h-20 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{brand.name}</h3>
              <p className="text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Partner?</h3>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Join these leading brands in creating impactful partnerships that resonate with Kenyan audiences.
            </p>
            <Link href="/services">
              <button className="bg-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 min-h-[48px] inline-flex items-center">
                Explore Partnerships
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
