import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { ServicePackages } from "@/components/service-packages"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Professional Services | Oga Obinna",
  description:
    "Discover Oga Obinna's comprehensive entertainment services including event hosting, brand partnerships, comedy shows, and more. Book Kenya's premier entertainer today.",
  keywords: "event MC, brand influencing, comedy shows, entertainment services, Kenya",
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
