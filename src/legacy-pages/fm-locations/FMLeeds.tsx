"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMLeeds = () => {
  return <GeoLandingPage cityData={cityData.leeds} />;
};

export default FMLeeds;
