"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mic, Users, Gift, Star, Calendar, Music, Camera, MessageCircle, ChevronDown, ChevronUp, X } from "lucide-react"

export function Booking() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    location: "",
    guests: "",
    budget: "",
    message: "",
    services: [] as number[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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
      description: "Host your event with energy, humor, and professionalism.",
      price: "From KSh 50,000",
      duration: "4-8 hours",
    },
    {
      id: 2,
      icon: Users,
      title: "Influencing",
      description: "Promote your brand or event through Obinna's social media platforms.",
      price: "From KSh 100,000",
      duration: "1-4 weeks",
    },
    {
      id: 3,
      icon: Gift,
      title: "Apology Package",
      description: "A unique and humorous way to send apologies through Obinna's personal delivery.",
      price: "From KSh 25,000",
      duration: "1-2 hours",
    },
    {
      id: 4,
      icon: Star,
      title: "Appearance",
      description: "Book Obinna to show up and make your event unforgettable.",
      price: "From KSh 75,000",
      duration: "2-4 hours",
    },
    {
      id: 5,
      icon: Calendar,
      title: "Event Management",
      description: "Full support for planning, coordinating, and executing your event.",
      price: "From KSh 150,000",
      duration: "2-8 weeks",
    },
    {
      id: 6,
      icon: Music,
      title: "Sound & DJ",
      description: "Professional sound setup and DJ services to keep the vibe alive.",
      price: "From KSh 40,000",
      duration: "4-12 hours",
    },
    {
      id: 7,
      icon: Camera,
      title: "Photography",
      description: "Capture your moments with high-quality photography coverage.",
      price: "From KSh 30,000",
      duration: "4-8 hours",
    },
    {
      id: 8,
      icon: MessageCircle,
      title: "Meet & Greet",
      description: "Book a personal session with Obinna for fans, friends, or clients.",
      price: "From KSh 20,000",
      duration: "1-2 hours",
    },
  ]

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(selectedService === serviceId ? null : serviceId)
  }

  const handleServiceSelect = (serviceId: number) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Scroll to top of section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isSubmitted) {
    return (
      <section id="book-obinna" ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-gray-900">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="luxury-card p-8 sm:p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-dm-serif text-3xl font-bold text-gray-900 mb-4">Booking Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in booking Oga Obinna. We'll review your request and get back to you within
                24 hours.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• We'll review your booking details</li>
                  <li>• Our team will contact you within 24 hours</li>
                  <li>• We'll discuss availability and finalize details</li>
                  <li>• You'll receive a formal booking confirmation</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    eventDate: "",
                    eventType: "",
                    location: "",
                    guests: "",
                    budget: "",
                    message: "",
                    services: [],
                  })
                  setSelectedService(null)
                }}
                className="bg-amber-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-400 transition-colors duration-300"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="book-obinna" ref={sectionRef} className="py-16 sm:py-20 lg:py-32 bg-gray-900">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-dm-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Book Obinna
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Select from our premium services and let's create an unforgettable experience together
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              <button
                onClick={() => handleServiceClick(service.id)}
                className={`w-full p-6 rounded-lg text-left transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-amber-500 text-black shadow-lg scale-105"
                    : "bg-purple-900 text-white hover:bg-amber-600 hover:text-black"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <service.icon className="w-6 h-6" />
                  {selectedService === service.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm opacity-90 mb-3">{service.description}</p>
                <div className="text-xs opacity-75">
                  <p>{service.price}</p>
                  <p>{service.duration}</p>
                </div>
              </button>

              {/* Expanded Service Details */}
              {selectedService === service.id && (
                <div className="absolute top-full left-0 right-0 z-10 mt-2 bg-white rounded-lg shadow-xl p-6 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">{service.title}</h4>
                    <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold text-gray-900">{service.price}</p>
                      <p className="text-sm text-gray-600">{service.duration}</p>
                    </div>
                    <button
                      onClick={() => handleServiceSelect(service.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        formData.services.includes(service.id)
                          ? "bg-green-500 text-white"
                          : "bg-amber-500 text-black hover:bg-amber-400"
                      }`}
                    >
                      {formData.services.includes(service.id) ? "Selected" : "Select Service"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Selected Services Summary */}
        {formData.services.length > 0 && (
          <div className={`mb-8 transition-all duration-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Selected Services</h3>
              <div className="flex flex-wrap gap-2">
                {formData.services.map((serviceId) => {
                  const service = services.find((s) => s.id === serviceId)
                  return service ? (
                    <div
                      key={serviceId}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2"
                    >
                      <span>{service.title}</span>
                      <button
                        onClick={() => handleServiceSelect(serviceId)}
                        className="text-amber-600 hover:text-amber-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : null
                })}
              </div>
            </div>
          </div>
        )}

        {/* Booking Form */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="luxury-card p-8 sm:p-10">
            <h3 className="font-dm-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Complete Your Booking
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) => handleInputChange("eventType", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="product-launch">Product Launch</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="City, venue name"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Guests
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => handleInputChange("guests", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select guest count</option>
                    <option value="1-50">1-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="201-500">201-500 guests</option>
                    <option value="500+">500+ guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under KSh 50,000</option>
                    <option value="50k-100k">KSh 50,000 - 100,000</option>
                    <option value="100k-200k">KSh 100,000 - 200,000</option>
                    <option value="200k-500k">KSh 200,000 - 500,000</option>
                    <option value="500k+">KSh 500,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us more about your event, special requirements, or any questions you have..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit Booking Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="luxury-card p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Have questions about our services or need a custom package? Get in touch directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254798663936"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Call: +254 798 663936
              </a>
              <a
                href="mailto:bookings@obinnatvstudios.com"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Email: bookings@obinnatvstudios.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
