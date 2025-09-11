import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard | Oga Obinna Merchandise",
  description: "Manage merchandise inventory, orders, and analytics for Oga Obinna's official store.",
}

export default function AdminPage() {
  return <AdminDashboard />
}
