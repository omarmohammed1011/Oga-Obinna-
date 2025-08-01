import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { ServicePackages } from "@/components/service-packages"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Professional Services | Oga Obinna Entertainment",
  description:
    "Book Oga Obinna for MC services, comedy shows, radio hosting, brand partnerships, and live performances. Premium entertainment for corporate and private events.",
  keywords: "MC services, comedy shows, radio hosting, brand partnerships, event entertainment, corporate events",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <ServicesHero />
      <ServiceDetails />
      <ServicePackages />
      <Footer />
    </>
  )
}
