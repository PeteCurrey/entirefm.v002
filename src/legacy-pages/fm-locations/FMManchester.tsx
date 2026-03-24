"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMManchester = () => {
  return <GeoLandingPage cityData={cityData.manchester} />;
};

export default FMManchester;
