import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { CheckoutForm } from "@/components/checkout-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Checkout | Oga Obinna Merchandise",
  description:
    "Complete your purchase of official Oga Obinna merchandise. Secure checkout with multiple payment options.",
  keywords: "checkout, payment, Oga Obinna merchandise, secure payment",
}

export default function CheckoutPage() {
  return (
    <>
      <Navigation />
      <CheckoutForm />
      <Footer />
    </>
  )
}
