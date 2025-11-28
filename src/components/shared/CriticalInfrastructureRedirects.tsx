import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 301 redirects for critical infrastructure pages moved to /services/critical/
const REDIRECT_MAP: Record<string, string> = {
  "/services/lightning-protection": "/services/critical/lightning-protection",
  "/services/lightning-protection-testing": "/services/critical/lightning-protection",
  "/services/ups-maintenance": "/services/critical/ups-maintenance",
  "/services/generator-maintenance": "/services/critical/generator-maintenance",
  "/services/load-bank-testing": "/services/critical/power-redundancy",
  "/services/thermal-imaging-surveys": "/services/critical/thermal-imaging",
  "/services/data-room": "/services/critical/data-room-audits",
  "/services/data-room-audits": "/services/critical/data-room-audits",
  "/services/arc-flash": "/services/critical/arc-flash-assessment",
  "/services/arc-flash-assessment": "/services/critical/arc-flash-assessment",
  "/services/hv-switching-services": "/services/critical/hv-switching",
  "/services/hv-switching": "/services/critical/hv-switching",
  "/services/power-quality-analysis": "/services/critical/power-quality",
  "/services/power-quality": "/services/critical/power-quality",
};

export const CriticalInfrastructureRedirects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const newPath = REDIRECT_MAP[location.pathname];
    if (newPath) {
      // 301 permanent redirect
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};
