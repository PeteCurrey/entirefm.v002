"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementRotherham = () => {
  return <GeoLandingPage cityData={cityData.rotherham} customSlug="facilities-management-rotherham" />;
};

export default FacilitiesManagementRotherham;
