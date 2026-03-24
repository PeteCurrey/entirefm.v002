"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementManchester = () => {
  return <GeoLandingPage cityData={cityData.manchester} customSlug="facilities-management-manchester" />;
};

export default FacilitiesManagementManchester;
