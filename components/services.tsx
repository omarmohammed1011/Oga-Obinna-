"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Camera, Music, Calendar, MessageCircle, Gift, Star, ChevronDown, ChevronUp } from "lucide-react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedService, setExpandedService] = useState<number | null>(null)
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
      id: 1,
      icon: Mic,
      title: "Event MC",
      description: "Professional hosting with energy, humor, and crowd engagement expertise.",
      fullDescription:
        "Transform your event with Obinna's dynamic hosting style. From corporate functions to weddings, he brings the perfect blend of professionalism and entertainment that keeps audiences engaged throughout your event.",
      features: ["Professional hosting", "Crowd engagement", "Custom scripts", "Bilingual presentation"],
      price: "From KSh 50,000",
      duration: "4-8 hours",
    },
    {
      id: 2,
      icon: Users,
      title: "Brand Influencing",
      description: "Amplify your brand through Obinna's massive social media following.",
      fullDescription:
        "Leverage Obinna's 2M+ social media following to boost your brand visibility. Strategic content creation and authentic endorsements that resonate with Kenyan audiences.",
      features: ["Social media campaigns", "Content creation", "Brand endorsements", "Audience analytics"],
      price: "From KSh 100,000",
      duration: "1-4 weeks",
    },
    {
      id: 3,
      icon: Gift,
      title: "Apology Package",
      description: "A unique and humorous way to send apologies through Obinna's personal delivery.",
      fullDescription:
        "Need to make amends? Let Obinna deliver your apology in his signature humorous style. Perfect for relationship mishaps, business apologies, or any situation requiring a memorable peace offering.",
      features: ["Personal delivery", "Custom apology script", "Video recording", "Guaranteed laughs"],
      price: "From KSh 25,000",
      duration: "1-2 hours",
    },
    {
      id: 4,
      icon: Star,
      title: "Special Appearance",
      description: "Book Obinna to make your event unforgettable with his celebrity presence.",
      fullDescription:
        "Add star power to your event with Obinna's celebrity appearance. Perfect for grand openings, product launches, or any occasion that needs that extra special touch.",
      features: ["Celebrity presence", "Photo opportunities", "Meet & greet", "Social media coverage"],
      price: "From KSh 75,000",
      duration: "2-4 hours",
    },
    {
      id: 5,
      icon: Calendar,
      title: "Event Management",
      description: "Full support for planning, coordinating, and executing your event.",
      fullDescription:
        "Complete event management services from concept to execution. Obinna's team handles all aspects of event planning, ensuring your occasion runs smoothly and memorably.",
      features: ["Full event planning", "Vendor coordination", "Timeline management", "On-site supervision"],
      price: "From KSh 150,000",
      duration: "2-8 weeks",
    },
    {
      id: 6,
      icon: Music,
      title: "Sound & DJ",
      description: "Professional sound setup and DJ services to keep the vibe alive.",
      fullDescription:
        "Premium sound systems and professional DJ services that keep your event energized. From background music to dance floor hits, we've got your audio needs covered.",
      features: ["Professional sound system", "DJ services", "Music curation", "Technical support"],
      price: "From KSh 40,000",
      duration: "4-12 hours",
    },
    {
      id: 7,
      icon: Camera,
      title: "Photography",
      description: "Capture your moments with high-quality photography coverage.",
      fullDescription:
        "Professional photography services that capture every important moment of your event. High-quality images delivered in multiple formats for all your needs.",
      features: ["Professional photography", "Event coverage", "Edited photos", "Digital delivery"],
      price: "From KSh 30,000",
      duration: "4-8 hours",
    },
    {
      id: 8,
      icon: MessageCircle,
      title: "Meet & Greet",
      description: "Book a personal session with Obinna for fans, friends, or clients.",
      fullDescription:
        "Intimate meet and greet sessions with Obinna. Perfect for fan experiences, client appreciation events, or special occasions requiring a personal touch.",
      features: ["Personal interaction", "Photo sessions", "Autographs", "Memorable experience"],
      price: "From KSh 20,000",
      duration: "1-2 hours",
    },
  ]

  const toggleExpanded = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Premium Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional entertainment and event services tailored to make your occasion unforgettable
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`luxury-card group cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${expandedService === service.id ? "col-span-full" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleExpanded(service.id)}
            >
              <div className="p-6">
                {/* Service Icon */}
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>

                {/* Service Info */}
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{service.description}</p>

                {/* Expand/Collapse Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-600">Learn More</span>
                  {expandedService === service.id ? (
                    <ChevronUp className="w-4 h-4 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-amber-600" />
                  )}
                </div>

                {/* Expanded Content */}
                {expandedService === service.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in-up">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-gray-900 mb-3">Full Description</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{service.fullDescription}</p>

                        <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Service Details</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-500">Starting Price</span>
                            <p className="font-semibold text-gray-900">{service.price}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Duration</span>
                            <p className="font-semibold text-gray-900">{service.duration}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              const element = document.getElementById("book-obinna")
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                              }
                            }}
                            className="w-full bg-amber-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-amber-400 transition-colors duration-300 mt-4"
                          >
                            Book This Service
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="luxury-card p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Let's discuss your event needs and create an unforgettable experience together.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("book-obinna")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 min-h-[48px] inline-flex items-center"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
