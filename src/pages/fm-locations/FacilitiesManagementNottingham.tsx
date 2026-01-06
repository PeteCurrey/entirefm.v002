import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementNottingham = () => {
  return <GeoLandingPage cityData={cityData.nottingham} customSlug="facilities-management-nottingham" />;
};

export default FacilitiesManagementNottingham;
