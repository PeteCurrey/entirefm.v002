import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMOxford = () => {
  return <GeoLandingPage cityData={cityData.oxford} />;
};

export default FMOxford;
