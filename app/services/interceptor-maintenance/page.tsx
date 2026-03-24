import InterceptorMaintenance from "@/legacy-pages/services/InterceptorMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interceptor & Separator Maintenance | Oil & Fuel Interceptor Servicing",
  description: "Compliance servicing for oil, fuel and water interceptors used in car parks, loading bays and industrial estates. Expert interceptor maintenance and environmental compliance.",
};

export default function InterceptorMaintenancePage() {
  return <InterceptorMaintenance />;
}
