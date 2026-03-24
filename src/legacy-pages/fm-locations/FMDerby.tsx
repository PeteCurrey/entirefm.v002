"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMDerby = () => {
  return <GeoLandingPage cityData={cityData.derby} />;
};

export default FMDerby;
