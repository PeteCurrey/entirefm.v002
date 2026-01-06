import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementLeeds = () => {
  return <GeoLandingPage cityData={cityData.leeds} customSlug="facilities-management-leeds" />;
};

export default FacilitiesManagementLeeds;
