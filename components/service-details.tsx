"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Award, Briefcase, Video, Heart } from "lucide-react"

export function ServiceDetails() {
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
      icon: Users,
      title: "MC & Event Hosting",
      description: "Professional master of ceremonies for corporate events, weddings, and entertainment shows.",
      features: ["Corporate Events", "Wedding Ceremonies", "Product Launches", "Award Shows", "Conferences"],
      price: "From KSh 50,000",
    },
    {
      icon: Award,
      title: "Stand-Up Comedy",
      description: "Hilarious performances that connect cultures and bring audiences together through laughter.",
      features: ["Comedy Shows", "Corporate Entertainment", "Private Events", "Festival Performances", "Club Shows"],
      price: "From KSh 30,000",
    },
    {
      icon: Mic,
      title: "Radio & TV Hosting",
      description: "Engaging broadcast hosting with authentic personality and professional delivery.",
      features: ["Radio Shows", "TV Hosting", "Podcast Appearances", "Live Broadcasts", "Interview Sessions"],
      price: "From KSh 25,000",
    },
    {
      icon: Briefcase,
      title: "Brand Partnerships",
      description: "Authentic brand collaborations and influencer marketing with genuine audience connection.",
      features: [
        "Social Media Campaigns",
        "Brand Endorsements",
        "Product Launches",
        "Content Creation",
        "Ambassador Programs",
      ],
      price: "Custom Pricing",
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Premium video content, social media campaigns, and digital storytelling services.",
      features: [
        "YouTube Content",
        "Social Media Videos",
        "Brand Content",
        "Educational Content",
        "Entertainment Series",
      ],
      price: "From KSh 40,000",
    },
    {
      icon: Heart,
      title: "Motivational Speaking",
      description: "Inspiring talks on entrepreneurship, entertainment industry, and personal development.",
      features: [
        "Corporate Talks",
        "Youth Seminars",
        "Educational Institutions",
        "Conference Keynotes",
        "Workshop Facilitation",
      ],
      price: "From KSh 35,000",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Service Offerings
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive entertainment services designed to elevate your events and engage your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`luxury-card p-6 sm:p-8 h-full transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Service Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4">{service.title}</h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-gray-900">{service.price}</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 min-h-[40px]">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
