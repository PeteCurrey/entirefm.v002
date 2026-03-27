import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';

// Import Templates
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

    // Generate reference number: EFM-YYYY-RANDOM
    const date = new Date();
    const year = date.getFullYear();
    const randomId = Math.floor(10000 + Math.random() * 90000);
    const referenceNumber = `EFM-${year}-${randomId}`;
    
    // Default formatted date
    const generatedDate = metadata?.generatedDate || date.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    let pdfElement;

    switch (templateType) {
      case 'ppm-schedule':
        pdfElement = <PPMSchedulePDF data={{ ...data, referenceNumber, generatedDate, generatedFor: metadata?.generatedFor || 'Website User' }} />;
        break;
      case 'compliance-report':
        pdfElement = <ComplianceReportPDF data={{ ...data, referenceNumber, generatedDate, generatedFor: metadata?.generatedFor || 'Website User' }} />;
        break;
      case 'ppm-estimate':
        pdfElement = <PPMEstimatePDF data={{ ...data, referenceNumber, generatedDate, generatedFor: metadata?.generatedFor || 'Website User' }} />;
        break;
      case 'roi-report':
        pdfElement = <ROIReportPDF data={{ ...data, referenceNumber, generatedDate, generatedFor: metadata?.generatedFor || 'Website User' }} />;
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
      default:
        return NextResponse.json({ error: 'Invalid templateType' }, { status: 400 });
    }

    // Render PDF to buffer
    const pdfBuffer = await renderToBuffer(pdfElement);

    // Return binary response
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="EntireFM-${templateType}-${referenceNumber}.pdf"`,
      },
    });

  } catch (error) {
    console.error('PDF Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
