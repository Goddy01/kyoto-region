import type { Metadata } from "next";
import { RecruitmentContent } from "@/components/pages/RecruitmentContent";

export const metadata: Metadata = {
  title: "Recruitment",
  description: "Apply to join Kyoto Region — players, creators, staff, and more.",
};

export default function RecruitmentPage() {
  return <RecruitmentContent />;
}
