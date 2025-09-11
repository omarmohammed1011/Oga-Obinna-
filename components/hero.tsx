"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { HeroCarousel } from "./hero-carousel"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    window.location.href = "/about"
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Carousel Background */}
      <HeroCarousel />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center text-white">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Kenya's Premier
              <span className="block text-amber-400">Entertainment Icon</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              From radio waves to comedy stages, from brand partnerships to unforgettable events - experience the magic
              of Oga Obinna's entertainment empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("book-obinna")}
                className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 hover:scale-105 shadow-lg min-w-[200px]"
              >
                Book Obinna
              </button>
              <button
                onClick={scrollToAbout}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Learn More About Obinna
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}
