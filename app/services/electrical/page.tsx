import Electrical from "@/legacy-pages/services/Electrical";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Compliance & Testing UK | EICR & PAT Testing | EntireFM",
  description: "NICEIC-approved electrical testing and compliance. EICR, PAT testing, thermal imaging, and same-day remedials for commercial buildings across the UK.",
};

export default function ElectricalPage() {
  return <Electrical />;
}
