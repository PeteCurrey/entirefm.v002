import BMUCradleServicing from "@/legacy-pages/services/BMUCradleServicing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMU Cradle Servicing & Testing | LOLER & PUWER Compliance",
  description: "LOLER, PUWER and manufacturer-recommended servicing for façade access systems. Expert BMU testing and statutory compliance.",
};

export default function BMUCradleServicingPage() {
  return <BMUCradleServicing />;
}
