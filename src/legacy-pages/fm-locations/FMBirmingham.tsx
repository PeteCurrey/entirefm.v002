"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMBirmingham = () => {
  return <GeoLandingPage cityData={cityData.birmingham} />;
};

export default FMBirmingham;
