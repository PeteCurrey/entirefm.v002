import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMTelford = () => {
  return <GeoLandingPage cityData={cityData.telford} />;
};

export default FMTelford;
