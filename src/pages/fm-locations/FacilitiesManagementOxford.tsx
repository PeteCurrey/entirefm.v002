import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementOxford = () => {
  return <GeoLandingPage cityData={cityData.oxford} customSlug="facilities-management-oxford" />;
};

export default FacilitiesManagementOxford;
