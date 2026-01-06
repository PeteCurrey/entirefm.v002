import GeoLandingPage from "@/components/geo-landing/GeoLandingPage";
import { cityData } from "@/data/geoLandingData";

const FacilitiesManagementDoncaster = () => {
  return <GeoLandingPage cityData={cityData.doncaster} customSlug="facilities-management-doncaster" />;
};

export default FacilitiesManagementDoncaster;
