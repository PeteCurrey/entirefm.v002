import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FMChesterfield = () => {
  return <GeoLandingPage cityData={cityData.chesterfield} />;
};

export default FMChesterfield;
