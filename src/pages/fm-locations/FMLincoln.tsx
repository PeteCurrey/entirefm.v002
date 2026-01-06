import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMLincoln = () => {
  return <GeoLandingPage cityData={cityData.lincoln} />;
};

export default FMLincoln;
