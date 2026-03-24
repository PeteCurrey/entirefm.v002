"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMSheffield = () => {
  return <GeoLandingPage cityData={cityData.sheffield} />;
};

export default FMSheffield;
