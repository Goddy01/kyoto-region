import type { Metadata } from "next";
import { StaffContent } from "@/components/pages/StaffContent";

export const metadata: Metadata = {
  title: "Staff",
  description: "Owners, management, coaches, and creative teams behind Kyoto Region.",
};

export default function StaffPage() {
  return <StaffContent />;
}
