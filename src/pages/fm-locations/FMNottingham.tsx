import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMNottingham = () => {
  return <GeoLandingPage cityData={cityData.nottingham} />;
};

export default FMNottingham;
