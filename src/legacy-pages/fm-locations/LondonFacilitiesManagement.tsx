"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const LondonFacilitiesManagement = () => {
  return <GeoLandingPage cityData={cityData.london} customSlug="london-facilities-management" />;
};

export default LondonFacilitiesManagement;
