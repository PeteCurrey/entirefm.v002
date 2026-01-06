import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementSheffield = () => {
  return <GeoLandingPage cityData={cityData.sheffield} customSlug="facilities-management-sheffield" />;
};

export default FacilitiesManagementSheffield;
