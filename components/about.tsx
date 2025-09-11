"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Users, Award, Mic } from "lucide-react"

export function About() {
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

  const stats = [
    { icon: Users, value: "2M+", label: "Social Media Followers" },
    { icon: Mic, value: "500+", label: "Events Hosted" },
    { icon: Award, value: "50+", label: "Brand Partnerships" },
    { icon: Play, value: "1M+", label: "Video Views Monthly" },
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Kenya's Most
              <span className="block text-amber-500">Versatile Entertainer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              From humble beginnings to becoming one of Kenya's most recognizable faces, Oga Obinna has built an
              entertainment empire that spans radio, comedy, brand partnerships, and live events.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              With his unique blend of humor, authenticity, and business acumen, Obinna has become the go-to personality
              for brands looking to connect with Kenyan audiences in meaningful ways.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-800 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => (window.location.href = "/about")}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
            >
              Learn More About Obinna
            </button>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500&text=Oga+Obinna+Portrait"
                alt="Oga Obinna"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-black ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
