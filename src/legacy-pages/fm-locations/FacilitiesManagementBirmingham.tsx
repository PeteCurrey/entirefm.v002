"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementBirmingham = () => {
  return <GeoLandingPage cityData={cityData.birmingham} customSlug="facilities-management-birmingham" />;
};

export default FacilitiesManagementBirmingham;
