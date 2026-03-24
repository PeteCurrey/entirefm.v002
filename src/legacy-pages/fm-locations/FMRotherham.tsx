"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMRotherham = () => {
  return <GeoLandingPage cityData={cityData.rotherham} />;
};

export default FMRotherham;
