import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementBradford = () => {
  return <GeoLandingPage cityData={cityData.bradford} customSlug="facilities-management-bradford" />;
};

export default FacilitiesManagementBradford;
