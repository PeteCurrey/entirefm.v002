import { Link } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  link: string;
  sector: string;
}

interface LocationCaseStudiesProps {
  location: 'london' | 'birmingham' | 'manchester' | 'leeds' | 'sheffield' | 'nottingham' | 'derby' | 'midlands' | 'industrial';
  title?: string;
}

const caseStudyMap: Record<string, CaseStudy[]> = {
  london: [
    { title: 'Corporate Office – London', link: '/case-studies/corporate-office-london', sector: 'Offices' },
    { title: 'Aviation Terminal Facilities', link: '/case-studies/aviation', sector: 'Aviation' },
  ],
  birmingham: [
    { title: 'Retail Complex – Birmingham', link: '/case-studies/retail-complex-birmingham', sector: 'Retail' },
  ],
  manchester: [
    { title: 'PBSA Estate – Manchester', link: '/case-studies/pbsa-estate-manchester', sector: 'PBSA' },
  ],
  leeds: [
    { title: 'Corporate HQ Transformation', link: '/case-studies/corporate-hq', sector: 'Offices' },
  ],
  sheffield: [
    { title: 'Industrial Warehouse – Sheffield', link: '/case-studies/industrial-warehouse-sheffield', sector: 'Industrial' },
    { title: 'Industrial Plant Operations', link: '/case-studies/industrial-plant', sector: 'Industrial' },
  ],
  nottingham: [
    { title: 'Residential PBSA Estate', link: '/case-studies/residential-pbsa', sector: 'PBSA' },
  ],
  derby: [
    { title: 'Industrial Warehouse – Sheffield', link: '/case-studies/industrial-warehouse-sheffield', sector: 'Industrial' },
  ],
  midlands: [
    { title: 'Retail Complex – Birmingham', link: '/case-studies/retail-complex-birmingham', sector: 'Retail' },
    { title: 'Industrial Warehouse – Sheffield', link: '/case-studies/industrial-warehouse-sheffield', sector: 'Industrial' },
  ],
  industrial: [
    { title: 'Industrial Plant Operations', link: '/case-studies/industrial-plant', sector: 'Industrial' },
    { title: 'Logistics Distribution Hub', link: '/case-studies/logistics-distribution-hub', sector: 'Logistics' },
  ],
};

export const LocationCaseStudies = ({ location, title = "Proven Results in Your Region" }: LocationCaseStudiesProps) => {
  const caseStudies = caseStudyMap[location] || [];

  if (caseStudies.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caseStudies.map((study, index) => (
          <Link 
            key={index}
            to={study.link} 
            className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
          >
            <div className="flex items-start gap-4">
              <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground font-light">
                  {study.sector} • Case Study
                </p>
              </div>
            </div>
          </Link>
        ))}
        <Link 
          to="/case-studies"
          className="group p-6 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-primary/20 flex items-center justify-center"
        >
          <span className="font-medium group-hover:text-primary transition-colors">
            View All Case Studies
          </span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </section>
  );
};
