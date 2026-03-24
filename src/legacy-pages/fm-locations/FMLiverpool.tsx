"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMLiverpool = () => {
  return <GeoLandingPage cityData={cityData.liverpool} />;
};

export default FMLiverpool;
