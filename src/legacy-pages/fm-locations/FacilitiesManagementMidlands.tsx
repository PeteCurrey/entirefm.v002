"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementMidlands = () => {
  return <GeoLandingPage cityData={cityData.midlands} customSlug="facilities-management-midlands" />;
};

export default FacilitiesManagementMidlands;
