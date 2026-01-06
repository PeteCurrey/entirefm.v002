import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementLondon = () => {
  return <GeoLandingPage cityData={cityData.london} customSlug="facilities-management-london" />;
};

export default FacilitiesManagementLondon;
