"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementLincoln = () => {
  return <GeoLandingPage cityData={cityData.lincoln} customSlug="facilities-management-lincoln" />;
};

export default FacilitiesManagementLincoln;
