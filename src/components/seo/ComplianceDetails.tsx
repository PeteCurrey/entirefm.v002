import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, Scale, Calendar, ClipboardCheck } from "lucide-react";

interface ComplianceDetailsProps {
  serviceName: string;
  legalFramework: string[];
  responsiblePerson: string;
  consequences: string[];
  testingFrequency: string;
  whatWeInspect: string[];
}

/**
 * E-E-A-T Authority Content Block for Compliance Services
 * Provides expert signals for Google's quality guidelines
 */
export const ComplianceDetails = ({
  serviceName,
  legalFramework,
  responsiblePerson,
  consequences,
  testingFrequency,
  whatWeInspect
}: ComplianceDetailsProps) => {
  return (
    <div className="space-y-8 my-16">
      {/* What Does Compliant Delivery Look Like? */}
      <Card className="p-6 border-l-4 border-l-primary">
        <div className="flex items-start gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              What Does Compliant {serviceName} Look Like?
            </h2>
            <p className="text-muted-foreground">
              Compliant delivery means meeting all UK legal standards, maintaining accurate records, 
              and ensuring occupant safety at all times. Our engineers follow strict protocols to 
              deliver certification-ready results on every visit.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold mb-2">Legal Frameworks:</h4>
            <ul className="space-y-1">
              {legalFramework.map((framework, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{framework}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Testing Frequency:</h4>
            <p className="text-sm">{testingFrequency}</p>
            <Badge className="mt-2">Statutory Requirement</Badge>
          </div>
        </div>
      </Card>

      {/* Consequences of Non-Compliance */}
      <Card className="p-6 border-l-4 border-l-destructive bg-destructive/5">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              What Are the Consequences of Non-Compliance?
            </h2>
            <p className="text-muted-foreground mb-4">
              Failing to maintain {serviceName.toLowerCase()} standards exposes property owners, 
              facilities managers, and duty holders to serious legal and operational risks.
            </p>
          </div>
        </div>
        <div className="bg-background p-4 rounded-md">
          <h4 className="font-semibold mb-3">Potential Consequences:</h4>
          <ul className="space-y-2">
            {consequences.map((consequence, idx) => (
              <li key={idx} className="text-sm flex items-start gap-2">
                <span className="text-destructive font-bold mt-0.5">⚠</span>
                <span>{consequence}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* Who Is Responsible Under UK Law? */}
      <Card className="p-6 border-l-4 border-l-blue-500">
        <div className="flex items-start gap-3 mb-4">
          <Scale className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Who Is Responsible Under UK Law?
            </h2>
            <p className="text-muted-foreground">
              <strong>{responsiblePerson}</strong> is legally accountable for ensuring 
              {serviceName.toLowerCase()} compliance. This responsibility cannot be delegated, 
              although the practical work can be carried out by competent contractors.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-md">
          <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="text-sm space-y-1">
            <li>• Appoint competent persons to carry out testing and maintenance</li>
            <li>• Maintain accurate, up-to-date records of all inspections</li>
            <li>• Act on recommendations and rectify defects promptly</li>
            <li>• Ensure systems remain operational and compliant at all times</li>
            <li>• Review and update risk assessments regularly</li>
          </ul>
        </div>
      </Card>

      {/* Compliance Frequency & Standards */}
      <Card className="p-6 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-3 mb-4">
          <Calendar className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Compliance Frequency & Legal Standards
            </h2>
            <p className="text-muted-foreground">
              {serviceName} must be tested and maintained according to statutory frequencies 
              defined in UK building regulations and approved codes of practice.
            </p>
          </div>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-md">
          <h4 className="font-semibold mb-2">Required Testing Schedule:</h4>
          <p className="text-sm mb-3">{testingFrequency}</p>
          <p className="text-xs text-muted-foreground">
            Failure to adhere to these frequencies may invalidate insurance coverage and 
            expose duty holders to enforcement action by regulatory authorities.
          </p>
        </div>
      </Card>

      {/* What We Inspect During Your Visit */}
      <Card className="p-6 border-l-4 border-l-green-500">
        <div className="flex items-start gap-3 mb-4">
          <ClipboardCheck className="w-6 h-6 text-green-500 shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              What We Inspect During Your {serviceName} Visit
            </h2>
            <p className="text-muted-foreground">
              Our accredited engineers conduct comprehensive inspections covering all critical 
              components and compliance checkpoints. Every visit is documented with photographic 
              evidence and certification-ready reports.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {whatWeInspect.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-md">
          <p className="text-sm">
            <strong>Digital Compliance Records:</strong> All inspection data is logged in our 
            CAFM system and accessible via your client portal, ensuring audit-ready documentation 
            at all times.
          </p>
        </div>
      </Card>
    </div>
  );
};
