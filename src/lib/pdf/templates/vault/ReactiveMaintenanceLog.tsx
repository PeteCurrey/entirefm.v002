import { Document, Page, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFHeader } from '../../components/PDFHeader';
import { PDFFooter } from '../../components/PDFFooter';
import { PDFWatermark } from '../../components/PDFWatermark';
import { PDFCoverSection } from '../../components/PDFCoverSection';

export const VaultReactiveMaintenanceLogPDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  // Generate 25 empty rows for manual entry
  const emptyRows = Array.from({ length: 25 }, (_, i) => i);

  return (
    <Document title="Reactive Maintenance Logbook" author="EntireFM">
      {/* PAGE 1: COVER */}
      <Page size="A4" style={globalStyles.page} wrap={false}>
        <PDFWatermark />
        <PDFHeader documentTitle="Reactive Maintenance Logbook" documentRef={referenceNumber} />
        
        <PDFCoverSection 
          title="Reactive Maintenance Logbook"
          subtitle="Building Defect Registration & Rectification Record"
          generatedFor="[ENTER FACILITY NAME HERE]"
          generatedDate={generatedDate}
          documentType="Logbook"
          referenceNumber={referenceNumber}
        />

        <View style={{ marginBottom: 30 }}>
          <Text style={{ ...globalStyles.body, marginBottom: 12 }}>
            This logbook is designed to provide a continuous, verifiable record of all reactive (ad-hoc) building maintenance issues. It tracks the fault from initial report to final contractor sign-off.
          </Text>
          <Text style={{ ...globalStyles.body, fontWeight: 700, color: pdfColors.navy }}>
            Instructions for Use:
          </Text>
          <Text style={{ ...globalStyles.body, marginLeft: 10 }}>1. Log every defect immediately upon discovery with a unique Job Ref (e.g., EFM-001).</Text>
          <Text style={{ ...globalStyles.body, marginLeft: 10 }}>2. Record the exact location and a brief description of the fault.</Text>
          <Text style={{ ...globalStyles.body, marginLeft: 10 }}>3. Upon contractor arrival, ensure they log their name and time.</Text>
          <Text style={{ ...globalStyles.body, marginLeft: 10 }}>4. The contractor must sign the log upon completion, noting any parts used or if a return visit is required.</Text>
        </View>

        <View style={{ flex: 1, borderWidth: 1, borderColor: pdfColors.borderColour, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, color: pdfColors.mutedText, letterSpacing: 4, opacity: 0.5 }}>PLACE IN BUILDING RECEPTION / FM OFFICE</Text>
        </View>

        <PDFFooter generatedDate={generatedDate} />
      </Page>

      {/* PAGE 2: LOG SHEET (Landscape for more columns) */}
      <Page size="A4" orientation="landscape" style={{ ...globalStyles.page, paddingTop: 40, paddingBottom: 60, paddingHorizontal: 30 }}>
        <PDFWatermark />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }} fixed>
          <Text style={{ fontSize: 16, fontWeight: 700, color: pdfColors.navy }}>EntireFM — Reactive Maintenance Logbook</Text>
          <Text style={{ fontSize: 10, color: pdfColors.mutedText }}>Facility: ___________________________________</Text>
        </View>

        {/* Table Header */}
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy, borderBottomWidth: 2, borderBottomColor: pdfColors.gold }} fixed>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '8%', fontSize: 8 }}>Job Ref</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '10%', fontSize: 8 }}>Date Reported</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', fontSize: 8 }}>Exact Location</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', fontSize: 8 }}>Fault Description</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '12%', fontSize: 8 }}>Contractor Name</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '18%', fontSize: 8 }}>Action Taken / Parts Used</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '12%', fontSize: 8 }}>Date Fixed & Sign</Text>
        </View>

        {/* Empty Rows */}
        {emptyRows.map((_, i) => (
          <View key={i} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 40, alignItems: 'center' }} wrap={false}>
            <View style={{ width: '8%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }}></View>
            <View style={{ width: '10%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }}></View>
            <View style={{ width: '15%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }}></View>
            <View style={{ width: '25%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }}></View>
            <View style={{ width: '12%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }}></View>
            <View style={{ width: '18%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }}></View>
            <View style={{ width: '12%', height: '100%' }}></View>
          </View>
        ))}

        {/* Basic Footer for Landscape */}
        <View style={{ position: 'absolute', bottom: 20, left: 30, right: 30, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: pdfColors.borderColour, paddingTop: 10 }} fixed>
           <Text style={{ fontSize: 8, color: pdfColors.mutedText }}>EntireFM Limited — entirefm.com</Text>
           <Text style={{ fontSize: 8, color: pdfColors.mutedText }} render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
};
