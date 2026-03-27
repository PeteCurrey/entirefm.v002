import { NextResponse } from 'next/server';
import { renderToBuffer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica' },
  header: { fontSize: 24, marginBottom: 20, color: '#1a2e4a' },
  text: { fontSize: 12, lineHeight: 1.5, color: '#333' }
});

const GenericPDF = ({ title, referenceNumber, generatedDate }: { title: string, referenceNumber: string, generatedDate: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.text}>Reference: {referenceNumber}</Text>
      <Text style={styles.text}>Date Generated: {generatedDate}</Text>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.text}>Thank you for your interest in EntireFM.</Text>
        <Text style={styles.text}>This document template is currently being updated. Please contact our team for more information.</Text>
      </View>
    </Page>
  </Document>
);

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
      case 'tender-brief':
        pdfElement = <GenericPDF title="Tender Brief Specification" referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
      case 'guide':
        pdfElement = <GenericPDF title={`Resource Guide: ${data?.title || 'Document'}`} referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
      default:
        console.warn(`[Generate PDF] Unmapped templateType: ${templateType}. Returning generic PDF.`);
        pdfElement = <GenericPDF title="EntireFM Document" referenceNumber={referenceNumber} generatedDate={generatedDate} />;
        break;
    }

    // Render PDF to buffer
    const pdfBuffer = await renderToBuffer(pdfElement);

    // Return binary response
    return new Response(new Uint8Array(pdfBuffer), {
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
