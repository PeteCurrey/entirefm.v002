import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMLondon = () => {
  return <GeoLandingPage cityData={cityData.london} />;
};

export default FMLondon;
