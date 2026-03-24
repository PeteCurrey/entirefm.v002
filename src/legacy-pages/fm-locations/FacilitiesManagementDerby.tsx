"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementDerby = () => {
  return <GeoLandingPage cityData={cityData.derby} customSlug="facilities-management-derby" />;
};

export default FacilitiesManagementDerby;
