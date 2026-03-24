import LeakDetectionRepair from "@/legacy-pages/services/LeakDetectionRepair";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leak Detection and Repair Services | Commercial | EntireFM",
  description: "Commercial leak detection and repair services. Thermal imaging, trace and access, burst pipe repairs, and 24/7 emergency water leak response across the UK.",
};

export default function LeakDetectionRepairPage() {
  return <LeakDetectionRepair />;
}
