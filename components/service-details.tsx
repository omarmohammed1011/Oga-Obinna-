"use client"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Camera, Music, Calendar, MessageCircle, Gift, Star, ChevronDown, ChevronUp } from "lucide-react"

export function ServiceDetails() {
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
        "Transform your event with Obinna's dynamic hosting style. From corporate functions to weddings, he brings the perfect blend of professionalism and entertainment that keeps audiences engaged throughout your event. His experience spans over 500 events, making him Kenya's most sought-after MC.",
      features: [
        "Professional event hosting and crowd management",
        "Custom scripts tailored to your event theme",
        "Bilingual presentation (English & Swahili)",
        "Interactive audience engagement activities",
        "Professional sound equipment coordination",
        "Timeline management and smooth transitions",
      ],
      price: "From KSh 50,000",
      duration: "4-8 hours",
      includes: "Pre-event consultation, custom script development, professional hosting, post-event follow-up",
    },
    {
      id: 2,
      icon: Users,
      title: "Brand Influencing",
      description: "Amplify your brand through Obinna's massive social media following.",
      fullDescription:
        "Leverage Obinna's 2M+ social media following to boost your brand visibility. Strategic content creation and authentic endorsements that resonate with Kenyan audiences. Our campaigns have generated over 50M impressions for partner brands.",
      features: [
        "Strategic social media campaigns across all platforms",
        "Custom content creation and storytelling",
        "Authentic brand endorsements and testimonials",
        "Detailed audience analytics and reporting",
        "Cross-platform content distribution",
        "Long-term brand partnership opportunities",
      ],
      price: "From KSh 100,000",
      duration: "1-4 weeks",
      includes: "Campaign strategy, content creation, posting schedule, analytics report",
    },
    {
      id: 3,
      icon: Gift,
      title: "Apology Package",
      description: "A unique and humorous way to send apologies through Obinna's personal delivery.",
      fullDescription:
        "Need to make amends? Let Obinna deliver your apology in his signature humorous style. Perfect for relationship mishaps, business apologies, or any situation requiring a memorable peace offering. This unique service has a 95% success rate in mending relationships!",
      features: [
        "Personal apology delivery by Obinna",
        "Custom apology script with humor elements",
        "Professional video recording of the apology",
        "Guaranteed memorable and effective delivery",
        "Follow-up consultation if needed",
        "Discretion and professionalism assured",
      ],
      price: "From KSh 25,000",
      duration: "1-2 hours",
      includes: "Script consultation, personal delivery, video recording, follow-up support",
    },
    {
      id: 4,
      icon: Star,
      title: "Special Appearance",
      description: "Book Obinna to make your event unforgettable with his celebrity presence.",
      fullDescription:
        "Add star power to your event with Obinna's celebrity appearance. Perfect for grand openings, product launches, or any occasion that needs that extra special touch. His presence guarantees media attention and social media buzz.",
      features: [
        "Celebrity presence and star power",
        "Professional photo opportunities",
        "Meet & greet sessions with guests",
        "Social media coverage and posts",
        "Media interviews if required",
        "Red carpet appearances",
      ],
      price: "From KSh 75,000",
      duration: "2-4 hours",
      includes: "Celebrity appearance, photo sessions, social media coverage, brief remarks",
    },
    {
      id: 5,
      icon: Calendar,
      title: "Event Management",
      description: "Full support for planning, coordinating, and executing your event.",
      fullDescription:
        "Complete event management services from concept to execution. Obinna's experienced team handles all aspects of event planning, ensuring your occasion runs smoothly and memorably. We've successfully managed over 200 events of all sizes.",
      features: [
        "Complete event planning and conceptualization",
        "Vendor coordination and management",
        "Detailed timeline and logistics management",
        "On-site supervision and coordination",
        "Budget management and cost optimization",
        "Post-event evaluation and reporting",
      ],
      price: "From KSh 150,000",
      duration: "2-8 weeks",
      includes: "Full planning, vendor coordination, on-site management, post-event report",
    },
    {
      id: 6,
      icon: Music,
      title: "Sound & DJ",
      description: "Professional sound setup and DJ services to keep the vibe alive.",
      fullDescription:
        "Premium sound systems and professional DJ services that keep your event energized. From background music to dance floor hits, we've got your audio needs covered with state-of-the-art equipment and experienced DJs.",
      features: [
        "Professional sound system setup",
        "Experienced DJ services",
        "Custom music curation for your event",
        "Technical support throughout the event",
        "Wireless microphone systems",
        "Backup equipment for reliability",
      ],
      price: "From KSh 40,000",
      duration: "4-12 hours",
      includes: "Sound system, DJ services, music curation, technical support",
    },
    {
      id: 7,
      icon: Camera,
      title: "Photography",
      description: "Capture your moments with high-quality photography coverage.",
      fullDescription:
        "Professional photography services that capture every important moment of your event. High-quality images delivered in multiple formats for all your needs. Our photographers specialize in event coverage with a keen eye for candid and formal shots.",
      features: [
        "Professional event photography",
        "Comprehensive event coverage",
        "High-resolution edited photos",
        "Digital delivery in multiple formats",
        "Same-day preview gallery",
        "Print-ready image formats",
      ],
      price: "From KSh 30,000",
      duration: "4-8 hours",
      includes: "Professional photography, editing, digital gallery, high-res downloads",
    },
    {
      id: 8,
      icon: MessageCircle,
      title: "Meet & Greet",
      description: "Book a personal session with Obinna for fans, friends, or clients.",
      fullDescription:
        "Intimate meet and greet sessions with Obinna. Perfect for fan experiences, client appreciation events, or special occasions requiring a personal touch. These sessions create lasting memories and strengthen relationships.",
      features: [
        "Personal one-on-one interaction",
        "Professional photo sessions",
        "Autograph opportunities",
        "Memorable conversation and experience",
        "Customized interaction based on occasion",
        "Social media photo opportunities",
      ],
      price: "From KSh 20,000",
      duration: "1-2 hours",
      includes: "Personal interaction, photo session, autographs, memorable experience",
    },
  ]

  const toggleExpanded = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

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
            Detailed Service Offerings
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our comprehensive range of entertainment and event services, each designed to deliver exceptional
            experiences
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`luxury-card transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${expandedService === service.id ? "shadow-xl" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 cursor-pointer" onClick={() => toggleExpanded(service.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right hidden sm:block">
                      <p className="font-semibold text-gray-900">{service.price}</p>
                      <p className="text-sm text-gray-600">{service.duration}</p>
                    </div>
                    {expandedService === service.id ? (
                      <ChevronUp className="w-5 h-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                </div>

                {/* Mobile Price Display */}
                <div className="sm:hidden mt-4 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{service.price}</span>
                  <span className="text-sm text-gray-600">{service.duration}</span>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedService === service.id && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-fade-in-up">
                  <div className="pt-6 grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Detailed Description</h4>
                        <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Service Package</h4>
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm text-gray-500">Starting Price</span>
                          <p className="font-bold text-xl text-gray-900">{service.price}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Duration</span>
                          <p className="font-semibold text-gray-900">{service.duration}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Package Includes</span>
                          <p className="text-sm text-gray-600 leading-relaxed">{service.includes}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = "/#book-obinna"
                          }}
                          className="w-full bg-amber-500 text-black px-4 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors duration-300"
                        >
                          Book This Service
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.location.href = "/contact"
                          }}
                          className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                        >
                          Get Custom Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
