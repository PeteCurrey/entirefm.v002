import Birmingham from "@/legacy-pages/services/electrical/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Compliance in Birmingham | EICR Testing & BS 7671 | EntireFM",
  description: "EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands. Protect Birmingham operations with BS 7671 compliant electrical compliance.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
