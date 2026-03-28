import { Document, Text, View } from '@react-pdf/renderer';
import { globalStyles, pdfColors } from '../../styles';
import { PDFBaseLayout } from '../../components/PDFBaseLayout';
import { PDFCoverSection } from '../../components/PDFCoverSection';
import React from 'react';

export const VaultReactiveMaintenanceLogPDF = ({ referenceNumber, generatedDate }: { referenceNumber: string, generatedDate: string }) => {
  const emptyRows = Array.from({ length: 22 }, (_, i) => i);

  return (
    <Document title="Reactive Maintenance Logbook" author="EntireFM">
      {/* PAGE 1: COVER */}
      <PDFBaseLayout 
        documentTitle="Reactive Logbook" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        wrap={false}
      >
        <PDFCoverSection 
          title="Reactive Maintenance Logbook"
          subtitle="Building Defect Registration & Rectification Record"
          generatedFor="[Enter Facility Name]"
          generatedDate={generatedDate}
          documentType="Logbook Tool"
          referenceNumber={referenceNumber}
        />

        <View style={globalStyles.sectionBox}>
          <Text style={{ ...globalStyles.body, fontWeight: 'bold', color: pdfColors.navy, marginBottom: 8 }}>Instructions for Use:</Text>
          <Text style={globalStyles.small}>1. Log every defect immediately upon discovery with a unique Job Ref.</Text>
          <Text style={globalStyles.small}>2. Record the exact location and a brief description of the fault.</Text>
          <Text style={globalStyles.small}>3. Ensure contractors sign the log upon completion of the make-safe or final fix.</Text>
        </View>

        <View style={{ flex: 1, borderStyle: 'dashed', borderWidth: 2, borderColor: pdfColors.borderColour, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 12, color: pdfColors.mutedText, letterSpacing: 2, opacity: 0.5 }}>PLACE IN BUILDING RECEPTION / FM OFFICE</Text>
        </View>
      </PDFBaseLayout>

      {/* PAGE 2: LOG SHEET (Landscape) */}
      <PDFBaseLayout 
        documentTitle="Reactive Log Sheet" 
        referenceNumber={referenceNumber} 
        generatedDate={generatedDate}
        orientation="landscape"
      >
        {/* Table Header */}
        <View style={{ flexDirection: 'row', backgroundColor: pdfColors.navy, borderBottomWidth: 2, borderBottomColor: pdfColors.gold }}>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '8%', fontSize: 7 }}>Job Ref</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '10%', fontSize: 7 }}>Date Reported</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '15%', fontSize: 7 }}>Location</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '25%', fontSize: 7 }}>Fault Description</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '12%', fontSize: 7 }}>Contractor</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '18%', fontSize: 7 }}>Action Taken</Text>
          <Text style={{ ...globalStyles.tableHeaderCell, width: '12%', fontSize: 7 }}>Date Fixed</Text>
        </View>

        {/* Empty Rows */}
        {emptyRows.map((_, i) => (
          <View key={i} style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: pdfColors.borderColour, minHeight: 32, alignItems: 'center' }} wrap={false}>
            <View style={{ width: '8%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }} />
            <View style={{ width: '10%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }} />
            <View style={{ width: '15%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }} />
            <View style={{ width: '25%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }} />
            <View style={{ width: '12%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }} />
            <View style={{ width: '18%', borderRightWidth: 1, borderRightColor: pdfColors.borderColour, height: '100%' }} />
            <View style={{ width: '12%', height: '100%' }} />
          </View>
        ))}
      </PDFBaseLayout>
    </Document>
  );
};
