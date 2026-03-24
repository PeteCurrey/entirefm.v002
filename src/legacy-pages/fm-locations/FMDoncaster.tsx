"use client";

import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMDoncaster = () => {
  return <GeoLandingPage cityData={cityData.doncaster} />;
};

export default FMDoncaster;
