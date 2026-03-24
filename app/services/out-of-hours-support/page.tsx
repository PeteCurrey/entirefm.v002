import OutOfHoursSupport from "@/legacy-pages/services/OutOfHoursSupport";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Out of Hours Support & Emergency Attendance | 24/7 | EntireFM",
  description: "24/7 out of hours support and emergency attendance for commercial buildings. Engineer dispatch, alarm response, BMS monitoring, and security attendance.",
};

export default function OutOfHoursSupportPage() {
  return <OutOfHoursSupport />;
}
