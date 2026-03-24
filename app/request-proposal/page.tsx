import RequestProposal from "@/legacy-pages/RequestProposal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Proposal | EntireFM",
  description: "Get a tailored facilities management proposal for your estate. Hard FM, Soft FM, and Integrated solutions.",
};

export default function RequestProposalPage() {
  return <RequestProposal />;
}
