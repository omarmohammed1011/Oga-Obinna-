"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, CreditCard, Smartphone, Truck, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
}

export function CheckoutForm() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa">("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    mpesaNumber: "",
  })

  // Mock cart data - in real app this would come from cart context/state
  useEffect(() => {
    const mockCartItems: CartItem[] = [
      {
        id: 1,
        name: "Oga Obinna Signature T-Shirt",
        price: 2500,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80&text=T-Shirt",
        size: "L",
        color: "Black",
      },
      {
        id: 2,
        name: "Premium Hoodie",
        price: 4500,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80&text=Hoodie",
        size: "M",
        color: "Purple",
      },
    ]
    setCartItems(mockCartItems)
  }, [])

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 500
  const tax = Math.round(subtotal * 0.16) // 16% VAT
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setOrderComplete(true)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your purchase. Your order #OB-{Math.random().toString(36).substr(2, 9).toUpperCase()} has
                been confirmed.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• You'll receive an email confirmation shortly</li>
                  <li>• Your order will be processed within 1-2 business days</li>
                  <li>• Delivery within Nairobi: 2-3 days</li>
                  <li>• Delivery outside Nairobi: 5-7 days</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/merchandise">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="w-full sm:w-auto">Back to Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/merchandise" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Store
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 Main Street"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Nairobi"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      placeholder="00100"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                      paymentMethod === "card"
                        ? "border-amber-500 bg-amber-50 text-amber-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mpesa")}
                    className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                      paymentMethod === "mpesa"
                        ? "border-amber-500 bg-amber-50 text-amber-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Smartphone className="w-5 h-5" />
                    <span>M-Pesa</span>
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "mpesa" && (
                  <div>
                    <Label htmlFor="mpesaNumber">M-Pesa Number</Label>
                    <Input
                      id="mpesaNumber"
                      value={formData.mpesaNumber}
                      onChange={(e) => handleInputChange("mpesaNumber", e.target.value)}
                      placeholder="+254 700 000 000"
                      required
                    />
                    <p className="text-sm text-gray-600 mt-2">You'll receive an M-Pesa prompt to complete payment</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">
                        {item.size && `Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                      </p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">KSh {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>KSh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>KSh {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (16%)</span>
                    <span>KSh {tax.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>KSh {total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security & Shipping Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Secure SSL encrypted payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Free shipping within Nairobi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Place Order Button */}
            <form onSubmit={handleSubmit}>
              <Button type="submit" className="w-full h-12 text-lg font-medium" disabled={isProcessing}>
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Place Order • KSh ${total.toLocaleString()}`
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
