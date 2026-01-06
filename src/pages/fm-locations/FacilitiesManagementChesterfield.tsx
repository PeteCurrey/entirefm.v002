import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementChesterfield = () => {
  return <GeoLandingPage cityData={cityData.chesterfield} customSlug="facilities-management-chesterfield" />;
};

export default FacilitiesManagementChesterfield;
