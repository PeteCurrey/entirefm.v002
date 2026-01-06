import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementLiverpool = () => {
  return <GeoLandingPage cityData={cityData.liverpool} customSlug="facilities-management-liverpool" />;
};

export default FacilitiesManagementLiverpool;
