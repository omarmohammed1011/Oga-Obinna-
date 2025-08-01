"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Award, Briefcase } from "lucide-react"

export function Services() {
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

  const services = [
    {
      icon: Mic,
      title: "Radio Hosting",
      description: "Leading voice in East African radio entertainment with engaging shows that captivate audiences.",
    },
    {
      icon: Users,
      title: "Stand-Up Comedy",
      description: "Hilarious performances across Kenya, Nigeria, and East Africa with family-friendly humor.",
    },
    {
      icon: Award,
      title: "Event MC",
      description: "Premium MC services for corporate events, weddings, and entertainment shows.",
    },
    {
      icon: Briefcase,
      title: "Brand Endorsements",
      description: "Authentic brand partnerships and collaborations with leading companies across the region.",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Premium Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional entertainment services that elevate your events and engage your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`card p-6 sm:p-8 text-center transition-all duration-800 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
