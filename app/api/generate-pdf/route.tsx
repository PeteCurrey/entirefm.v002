import { NextResponse } from 'next/server';
import { renderToBuffer, Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '@/lib/pdf/styles';
import { PDFBaseLayout } from '@/lib/pdf/components/PDFBaseLayout';
import { PDFGoldDivider } from '@/lib/pdf/components/PDFGoldDivider';
import { PDFCoverSection } from '@/lib/pdf/components/PDFCoverSection';

// Branded Generic PDF Replacement
const BrandedGenericPDF = ({ 
  title, 
  referenceNumber, 
  generatedDate, 
  generatedFor 
}: { 
  title: string, 
  referenceNumber: string, 
  generatedDate: string, 
  generatedFor: string 
}) => (
  <Document title={`${title} - EntireFM`} author="EntireFM">
    <PDFBaseLayout 
      documentTitle="Project Document" 
      referenceNumber={referenceNumber} 
      generatedDate={generatedDate}
      showDisclaimer={true}
    >
      <PDFCoverSection 
        title={title}
        subtitle="Facility Management Documentation"
        generatedFor={generatedFor}
        generatedDate={generatedDate}
        documentType="Information Package"
        referenceNumber={referenceNumber}
      />
      <PDFGoldDivider />
      <View style={{ marginTop: 20 }}>
        <Text style={globalStyles.h2}>Document Overview</Text>
        <Text style={globalStyles.body}>
          Thank you for choosing EntireFM. This technical document contains information specifically prepared for your facility management inquiry. 
          Our mobilization and engineering teams are currently validating the technical requirements for your estate.
        </Text>
        
        <View style={globalStyles.sectionBox}>
          <Text style={[globalStyles.body, { fontWeight: 'bold', marginBottom: 5 }]}>Notice of Automation:</Text>
          <Text style={globalStyles.small}>
            This informational package is an automated issuance. A formal, peer-reviewed proposal will follow once our regional team has verified the provided asset data and statutory compliance status.
          </Text>
        </View>
      </View>
    </PDFBaseLayout>
  </Document>
);

// Import Specific Templates
import { PPMSchedulePDF } from '@/lib/pdf/templates/PPMSchedule';
import { ComplianceReportPDF } from '@/lib/pdf/templates/ComplianceReport';
import { PPMEstimatePDF } from '@/lib/pdf/templates/PPMEstimate';
import { ROIReportPDF } from '@/lib/pdf/templates/ROIReport';

// Import Vault Templates
import { VaultPPMScheduleCommercialPDF } from '@/lib/pdf/templates/vault/PPMScheduleCommercial';
import { VaultBuildingComplianceChecklistPDF } from '@/lib/pdf/templates/vault/BuildingComplianceChecklist';
import { VaultFMSLATemplatePDF } from '@/lib/pdf/templates/vault/FMSLATemplate';
import { VaultReactiveMaintenanceLogPDF } from '@/lib/pdf/templates/vault/ReactiveMaintenanceLog';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { templateType, data, metadata } = body;

    if (!templateType) {
      return NextResponse.json({ error: 'Missing templateType' }, { status: 400 });
    }

    // Generate reference number
    const date = new Date();
    const year = date.getFullYear();
    const randomId = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `EFM-${year}-${randomId}`;
    const generatedDate = metadata?.generatedDate || date.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    const generatedFor = metadata?.generatedFor || 'Website User';

    let pdfElement;

    switch (templateType) {
      case 'ppm-schedule':
        pdfElement = <PPMSchedulePDF data={{ ...data, referenceNumber, generatedDate, generatedFor }} />;
        break;
      case 'compliance-report':
        pdfElement = <ComplianceReportPDF data={{ ...data, referenceNumber, generatedDate, generatedFor }} />;
        break;
      case 'ppm-estimate':
        pdfElement = <PPMEstimatePDF data={{ ...data, referenceNumber, generatedDate, generatedFor }} />;
        break;
      case 'roi-report':
        pdfElement = <ROIReportPDF data={{ ...data, referenceNumber, generatedDate, generatedFor }} />;
        break;
      case 'vault-ppm-commercial':
        pdfElement = <VaultPPMScheduleCommercialPDF referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
      case 'vault-checklist':
        pdfElement = <VaultBuildingComplianceChecklistPDF referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
      case 'vault-sla':
        pdfElement = <VaultFMSLATemplatePDF referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
      case 'vault-reactive-log':
        pdfElement = <VaultReactiveMaintenanceLogPDF referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
      case 'tender-brief':
        pdfElement = <BrandedGenericPDF title="Tender Brief Specification" referenceNumber={referenceNumber} generatedDate={generatedDate} generatedFor={generatedFor} />;
        break;
      case 'guide':
        pdfElement = <BrandedGenericPDF title={`Resource Guide: ${data?.title || 'Document'}`} referenceNumber={referenceNumber} generatedDate={generatedDate} generatedFor={generatedFor} />;
        break;
      default:
        pdfElement = <BrandedGenericPDF title="EntireFM Documentation" referenceNumber={referenceNumber} generatedDate={generatedDate} generatedFor={generatedFor} />;
        break;
    }

    // Render PDF to buffer
    const pdfBuffer = await renderToBuffer(pdfElement);

    // Return binary response
    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Cache-Control': 'no-cache',
        'Content-Disposition': `attachment; filename="EntireFM-${templateType}-${referenceNumber}.pdf"`,
      },
    });

  } catch (error) {
    console.error('[API/PDF Export Error]:', error);
    return NextResponse.json({ 
      error: 'Failed to generate PDF. Check server logs.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
